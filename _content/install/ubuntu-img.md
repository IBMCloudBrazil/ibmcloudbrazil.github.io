---
title: "ICP 2.1.0.2 - Testando versão CE"
weight: 1
---

## Testando o ICP 2.1.0.2 com VirtualBox

VirtualBox é um opção gratuita para executar servidores virtuais, disponíveis para os principais SO's.

1. Faça o download e instalação do VirtualBox
    - Download VirtualBox [here](https://www.virtualbox.org/wiki/Downloads)
    - Install VirtualBox

2. Faça o download Ubuntu + ICP 
    - Download OVA [here](https://s3-api.us-geo.objectstorage.softlayer.net/jmbarros-icp-ce/icp-2-1-0-2/icp-ce-2-1-0-2.ova)
3. Abra o arquivo com o virtual BOX 
    - garanta que esse servidor terá um acesso a internet usando uma rede do tipo bridge 
    - pelo menos 10 Gb de RAM ( 16 GB recomendado )
    - pelo menos 2 vCPU's ( 4 vCPUs recomendado)
4. Log no servidor virtual como:
    - usuário: root
    - senha: ibmcloud
