---
date: 2019-03-03 10:13:13 -0300
title: Http Server para arquivos estáticos (Python e JavaScript)
description: Compartilhar arquivos ou testar um site rápido
category: Web
tags: [Web, Python, JavaScript]
featuredImage: ../static/assets/img/gift-1.jpg
highlight: true
---

Disponilizar arquivos estáticos para projetos em desenvolvimento, não usar em produção, ou somente para disponilizar arquivos de forma simples, quando o index.html não estiver disponível

## JavaScript

Fazendo uso do Node, NPM e data biblioteca [Serve](https://www.npmjs.com/package/serve), instalando de forma simples com a diretiva `-g` para disponilizar para todo o sistema

```shell
npm i serve -g
```

Com o shell localizado na pasta

```shell
serve
```

Ou em uma pasta pai, para disponilizar uma pasta filha com:

```shell
serve -s <nome da pasta>
```

Disponilizando o acesso em [127.0.0.1:5050](127.0.0.1:5050)

## Python

Usando a biblioteca HTTP que faz parte do core do Python, com o ambiente configurado e com o shell localizado na pasta

```shell
python -m http.server
```

Disponilizando o acesso em [127.0.0.1:8000](127.0.0.1:8000)
