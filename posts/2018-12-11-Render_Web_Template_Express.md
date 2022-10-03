---
date: 2018-12-11 16:22:15 -0200
title: Render Web Template com Node.js Express
description: Geração de template HTML com Node.js Express
category: JavaScript
featuredImage: ./featured/gears-1.jpg
coverImage: /figures/gears-1.jpg
tags:
  - Web
  - Node
  - Express
---

Entregar páginas Web intepretando como se fossem estáticas, reduz a carga de processamento pelo cliente, executando pelo servidor onde pode estar a base de dados e outros recursos, podendo ser disponiveis somente neste ambiente

## Montagem do Modelo

Fazendo uso do [Jinja](http://jinja.pocoo.org/docs/2.10/templates/), um modelo de sintaxe e semantica, montamos um documento HTML, fazendo uso de delimitadores para expressões `{{` e `}}` e controles de fluxo `{%` e `%}`  
Assim inserimos um valor direto no corpo do arquivo, usando a extensão **twig** e salvando na pasta **view** para interpretação

```html
<!DOCTYPE html>
<h1>Hello {{ nome }}</h1>
```

Com o uso de **if** mudamos o fluxo de treços de código

```html
<!DOCTYPE html>
{% if nome %}
<h1>Hello {{ nome }}!</h1>
{% else %}
<h1>Hello, World!</h1>
{% endif %}
```

ou por uso de if ternário, seguindo o padrão do **JavaScript**

```html
<!DOCTYPE html>
<h1>Hello, {{ (nome ? nome : 'World') }}!</h1>
```

Através da iteração de uma lista de objetos construimos uma sequência de tags com vários links, salvando na pasta de **view** com o nome de **lista.twig**

```html
<!DOCTYPE html>
<ul id="navigation">
  {% for item in navigation %}
  <li><a href="{{ item.href }}">{{ item.caption }}</a></li>
  {% endfor %}
</ul>
```

Com o uso um modelo padrão, salvando na pasta de **view** com o nome de **base.twig**

```html
<!DOCTYPE html>
<h1>{% block titulo %}{% endblock %}</h1>

<div class="wrapper">{% block corpo %}{% endblock %}</div>
```

As definições de bloco **{% block titulo %}** e **{% block corpo %}** podem ser preenchidas por qualquer página ao estender o documento de base, vamos fazer isso no **lista.twig**

```html
{% extends 'base.twig' %} {% block titulo %} Página Teste {% endblock %} {%
block corpo %}
<ul id="navigation">
  {% for item in navigation %}
  <li><a href="{{ item.href }}">{{ item.caption }}</a></li>
  {% endfor %}
</ul>
{% endblock %}
```

A estrutura de arquivos deve ficar assim:

```html
/view /hello.twig /lista.twig /base.twig
```

## Preparação

Instalar o pelo gerenciador os pacotes **express**, **twig**, **path** e **serve-favicon**

```bash
npm i express twig path serve-favicon
```

Iniciando o arquivo **server.js** com a declaração do Express e do Twig

```javascript
var Twig = require("twig"),
  express = require("express"),
  app = express()
```

## Interpretação

Adicionando no arquivo **server.js** a opção de rotas para ouvir o caminho **/hello/** com e sem parametros

```javascript
app.get("/hello/:param", function (req, res) {
  res.render("hello.twig", { name: req.params.param })
})
```

Também adicionando no arquivo **server.js** a **/lista/** passando a listagem em navigation como fixa para ilustração

```javascript
app.get("/lista/", function (req, res) {
  list = [
    { href: "#1", caption: "primeiro" },
    { href: "#2", caption: "segundo" },
  ]
  res.render("lista.twig", { navigation: list })
})
```

## Arquivos Estáticos

Folhas de estilo não costumam sofre variação na execução do sistema, não sendo necessária a intepreção da mesma
Para entregar devemos adicionar na pasta **static** na raiz do projeto, esse nome pode ser mudado

```html
/server.js /view /static /style.css
```

Disponibilizando todos os arquivos disponibilizados na pasta

```javascript
var path = require("path")
app.use(express.static(path.join(__dirname, "./static")))
```

E adiciona a referência sem a pasta _/static_

```html
<link rel="stylesheet" href="/style.css" />
```

## Favicon

Para adicionar o _favicon.ico_ na página basta colocar o arquivo na pasta **static** e adicionar o trecho no **server.js**

```javascript
var favicon = require("serve-favicon")
app.use(favicon(path.join(__dirname, "static", "favicon.ico")))
```

## Execução

Com os pacotes instalados e arquivo nomeado como **server.js**

```bash
node server.js
```

Uma mensagem no shell apresenta que o site está disponível no [localhost:3000](localhost:3000), acesse os endereços para visualizar os resultados

- [localhost:3000/hello](localhost:3000/hello)
- [localhost:3000/hello/Teste](localhost:3000/hello/Teste)
- [localhost:3000/lista](localhost:3000/lista)

### Referências

[Express - API 4.x](http://expressjs.com/pt-br/api.html)

[NPM - Twig](https://www.npmjs.com/package/twig)
