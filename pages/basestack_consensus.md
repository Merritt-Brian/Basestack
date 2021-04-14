---
layout: post
title:  "Consensus"
date:   2021-03-31 15:26:36 -0400
categories: jekyll update
permalink: /pipelines/basestack_consensus
---

###  Running Consensus Generation and Reporting

Consensus Generation is the main feature of this application and is used to generate a report of a run directory that was generated from a MinION run. It has multiple steps but is designed to be very automated once a job is submit for analysis.

<strong>Step 1</strong>

![Step 1]({{site.baseurl}}/assets/img/AddRunFolder.png "Title")

1. Select the appropriate test folder first. This folder is either included in the `test-data` folder in the source of this application OR you can retrieve it within the install location of the app. For example, in `C:\Program Files\Basestack\client\data\test-data`. 
	- You can either drag + drop it into the *Run Folder* field or select it by left clicking and browser to the directory location on your computer

2. Once a folder has been input, you should see the text fields populate and turn green. If any field is marked as read, it is invalid and should be looked at further for proper formatting. These files should be valid for the test dataset. If you want to use your own data please follow the formatting in `run_config.txt`, `run_info.txt`, and `manifest.txt`. These formats are like:

<strong>You may skip this portion if you'd like</strong>

1. `run_config.txt`



- This should be 3 rows that dictate the primer (first), basecalling workflow (second), and barcoding cfg (third/last). Separate by tab. 


2. `run_info.txt`

|	   Column 1     |	Column 2              |
|-------------|---------------------------|
|    title     | plate 6, row c              |

- This should be a single row that contains title on the left ALWAYS and short description on the right. Separate by tab

3. `manifest.txt`

|	   Column 1     |	Column 2              |
|-------------|---------------------------|
| NB01    | NTC (always required somewhere in manifest.txt)             |
| NB02    | MDHP-00058             |
| NB03    | MDHP-00059             |
| .    | .             |
| .    | .             |
| .    | .             |

- This should be any number of rows that contain barcode on the left ALWAYS and the sample code on the right. A no-template-control (NTC) must always be specified for a report to be completed. Separate by tab.
- You are allowed to input your own custom values for each of the 3 files where the app will overwrite that corresponding file on a job submission. That means you can populate these fields by either directly modifying the files OR by inputting them into the input fields
	- These values are currently not validating to their greatest extent so take care to correctly input values and delimit them with tabs if doing this manually.


<strong>Step 2</strong>
![Step 2]({{site.baseurl}}/assets/img/AddedRunFolder.png "Title")

1. Once a folder is input and all greens are seen for the three main files, hit bookmark. The application will save all information and if any error occurs it will be reported appropriately. Please be aware that the software does not catch everything that could go wrong before a job submits

<strong>Step 3</strong>
![Step 3]({{site.baseurl}}/assets/img/Running.png "Title")

1. Once bookmarked, hit the newly-shown *Load* button to load it into the run. This will allow this tab and *RAMPART* to make use of your specified run directory. 

2. Hit `Make Consensus` to start consensus generation. 

*Note*: Depending on your method of installing Docker on Windows, you may receive a notification for docker to share a folder. Hit okay to allow the pipeline to continue. If you run Basestack as an admin, this error will be avoided. You can also opt to share the Basestack folder and sub-folders in the Docker Desktop on Windows as well (see how to do this in the next 2 images)

![]({{site.baseurl}}/assets/img/filesharingoverview.PNG "Title")

![]({{site.baseurl}}/assets/img/filesharingSelectedFolder.PNG "Title")

- Simply select the folder that contains the `Basestack.exe` file by selecting the plus-mark and navigation and selecting it within the browser. In this example it is: `...\build\win-unpacked`


<strong>Step 4</strong>

![Step 4]({{site.baseurl}}/assets/img/Running.png "Title")

1. You can see the output of the run in the `Log Streams` tab on the left. You can also see the *Statuse(s)* column begin to change as modules are completed for your run. The final module is the report generation module and should always be *1/1* when complete

<strong>Step 5</strong>

![Step 5]({{site.baseurl}}/assets/img/finalTables.PNG "Title")

1. Once complete, you can view the pdf report by clicking the *pdf* link underneath the final row's status of *1/1*. You can also traverse to any of the module directories by hitting the link text on the first column for each module. In this example, I've chosen *Report Generation* as my link which is a top-level view of all modules, as well as the `report.pdf` location. Open this pdf to see your report either from the folder or the *pdf* link on the left-most column to see your results!

<hr>