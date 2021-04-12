---
layout: post
title:  "Install for Linux"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /Basestack/install/linux

---

## 1. Installing Docker

https://docs.docker.com/engine/install/#server

Make sure that you select the appropriate distribution for your machine

## 2. Setting Up Configurations on Ubuntu
		A. Rootless - RECOMMENDED 
			- https://docs.docker.com/engine/security/rootless/
				- If you already have `docker` installed, see documentation on [`docker context`](https://docs.docker.com/engine/security/rootless/#client) to switch between rootless and rootful
		B. Rootful (gives root access, use if you already have docker installed or use it regularly)
			- https://docs.docker.com/engine/install/ubuntu/
				- Required to map you user permissions appropriately for generated files.
				- Recommended for most rootful-specific personal systems running Docker
			- Post-Installation Steps:
				1. Create Docker group
					a. `sudo groupadd docker`
				2. Add your user to the docker group
					a. `sudo usermod -aG docker $USER`
				3. Ensure all root-created files map as your user id in docker containers and volumes (Do both of these)
					a.1. `echo $USER:$(id -u):1 | sudo tee -a /etc/subuid`
					a.2. `echo $USER:$(id -g):1 | sudo tee -a /etc/subgid`
				4. Create Docker container namespace
					a. `echo "{\"userns-remap\": \"$USER\"}" | sudo tee -a /etc/docker/daemon.json`
						- If you dont have the file already created (isn't created by default)
					b. Manually add your user by following the instructions here: https://docs.docker.com/engine/security/userns-remap/.
						- You can disable the `userns-remap` functionality by deleting the `daemon.json` file described above or removing the line attributed to your user
				5. Check that the subgid and subuid files are correct. Order of these lines matters in that the `<username>:<uid>:1` must come first in each file
					a.1. `cat /etc/subuid`
						-`<username>:<uid>:1`
						-`<username>:100000:65536`
					a.2. `cat /etc/subgid`
						-`<username>:<uid>:1`
						-`<username>:100000:65536` 
				6. Restart Docker 
					a. `sudo service docker restart`
					b. OR Restart your computer/session
				7. Ensure that permissions are appropriate
					a. `docker run -v /tmp:/tmp nginx echo 'test' > /tmp/test.txt`
					b. ls -lht /tmp/test.txt <-- ensure that ownership is your uid/gid or username:group

Open a terminal and type `docker info`. You should see information about your `docker` service

![Step 1]({{site.url}}/{{site.baseurl}}/assets/images/docker_info.PNG "Title")

### Note:

**Rootful**:
- `/var/lib/docker` is the Docker Root Dir. YOU MUST correctly utilize the `userns-remap` configuration described above for this to work

**Rootless**:
- `$HOME/.local/share/docker` (or something similar in `$HOME`) will be the Docker Root Dir. 


{% include_relative install_module.md %}



