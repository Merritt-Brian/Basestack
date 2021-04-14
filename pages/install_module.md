## 3. Download Analysis Pipeline(s)

<strong>See the Pipelines list (left-hand side) for more information on each module supported in Basestack currently.</strong>

- Once Basestack opens up, click 'Module Install' in the left panel.
- Click 'Install' (play-circle)
	- You may choose online or offline method. Online is default.
- Click 'OK' on the small notification window that opens up.
- Follow the *Docker Install Log* to monitor progress and see when the analysis pipeline is ready for use (about 30-45 minutes on a fast internet connection)
- Download the [`test-data.zip`](https://drive.google.com/file/d/1zrgwheJxhMTvd7zu0fuRhVYYM0aGY5XS/view?usp=sharing) file available [here](https://drive.google.com/drive/folders/1ad2U3zBTHXfly3_ybLUxJBarvHXCPS2Z)

### Method of Installation

Select *Settings* and Select *Offline* or *Online* Installation of Docker Images

1. Online: Builds the docker images directly from scratch. Recommended for production builds with stable internet access.
	- Click *Install Docker image files Online*. This process can take upwards of 45 minutes depending on internet speeds. please be patient. Once complete, you will receive a notification that the image(s) are ready and you can begin analysis!
		- If you have slow internet speed you may get a message that the image failed to build. Attempt to retry the build process a few more times and see if it works. This usually happens after the first output line has been given and is dependent on how fast your communication with Docker Hub is.

![Step 1]({{site.baseurl}}/assets/img/install_images.png "")		

2. Offline: Does not require stable internet. Builds the docker images from a large docker image. Recommended method for OFFLINE usage only.
	- Download your offline image `basestack_consensus` from the source location (described in section 2 above).
	- If you're using a Mac or Linux Operating system for the offline image, you must have write/read access to the UID/GID: 1000/1000
	- Once the app is opened, drag+drop the file (or browser to it by clicking the offline input box) into the offline install box (next to gear icon). Click *Install Docker image files offline*. This process can take some time but a notification will pop up when done. If this doesn't work, please choose the *Online* method described above (Option 1)
![Step 1]({{site.baseurl}}/assets/img/offlineInstallDocker.png "Docker Build Offline (little/no internet)")

#### Note

These processes can take some time for either method. Rest assured that it will complete. For the online mode, if you receive a warning that the docker image didn't build, try to rerun it a few more times. Interruptions specifically with internet do occur at times but the process will pick up right back where you last left it. If you keep getting the warning notification, also try refreshing the app at `View -> Reload or Force Reload` on the top left. You can also hard fresh the app by restarting it altogether (quit and re-enter).

<hr>