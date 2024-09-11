---
date: 2020-08-15 14:18:35 -0300
title: Docker - Cheatsheet
description: Comandos Básicos Docker para Consulta
featuredImage: ./featured/docker-1.jpg
coverImage: /figures/docker-1.jpg
category: Docker
tags:
  - Docker
  - Container
  - Cheatsheet
published: true
cheatsheet: true
---

Docker é uma ferramenta ótima para garantir um ambiente uniforme para pendências de plataformas para desenvolvimento, ainda sem a necessidade de ter vários softwares instalados. No Docker Composer podemos reger vários containers sempre com as mesmas definições

## Docker

Listar os containers em funcionamento

```bash
docker ps
```

Construir um container pelo arquivo `Dockerfile` que está na pasta

```bash
docker build .
```

Executar comando dentro do container, no caso o `ls` para listagem de arquivos ou o `bash` para ter acesso direto ao terminal do container

```bash
docker exec -it <container_id_ou_nome> ls
```

Evitar container ficar reiniciando mesmo quando parado

```bash
docker update --restart=no <container_id_ou_nome>
```

Matar container

```bash
docker kill <container_id_ou_nome>
```

Conhecer IP local para os containers

```bash
ip addr show docker0
```

## Docker Compose

Puxar as imagens da internet, do arquivo padrão `docker-compose.yml`

```bash
docker-compose pull
```

Subir/Ligar os containers, rodando os containers em background

```bash
docker-compose up -d
```

Descer/Desligar os containers

```bash
docker-compose stop
```

Remover os containers

```bash
docker-compose down
```

Subir/Ligar os containers, do arquivo `name-file.yml` encontrado no diretório onde o comando é executado

```bash
docker-compose -f name-file.yml up -d
```
