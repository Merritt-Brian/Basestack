---
layout: post
title:  "Install for Windows"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /install/windows

---


## 1. Install Docker 

<a href="https://docs.docker.com/docker-for-windows/install/">Docker Location</a>


<details>
<summary>View Example</summary>

<hr>

#### 1.1 Windows Install Process for Docker (Click below)

1. Head over to the [Docker](https://docs.docker.com/docker-for-windows/install/) website to install **Docker**

![Step 1]({{site.baseurl}}/assets/img/Docker1.PNG "Title")

2. Choose **Get Docker**

![Step 2]({{site.baseurl}}/assets/img/Docker2.PNG "Title")

3. Choose **Save File** from the prompt

![Step 3]({{site.baseurl}}/assets/img/Docker3.PNG "Title")

4. Once you've installed docker for Windows, you can start it at the **Quick Launch** by search **Docker**. You can also view it on your right-hand-bottom tray by right-clicking

![Step 4]({{site.baseurl}}/assets/img/Docker4.PNG "Title")

5. Here Docker provides a GUI environment to manage your system. You can allocate or limit resources to your containers as well as set networking settings if you'd like. **We use default values for our app**

![Step 5]({{site.baseurl}}/assets/img/Docker4.1.PNG "Title")

6. **OPTIONAL** Choose Local drives to share with containers. Useful if you're storing data on an external drive.

![Step 6]({{site.baseurl}}/assets/img/Docker4.2.PNG "Title")

7. Main image that allows you to manage specific containers 


![Step 8]({{site.baseurl}}/assets/img/Docker5.PNG "Title")
<hr>

#### 1.2 Confirm Docker is Running

In your taskbar (lower-right), if you hover over the icon you should see the message displayed below. Right-clicking will give additional options

![Step 1]({{site.baseurl}}/assets/img/Docker4.PNG "Title")

</details>

<br>
<hr>



## 2. Install Basestack

Download Basestack from <a href="https://github.com/Merritt-Brian/Basestack/releases">Basestack Releases</a>
- You will select the item labeled (`<Basestack-Version>.Setup.exe`)

1. Double-click `<Basestack-Version>.Setup.exe `
2. Follow the prompts for installing the software. Choose defaults unless otherwise needed.


<details>
<summary>Developer Mode Installation</summary>

Prereq: `python3`, `miniconda` or `anaconda` environment (Windows Developers only. Installation handled for Mac and Linux in `make` process)

1. Install `make`
	- If on Windows you can get this in a conda environment
2. Clone this repo using `git clone`. 
	- All source code will be obtained in the folder. 
3. Build Conda Environment using `conda`
	- `conda env create -f environment.yml`
	- `conda activate basestack`
4. Build the App or Run in Development Mode
	- Building the app and dependencies `make build-[unix|win]`
	- Running hot reload for development `make dev`
		- Dependencies must be already installed with `make build-[unix|win]`


<hr>

<strong>Only do this step (below) if you don't have conda installed</strong>

https://docs.anaconda.com/anaconda/install/

Examples:

	Ubuntu: 
		- wget  https://repo.anaconda.com/archive/Anaconda3-2019.10-Linux-x86_64.sh
		- bash Anaconda3-2019.10-Linux-x86_64.sh
	Mac 
		- https://docs.anaconda.com/anaconda/install/mac-os/
	Windows 
		- https://www.anaconda.com/distribution/#windows

<br>
<hr>

##### Conda on Windows Install Process 

1. Select **Python3.7** version of Anaconda to install and choose **Save File**

![Step 1]({{site.baseurl}}/assets/img/Anaconda1.PNG "Title")

2. Wait for the process to bring up the user interface. Select **Next** several times until you get to the install directory location

![Step 1]({{site.baseurl}}/assets/img/Anaconda2.PNG "Title")

If you'd like a new install location specify here. You will need to supply this path for **Step 2**

##### Note

* Both the back and frontend will be started by this command. However, we intend in future releases to utilize websockets to update information to the user interface rather than a separate backend server being served on the host. 

* If you want to build for distros that aren't your own (e.g. Build windows on an ubuntu machine), you will need to download the required third-party apps for this (in this example, wine). Take a look [here](https://www.electron.build/multi-platform-build) for more documentation. You can't run `make build[unix|win]` either, you must run the `npm` commmand for it (located in `client/package.json`).
	- You can run `npm run build:[win,linux,mac-dmg, mac-zip]` to accomplish this in `client`. Leave the value after `:` blank if you want to opt for your host platform.
	- Currently, there is not support for building a .dmg file on another OS (Windows, Linux). You will have to build a zip folder with the app with `npm run build:mac-zip`. Mac users can run the default build OR `npm run build:mac-dmg`
	
* Current Containers to Build:
	- basestack_consensus
	- rampart
	- workshop_tutorial
* Upcoming Containers:
	- [Nextstrain](https://nextstrain.org/help/coronavirus/SARS-CoV-2)
	- [IGV](https://igv.org/)
	- [Mytax](https://github.com/tmehoke/mytax)

</details>

<br>
<hr>

{% include_relative install_module.md %}


