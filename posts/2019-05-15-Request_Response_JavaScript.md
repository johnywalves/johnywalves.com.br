---
date: 2019-05-15 10:13:13 -0300
title: Comunicação HTTP Servidor e Client
description: Iniciando com Node Express
featuredImage: ./featured/mail-1.jpg
coverImage: /figures/mail-1.jpg
category: JavaScript
tags:
  - Web
  - Server
  - Client
  - Request
  - Response
  - Tutorial
published: true
cheatsheet: false
---

Usar a mesma linguagem na ponta-a-ponta em um ambiente favorece a troca de conhecimento entre equipes e atualmente JavaScript é uma ótima opção, pois tem suporte nativo nos navegadores e facilidade desenvolvimento com o Node

## Servidor (Resposta)

Usando o Express vamos começar importando as bibliotecas para o servidor com o **npm**

- Express: Controle de fluxo das requisições e respostas
- Body-Parser: intepretar conteúdo das requisições
- Cors: adicionar no protocolo Http os elementos necessários para comunicação [CORS](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing)

```shell
npm i express body-parser cors
```

Gerando o arquivo com **server.js** com o conteúdo abaixo, com os detalhes no comentário

```javascript
// Importação de bibliotecas
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

// Ferramenta para controlar a requisição e resposta
const app = express()
// Possibilidade fazer requisições pelo navegador
app.use(cors())
// leitura e escrita para arquivos JSON
app.use(bodyParser.json())

// Criação do endpoint /mirror que retorna o json da requisição
app.post("/mirror", function (req, res) {
  res.json(req.body)
})

// Definição de porta que será ouvida, ex: 8080
const port = 8080

// Iniciar o servidor e ouvir a porta
app.listen(port, function () {
  console.log("Escutando a porta " + port + "!")
})
```

Para executar simplemente podemos usar o `node` informando o arquivo desejado

```shell
node server.js
```

## Client fetch (Requisição por fetch)

Usando a biblioteca do **fetch** nativa do JavaScript

### Configuração de Requisição

Primeiro precisamos criar a configuração que será usada

```javascript
const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 42,
    text: "Vida, Universo e Tudo mais",
  }),
}
```

### Requisição pelo navegador

O operador `await` é utilizado para esperar por uma Promise. Ele deve ser usado apenas dentro de uma função assíncrona com `async function`

```javascript
const response = await fetch("http://localhost:8080/mirror", config)
const content = await response.json()
console.log(content)
```

Ou com o usado no `then` e `catch`

```javascript
fetch("http://localhost:8080/mirror", config)
  .then(function (response) {
    return response.json()
  })
  .then(function (content) {
    console.log(content)
  })
```

### Requisição pelo Node

Instalar a biblioteca de fetch para o Node

```shell
npm i node-fetch
```

Gerando o arquivo com **client.js**, com a importação da biblioteca para uso

```javascript
// Importação da biblioteca de fetch
const fetch = require("node-fetch")

// Execução do comando
fetch("http://localhost:8080/mirror", config)
  .then((res) => res.json())
  .then((json) => console.log(json))
```

Executar pelo Node com o comando

```shell
node client.js
```
