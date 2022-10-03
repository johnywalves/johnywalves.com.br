---
date: 2018-12-11 16:22:15 -0200
title: Render Web Template com Python Flask
description: Geração de template HTML com Python Flask
category: Python
featuredImage: ./featured/gears-1.jpg
coverImage: /figures/gears-1.jpg
tags:
  - Web
  - Flask
---

Entregar páginas Web intepretando como se fossem estáticas, reduz a carga de processamento pelo cliente, executando pelo servidor onde pode estar a base de dados e outros recursos, podendo ser disponiveis somente neste ambiente

## Montagem do Modelo

Fazendo uso do [Jinja](http://jinja.pocoo.org/docs/2.10/templates/), um modelo de sintaxe e semantica, montamos um documento HTML, fazendo uso de delimitadores para expressões `{{` e `}}` e controles de fluxo `{%` e `%}`  
Inserir um valor direto no corpo do arquivo

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

ou por uso de if ternário, seguindo o padrão do **Python**

```html
<!DOCTYPE html>
<h1>Hello, {{ nome if nome else 'World'}}!</h1>
```

Através da iteração de uma lista de objetos, salvando na pasta de **template** com o nome de **lista.html**

```html
<!DOCTYPE html>
<ul id="navigation">
  {% for item in navigation %}
  <li><a href="{{ item.href }}">{{ item.caption }}</a></li>
  {% endfor %}
</ul>
```

Com o uso um modelo padrão, salvando na pasta de **template** com o nome de **base.html**

```html
<!doctype html>
  <h1>{% block titulo %}{% endblock %}</h1>

  <div class="wrapper">
    {% block corpo %}{% endblock %}
  </div
```

As definições de bloco `{% block titulo %}` e `{% block corpo %}` podem ser preenchidas por qualquer página ao estender o documento de base, vamos fazer isso no **lista.html**

```html
{% extends 'base.html' %} {% block titulo %} Página Teste {% endblock %} {%
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
/app.py /templates /hello.html /lista.html /base.html
```

## Preparação

Instalar o pelo gerenciador de pacotes, recomendo o uso de [Ambiente Virtual](/Virtual_Environment)

```bash
pip install flask
```

Iniciando o arquivo **app.py** com a declaração do flask

```python
from flask import Flask
app = Flask(__name__)
```

## Interpretação

Adicionando no arquivo **app.py** a opção de rotas para ouvir o caminho **/hello/** com e sem parametros

```python
from flask import render_template

@app.route('/hello/')
@app.route('/hello/<param>')
def hello(param=None):
    return render_template('hello.html', nome=param)
```

Também adicionando no arquivo **app.py** a **/lista/** passando a listagem em navigation como fixa para ilustração

```python
from flask import render_template

@app.route('/lista/')
def lista():
    list = [
        {"href":"#1", "caption":"primeiro"},
        {"href":"#2", "caption":"segundo"}
    ]
    return render_template('lista.html', navigation=list)
```

## Arquivos Estáticos

Folhas de estilo não costumam sofre variação na execução do sistema, não sendo necessária a intepreção da mesma
Para entregar devemos adicionar na pasta **static** na raiz do projeto

```html
/app.py /templates /static /style.css
```

E adiciona o trecho na página HTML

```html
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}" />
```

ou direto no intepretador, e informando o caminho _/static/style.css_, mas desta maneira é necessário definir um contexto como no exemplo abaixo

```python
from flask import url_for
app.config['SERVER_NAME'] = "127.0.0.1:5000"

with app.app_context():
  url_for('static', filename='style.css')
```

## Favicon

Para adicionar o _favicon.ico_ na página basta colocar o arquivo na pasta **static** e adicionar o trecho no texto do HTML

```html
<link
  rel="shortcut icon"
  href="{{ url_for('static', filename='favicon.ico') }}"
/>
```

## Execução

Se o pacote do flask estiver instalado e arquivo nomeado como **app.py**, basta executar o comando abaixo ou rodar `python <nome do arquivo>` para outro nome de arquivo

```bash
flask run
```

Uma mensagem no shell apresenta que o site está disponível no [localhost:5000](localhost:5000), acesse os endereços para visualizar os resultados

- [localhost:5000/hello](localhost:5000/hello)
- [localhost:5000/hello/Teste](localhost:5000/hello/Teste)
- [localhost:5000/lista](localhost:5000/lista)

### Referências

[Flask - Quickstart](http://flask.pocoo.org/docs/1.0/quickstart/)

[Flask - Templates](http://flask.pocoo.org/docs/1.0/tutorial/templates/)

[Flask - Static Files](http://flask.pocoo.org/docs/1.0/tutorial/static/)

[Jinja - Template Designer Documentation](http://jinja.pocoo.org/docs/2.10/templates/)
