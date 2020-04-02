---
date: 2018-09-24 22:17:00 -0300
title: Comandos Básicos Linux para Consulta
description: Lorem lipsunm
category: Linux
tags: [Linux, Bash, Shell]
topics: [Arquivos e Diretórios, Redes, Usuário e Acessos, CRON, Processos, Serviços]
coverImage: /assets/img/pinguim-1.jpg
---

Recentemente me deparei com a necessidade de aprender a lidar com o linux, sem uma interface gráfica, amei  
Dentro do uso com o shell do Linux para mim foi a dificuldade de memorizar os comandos, então criei um guia pequeno para consultar constantemente

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

Excluir diretório

```bash
rm -r <nome do diretório>
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
# Todos os serviços
systemctl
# Todos os serviços executando
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
