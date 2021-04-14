---
layout: post
title:  "Uninstall"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /install/uninstall
---

Docker Image(s):
- In Basestack, go to `Module Install`
- Select: `Remove Docker Images` (trash-bin icon)
	- This will only remove Basestack-specific images
Basestack: 
- Windows
	- `Add or remove programs` -> Select Basestack -> `Uninstall` 
- Mac
	- Drag `~/Library/Application Support/Basestack` to the Bin
- Linux 
	1. Remove the Basestack.AppImage Folder or Executable
	2. Remove the directory: `~/.config/Basestack`
User Data:
- Mac OS: `~/Library/Application Support/Basestack (taken from the name property in package.json)`
- Windows: `C:\Users\<you>\AppData\Local\Basestack Name`
- Linux: `~/.config/Basestack`