---
title: CentOS + ICP
weight: 3
---

## Using VirtualBox ( Windows, Linux, MAC OSX )

VirtualBox is the free option to run virtual servers in almost all OS's avaiable.

1. Download and install the VirtualBox
    - Download VirtualBox [here](https://www.virtualbox.org/wiki/Downloads)
    - Install VirtualBox


2. Download ICP-LAB template
    - Download ICP-LAB template [here](https://s3-api.wdc-us-geo.objectstorage.softlayer.net/jmbarros-minicloud/icp-lab-stark.ova)
    - Please check MD5:
```
MD5 = 933c19541b4c41bea85cd3c9f582908a
````


3. Open the ICP-LAB OVF file 
    - Click in the icp-lab.ofv to open using VIRTUAL BOX


4. Open the icp-lab-stark console
    - Login: root
    - Password: passw0rd
    - Execute 
````
python install_minicloud.py
````
    



