---
date: 2020-08-15 14:18:35 -0300
title: Docker - My Cheatsheet
description: Comandos Básicos Docker para Consulta
category: Docker
featuredImage: ./featured/docker-1.jpg
coverImage: /figures/docker-1.jpg
tags:
  - Docker
  - Container
  - Cheatsheet
---

## Docker

Evitar container ficar reiniciando mesmo quando parado

```bash
docker update --restart=no <container name ou id>
```

Matar container

```bash
docker kill <container name ou id>
```

## Docker Compose

Puxar as imagens da internet

```bash
docker-compose pull
```

Subir os serviços

```bash
docker up -d
```
