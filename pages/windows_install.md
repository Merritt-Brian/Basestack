---
layout: post
title:  "Install for Windows"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /install/windows

---


## 1. Install Docker 

<a href="https://docs.docker.com/docker-for-windows/install/">Docker Location</a>


#### A1.1 Windows Install Process for Docker (Click below)

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

### 1.2 Confirm Docker is Running

In your taskbar (lower-right), if you hover over the icon you should see the message displayed below. Right-clicking will give additional options

![Step 1]({{site.baseurl}}/assets/img/Docker4.PNG "Title")

## 2. Install Basestack

Download Basestack from <a href="https://github.com/Merritt-Brian/Basestack/releases">Basestack Releases</a>
- You will select the item labeled (`<Basestack-Version>.Setup.exe`)

1. Double-click `<Basestack-Version>.Setup.exe `
2. Follow the prompts for installing the software. Choose defaults unless otherwise needed.

{% include_relative install_module.md %}



