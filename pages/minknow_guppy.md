---
layout: post
title:  "MinKNOW"
date:   2021-04-26 15:26:36 -0400
categories: jekyll update
permalink: /supplemental/minknow_guppy
---

## 1. Installing MinKNOW

In order to run the MinION sequencer, you first need to download/install the necessary software from Oxford Nanopore's mirror(s). 

```
wget -O- https://mirror.oxfordnanoportal.com/apt/ont-repo.pub | sudo apt-key add -

echo "deb http://mirror.oxfordnanoportal.com/apt $(lsb_release -c | awk '{print $2}')-stable non-free" | sudo tee /etc/apt/sources.list.d/nanoporetech.sources.list

sudo apt-get -y update

sudo apt-get install -y minion-nc
```


Next, we need to install guppy on your system. Skip this step if you are not using a GPU in your system. 

PLEASE NOTE: this option is available only for Linux-based distributions. You have to use CPU-mode for Windows (Fast config basecalling mode)

## 2. CUDA

Ensure that your GPU is CUDA-capable first by typing:

```
lscpi | grep VGA
```

If you see your GPU model, for example: `NVIDIA Corporation TU102 [GeForce RTX 2080 Ti] (rev A1)` then you have a GPU available on your machine. IF you don't see that AND you know there is a GPU in the machine try to install the drivers first.


Once the drivers are installed go to: https://developer.nvidia.com/cuda-downloads. 

Select the appropriate distribution values and copy+paste the commands that populate into your terminal, one-by-one. 


<details>
<summary>View Example</summary>

<hr>
On my Ubuntu 20.04 (Focal) machine I head to https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&=Ubuntu&target_version=20.04&target_type=deb_local then copy + paste: 
```
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu2004/x86_64/cuda-ubuntu2004.pin
sudo mv cuda-ubuntu2004.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.3.0/local_installers/cuda-repo-ubuntu2004-11-3-local_11.3.0-465.19.01-1_amd64.deb
sudo dpkg -i cuda-repo-ubuntu2004-11-3-local_11.3.0-465.19.01-1_amd64.deb
sudo apt-key add /var/cuda-repo-ubuntu2004-11-3-local/7fa2af80.pub
sudo apt-get -y update
sudo apt-get -y install cuda
```
<hr>
</details>

Once installed you can confirm that it is working by writing: 

```
nvidia-smi

and

nvcc --version

```
 If both commands return a healthy output, you are all set on CUDA.



## 3. Setup MinKNOW with Guppy GPU Basecaller

Finally, you need to configure MinKNOW to use a GPU-capable version of guppy and that the guppy basecaller plays nice with the installed MinKNOW you've pulled. 


```
/opt/ont/minknow/guppy/bin/guppy_basecaller --version
```

You should see a version, for example 3.4.3. You MUST download the same version by running:

`wget https://mirror.oxfordnanoportal.com/software/analysis/ont-guppy_<version>_linux64.tar.gz`


Make sure to replace the installed version with the values after `ont-guppy_` e.g. `wget https://mirror.oxfordnanoportal.com/software/analysis/ont-guppy_4.3.4_linux64.tar.gz`


Then, we need to replace the guppy version. Let's first save the cpu-only one before replacing as well. 

```
sudo mv /opt/ont/minknow/guppy/bin /opt/ont/minknow/guppy/bin.sav # Save the old guppy just in case
tar -xvzf ont-guppy_4.3.4_linux64.tar.gz #Decompress guppy. Replace the version number with your own
sudo mv ont-guppy/bin /opt/ont/minknow/guppy/ # Move the newly downloaded guppy
sudo service minknow restart # Resart minknow
```


You will also need to adjust the configuration file for guppy by modifying `/opt/ont/minknow/conf/app_conf`. Adjust the `gpu_calling` field to true in the JSON, being careful not to modify/delete any commas or quotations.


![Step 2]({{site.baseurl}}/assets/img/cuda_gpu_guppy.png "Title")


From there you are all set to run basecalling directly within the MinKNOW application.



