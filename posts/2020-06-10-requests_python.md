---
title: Requests Python
description: Realização de Requisições HTTP com pyhton
date: 2020-06-10 20:30:23 -0300
featuredImage: ./featured/mailbox-1.jpg
coverImage: /figures/mailbox-1.jpg
category: Python
tags:
  - Requests
  - HTTP
published: true
cheatsheet: false
---

Podemos realizações de requisições HTTP para automatiza processos de testes

## Instalação

Instalar o pacote **requests** fazendo uso do pelo PyPi com o comando

```bash
pip install requests
```

## Realizar requisições

Podemos importar os métodos do HTTP

```python
from requests import put, get, post, delete
```

Fazendo o uso dos verbos

```python
r = get("https://www.google.com/")
```

Podemos ler o conteúdo em texto

```python
r.text
```

Ou realizar conversão para JSON, quando possível

```python
r.json()
```

## Referências

[Requests: HTTP for Humans](https://requests.readthedocs.io/en/master/)
