---
title: "ICP Internals"
weight: 1
---

## ICP Container Images
----------------------------

- ICP Community Edition 
    - [ICP Community Edition 2.1.0](https://raw.githubusercontent.com/IBMCloudBrazil/ibmcloudbrazil.github.io/master/_content/toolkit/icp-ce-docker-images-2.1.0.txt).
        - update at 26-NOV-2017

    - [ICP Community Edition 2.1.0.1](https://raw.githubusercontent.com/IBMCloudBrazil/ibmcloudbrazil.github.io/master/_content/toolkit/icp-ce-docker-images-2.1.0.1.txt).
        - update at 26-NOV-2017


- ICP Enterprise Edition
    - [ICP Enterprise Edition 2.1.0](https://raw.githubusercontent.com/IBMCloudBrazil/ibmcloudbrazil.github.io/master/_content/toolkit/icp-ee-docker-images-2.1.0.txt).
        - update at 27-NOV-2017


- Como importar as imagens docker para o servidor
    - para importar todos os containers docker para o servidor de instalação utilizando, execute o seguinte commando:
```
cat icp-ce-docker-images.txt | while read -r line; do docker pull "$line"; done
```
