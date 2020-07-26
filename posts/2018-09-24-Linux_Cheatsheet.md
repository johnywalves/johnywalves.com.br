---
date: 2018-09-24 22:17:00 -0300
title: Linux - My Cheatsheet
description: Comandos Básicos Linux para Consulta
category: Linux
tags: [Linux, Bash, Shell]
topics: [Arquivos e Diretórios, Redes, Usuário e Acessos, CRON, Processos, Serviços]
featuredImage: ./featured/pinguim-1.jpg
coverImage: /figures/pinguim-1.jpg
---

## Arquivos e Diretórios

Listar conteúdo da pasta

```bash
ls
```

Mover ou renomear arquivo

```bash
mv <caminho de origem> <caminho de destino>
```

Excluir arquivo

```bash
rm <nome do arquivo>
```

Excluir diretório com conteúdo

```bash
rm -rf <nome do diretório>
```

Ler conteúdo de um arquivo

```bash
cat <nome do arquivo>
```

## Redes

Visualizar IP da máquina

```bash
ip addr show
```

Visualizar nome do sistema na rede

```bash
hostname
```

Visualizar IP próprio, normalmente **127.0.0.1**

```bash
hostname -i
```

Visualizar IP externo para a rede

```bash
hostname -i
```

## Compreeender Ambiente

Visualizar pasta atual

```bash
echo $PWD
```

Visualizar pasta de instalação de um comando

```bash
which <nome no comando>
```

Listar todos os programas instalados

```bash
dpkg -l
```

## CRON

Ver conteúdo do CRON

```bash
crontab -l
```

Editar conteúdo do CRON

```bash
crontab -e
```

Executar as atividades do @reload

```bash
service cron reload
```

## Usuário e Acessos

Listar todos os usuários

```bash
getent passwd | cut -d \: -f1
```

Alterar dono (owner) do arquivo

```bash
chown -R <usuário> <nome do diretório / nome do arquivo / * para todos os arquivos>
```

Conceder acesso para um usuário

```bash
chmod <código do acesso> <usuário> <nome do diretório / nome do arquivo / * para todos os arquivos>
```

Conceder acesso para um usuário recursivamente

```bash
chmod -R <código do acesso> <usuário> <nome do diretório / nome do arquivo / * para todos os arquivos>
```

Verificar dono e acesso de arquivos e diretório

```bash
namei -l <nome do arquivo pu diretório>
```

## Processos

Listar processos executando

```bash
ps -ef
```

## Serviços

Visualizar todos os serviços

```bash
systemctl
```

Visualizar todos os serviços executando

```bash
systemctl list-unit-files | grep enable
```

Verificar o status de um serviço

```bash
systemctl status <application.service>
```

Reiniciar um serviço

```bash
systemctl restart <application.service>
```
