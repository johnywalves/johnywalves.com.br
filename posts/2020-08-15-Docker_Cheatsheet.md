---
date: 2020-08-15 14:18:35 -0300
title: Docker - Cheatsheet
description: Comandos Básicos Docker para Consulta
category: Docker
featuredImage: ./featured/docker-1.jpg
coverImage: /figures/docker-1.jpg
tags:
  - Docker
  - Container
  - Cheatsheet
cheatsheet: true  
---

## Docker

Construir um Dockerfile que está na pasta

```bash
docker build .
```

Executar comando dentro do container, no caso o `ls` ou o `bash` para ter acesso direto

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

Puxar as imagens da internet

```bash
docker-compose pull
```

Subir os serviços

```bash
docker-compose up -d
```

Descer/Desligar os serviços

```bash
docker-compose down
```
