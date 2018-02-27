---
title: "ICP-CE 2.1.0.1 em Ubuntu 16.04"
weight: 1
---

## Crie os servidores

Para um ambiente com separação de roles, crie 5 servidores:

- jumper01
- master01
- proxy01
- worker01
- worker02

OU para um ambiente em modo all-in-one, crie apenas 1 servidor, TODOS os comandos deverão ser executados dentro desse servidor:

- icp01
----------------

## Crie a chave de acesso aos servidores 

Se optou pela opção de 5 servidores, execute os comandos abaixo somente no JUMPER01, se optou pela opção all-in-one execute esse comando no ICP01. 

```
ssh-keygen -b 4096 -f ~/.ssh/id_rsa -N ""
cat ~/.ssh/id_rsa.pub | sudo tee -a ~/.ssh/authorized_keys
```

Somente se escolheu a opção de 5 servidores, copie a chave para os demais servidores do cluster:
```
ssh-copy-id -i ~/.ssh/id_rsa.pub master01
ssh-copy-id -i ~/.ssh/id_rsa.pub proxy01
ssh-copy-id -i ~/.ssh/id_rsa.pub worker01
ssh-copy-id -i ~/.ssh/id_rsa.pub worker02
```

## Atualize e configure TODOS os servidores

Faça login em cada um dos servidores e atualize e configure com declarado abaixo:

```
apt update -y 
apt upgrade -y
apt install python
echo "vm.max_map_count=262144" | tee -a /etc/sysctl.conf
echo 'net.ipv4.ip_local_port_range="10240 60999"' | tee -a /etc/sysctl.conf
apt-get remove docker docker-engine docker.io
```
----------------

## Instale o DOCKER-CE em TODOS os servidores

Instale alguns pacotes para instalar o Docker-CE:

```
apt-get install \
apt-transport-https \
ca-certificates \
curl \
software-properties-common
```

Adicione a GPG:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
```

Adcione o repositório:
```
add-apt-repository \
"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) \
stable”
```

Instale o Docker-CE
```
apt-get update 
apt-get install docker-ce
systemctl enable docker
```
----------------

## Configure o instalador do ICP 

Acesse o JUMPER01 ou ICP01 e faça o pull do container de instalação:

```
docker pull ibmcom/icp-inception:2.1.0.1
```

Crie um diretório para a configuração

```
mkdir /opt/ibm-cloud-private-ce-2.1.0.1
cd /opt/ibm-cloud-private-ce-2.1.0.1
```

Execute o container para baixar os arquivos de configuração:

```
docker run -e LICENSE=accept \
-v "$(pwd)":/data ibmcom/icp-inception:2.1.0.1 cp -r cluster /data
```

Copie a chave de segurança: 
```
cd /opt/ibm-cloud-private-ce-2.1.0.1/cluster/
cp ~/.ssh/id_rsa ssh_key
```

Edite os hosts que serão instalados:
- no caso do ICP01 coloque o ip do servidor em todos as opções, exemplo:

```
[master]
ICP01_NODE_IP_ADDRESS
[worker]
ICP01_NODE_IP_ADDRESS>
[proxy]
ICP01_NODE_IP_ADDRESS
```

- no caso da configuração com 5 nodes, coloque os servidores dentro de cada role, exemplo:

```
[master]
master01_node_IP_address
[worker]
worker01_node_1_IP_address
worker02_node_n_IP_address
[proxy]
proxy01_node_IP_address
```
----------------

## Inicie a instalação do ICP

```
docker run -e LICENSE=accept --net=host \
-t -v "$(pwd)":/installer/cluster \
ibmcom/icp-inception:2.1.0.1 install
```
