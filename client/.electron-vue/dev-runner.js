'use strict'

const chalk = require('chalk')
const electron = require('electron')
const path = require('path')
const { say } = require('cfonts')
const { spawn } = require('child_process')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')

const mainConfig = require('./webpack.main.config')
const rendererConfig = require('./webpack.renderer.config')
const serverConfig = require('./webpack.server.config')

let electronProcess = null
let manualRestart = false
let hotMiddleware
let devClient = false

function logStats (proc, data) {
  let log = ''

  log += chalk.yellow.bold(`┏ ${proc} Process ${new Array((19 - proc.length) + 1).join('-')}`)
  log += '\n\n'

  if (typeof data === 'object') {
    data.toString({
      colors: true,
      chunks: false
    }).split(/\r?\n/).forEach(line => {
      log += '  ' + line + '\n'
    })
  } else {
    log += `  ${data}\n`
  }

  log += '\n' + chalk.yellow.bold(`┗ ${new Array(28 + 1).join('-')}`) + '\n'

  console.log(log)
}

function startRenderer (devClient) {
  return new Promise((resolve, reject) => {
    rendererConfig.entry.renderer = [path.join(__dirname, 'dev-client')].concat(rendererConfig.entry.renderer)
    rendererConfig.mode = 'development'
    const compiler = webpack(rendererConfig)
    hotMiddleware = webpackHotMiddleware(compiler, {
      log: false,
      heartbeat: 2500,
    })

    // compiler.hooks.compilation.tap('compilation', compilation => {
    //   compilation.hooks.watchRun.tapAsync('html-webpack-plugin-after-emit', (data, cb) => {
    //     hotMiddleware.publish({ action: 'reload' })
    //     cb()
    //   })
    // })

    compiler.hooks.done.tap('done', stats => {
      logStats('Renderer', stats)
    })
    const server = new WebpackDevServer(
      compiler,

      {
        contentBase: path.join(__dirname, '../*'),
        quiet: true,

        before (app, ctx) {
          app.use(hotMiddleware)
          ctx.middleware.waitUntilValid(() => {
            resolve()
          })
        },
        watchOptions: {
          ignored: '**/.*' 
        },
        proxy: { // TODO: This is currently not working w/ AXIOS, consider fixing this if we no longer switch to Websocket in the future version releases 
          '/api': {
            target: 'localhost:5003', 
            logLevel:'debug',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        },

      }
    )

    server.listen(9080)
  })
}
function startServer (devClient){
  return new Promise((resolve, reject) => {
    serverConfig.entry.server = path.join(__dirname, '../src/modules/index.server.js')
    serverConfig.mode = 'development'
    const compiler = webpack(serverConfig)
    
    

    compiler.hooks.done.tap('done', stats => {
      logStats('Server', stats)
    })
    compiler.watch({}, (err, stats) => {
      logStats('Server', stats)
      resolve()
    })
  })
}

function startMain (devClient) {
  return new Promise((resolve, reject) => {
    mainConfig.entry.main = [path.join(__dirname, '../src/main/index.dev.js')].concat(mainConfig.entry.main)
    mainConfig.mode = 'development'
    process.env.devClient = devClient
    const compiler = webpack(mainConfig)

    compiler.hooks.watchRun.tapAsync('watch-run', (compilation, done) => {
      logStats('Main', chalk.white.bold('compiling...'))
      hotMiddleware.publish({ action: 'compiling' })
      done()
    })

    compiler.watch({}, (err, stats) => {
      logStats('Main', stats)

      if (electronProcess && electronProcess.kill) {
        manualRestart = true
        process.kill(electronProcess.pid)
        electronProcess = null
        startElectron()

        setTimeout(() => {
          manualRestart = false
        }, 5000)
      }

      resolve()
    })
  })
}

function startElectron () {
  var args = [
    '--inspect=5858',
    path.join(__dirname, '../dist/electron/main.js')
  ]

  // detect yarn or npm and process commandline args accordingly
  if (process.env.npm_execpath.endsWith('yarn.js')) {
    args = args.concat(process.argv.slice(3))
  } else if (process.env.npm_execpath.endsWith('npm-cli.js')) {
    args = args.concat(process.argv.slice(2))
  }

  electronProcess = spawn(electron, args)
  
  electronProcess.stdout.on('data', data => {
    electronLog(data, 'blue')
  })
  electronProcess.stderr.on('data', data => {
    electronLog(data, 'red')
  })

  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}

function electronLog (data, color) {
  let log = ''
  data = data.toString().split(/\r?\n/)
  data.forEach(line => {
    log += `  ${line}\n`
  })
  if (/[0-9A-z]+/.test(log)) {
    console.log(
      chalk[color].bold('┏ Electron -------------------') +
      '\n\n' +
      log +
      chalk[color].bold('┗ ----------------------------') +
      '\n'
    )
  }
}

function greeting () {
  const cols = process.stdout.columns
  let text = ''

  if (cols > 104) text = 'electron-vue'
  else if (cols > 76) text = 'electron-|vue'
  else text = false

  if (text) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.yellow.bold('\n  electron-vue'))
  console.log(chalk.blue('  getting ready...') + '\n')
}

function init () {
  greeting()
  if (process.argv.slice(2) =="client"){
    devClient = true
  }
  Promise.all([
    startServer(devClient), 
    startRenderer(devClient), 
    startMain(devClient)
    ])
    .then(() => {
      startElectron()
    })
    .catch(err => {
      console.error(err)
    })
}

init()
