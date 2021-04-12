---
layout: post
title:  "Install Troubleshooting"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /install/troubleshooting

---


## General

- Request or view feature changes at our [issue tracker](https://github.com/jhuapl-bio/Basestack/issues)
- If you run into issues with the online install, you may want to download (or otherwise obtain) the offline install package
	- Using the above download links, download the appropriate docker images you'd like e.g. basestack_consensus.tar.gz (~5.2GB)
	- With the 'Module Install' tab, select the gear icon and switch install method to 'offline'
	- Drag or Browse to that file on YOUR SYSTEM into the appropriate file input space
	- Click 'Install' (play-circle button)
- See below Appendices for more detailed installation instructions. 

## Windows

##### Hyper-V Not Enabled - Windows

![Step 1]({{site.baseurl}}/assets/img/EnableBIOSVirtualization.PNG "HyperVEnable")

If you are on older Windows distributions, you may experience an error when attempting to start docker on how HyperV is not enabled. 

##### A. Enable Hyper-V in Basestack

To enable it within Basestack select: `System -> Windows Services -> Hyper-V -> Enable Hyper-V`. 

A window will appear prompting admin rights and then it will automatically being the enable process. See more below.

![Step 1]({{url}}/assets/img/HyperVChoices.PNG "HyperVChoices")

##### B. Enable Hyper-V in Windows System

**Alternatively** you can enable it within the Host system itself by searching for "Turns Windows features on or off" and selecting "Hyper-V". This will require a computer restart

![Step 2]({{site.url}}/assets/img/Turn_Windows_ONOFF.jpg "HyperVChoices")

##### WSL2 Not Installed - Windows

The error (seen below) is often shown for newer Windows OS types. If this occurs, you may have different variants. In the included example, I have the option to enable WSL or use Hyper-V. 

![Step 1]({{baseurl}}/assets/img/WSLNotInstalled.PNG "WSL error messages")


Sometimes, another window will appear regarding installing WSL. 

##### A. Install WSL2 from External Sources

Please follow that **[link](https://docs.microsoft.com/en-us/windows/wsl/install-win10#step-4---download-the-linux-kernel-update-package)**. 

Make sure to perform **AT LEAST step 4**. Once WSL2 is installed/enabled, please restart Docker Desktop

##### B. Install WSL2 in Basestack

**Alternatively** Basestack allows users to download WSL directly.

To Download then Install it within Basestack do: 

1. `System -> Windows Services -> WSL2 -> Download WSL2`
2. `System -> Windows Services -> WSL2 -> Install WSL2`

![Step 1](/assets/img/WSLInstallDownload.PNG "WSL Install")

You can then attempt to restart Docker Desktop. This also may require a system restart.

If you are still experiencing issues, attempt to enable virtualization from Basestack:

3. `System -> Windows Services -> WSL2 -> Turn WSL On`
4. `System -> Windows Services -> WSL2 -> Enable Virtualization`
5. `System -> Windows Services -> WSL2 -> Set WSL2`

**Or** from "Turn Windows features on or off". This is also a good way double check that it is now enabled.

![Step 1](/assets/img/TurnWSLONOFF.PNG "WSL Install")

**You will need to restart your PC/Laptop after doing this!**
<br>

#### Virtualization Disabled - Windows

In order for either of the above to work, you need to ensure that **virtualization** is enabled in your firmware. Some processors do so by default, others do not. If you are having issue with starting Docker despite following either of the options above, please see below.

You can first check if it is enabled by going into the **Task Manager** and seeing if the Virtualization attribute is enabled.

![Step 1](/assets/img/TaskManagerVirtualization.PNG "taskManagerVirtWin")

If it is not, open up **Command Terminal** and type: `systeminfo`. Scroll to the bottom of the output and check if the Firmware has it enabled for Hyper-V requirements.

![Step 1](/assets/img/WinSysInfoCMD.PNG "systeminfoWin")

If not, you will need to enable Virtualization in your BIOS. This process will look different based on everyone's system. You should try to follow the instructions in this [link](https://www.thewindowsclub.com/disable-hardware-virtualization-in-windows-10). Choose your manufacturer type. 

Typically, though, to enter BIOS you must restart the computer and while it is booting hit **DEL** or **F2** or sometimes **F12**. This process is usually very quick so be ready. When it is booting, you may be able to catch the necessary keys flash.

The default BIOS should look like the one below. In there, head to the **Advanced** tab and check if **Virtualization** is present. If so, enable it, save changes, and restart. If not, try to search in other tabs or open up some options that have further submenus within them as there is no guarantee it will be directly on the base **Advanced** tab. 

![Step 1](/assets/img/BIOSDELLINTEL.jpg "BIOSDellVirt")

On AMD CPU's if you don't see virtualization it may be labeled as **SVM** in the **Advanced** tab

![Step 2](/assets/img/BIOSASUSAMD.jpg "BIOSASUSAMD.jpg")


If the option is not present in the BIOS that means that your CPU does not support Virtualization and Docker **won't be able to properly run on your system.**

<details>
<summary>View More Common Errors</summary>


## Mac

## Linux








