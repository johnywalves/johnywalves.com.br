---
title: Web API Python com Flask, Restful e Token
description: Um pequeno servidor em Python, com uma camada simples de segurança
date: 2018-09-10 20:33:15 -0300
category: Python
featuredImage: ./featured/flask-1.jpg
coverImage: /figures/flask-1.jpg
tags:
  - Flask
  - Web
  - API
---

A vantagem de utilizar uma Web API para garantir o acesso e manipulação de dados de uma aplicação possibilita controlar a disponibilidade, segurança e formato dos dados  
Fazendo uso de alguns pacotes Python para controlar as Requisições/Respostas, JSON, REST, JWT e Criptografia Hash podemos entregar de maneira fácil e rápida essa API

## Ambiente

Usando um ambiente virtual para facilitar o controle de dependências do projeto, detalhamento disponível em [Virtual Environment](../Virtual_Environment)

```bash
pip install pipenv
```

Iniciar o ambiente virtual, onde o desenvolvimento será isolado, para gerenciar as dependências  
Dentro da pasta do projeto onde os fontes serão criados

```bash
pipenv shell
```

Dentro do _pipenv_, os comandos ignoram os pacotes no ambiente externo, sendo necessário instalar os que serão utilizados

```bash
pipenv install flask flask-restful flask-jwt-extended passlib
```

## Flask

O pacote do **Flask** possibilita escutar uma porta para garantir uma aplicação _Web_  
Criar um arquivo **app.py** com o conteúdo abaixo, esse nome é um dos padrões do Flask, aconselhavél seu uso

```python
import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def start():
    return 'Uma resposta flask'

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
```

Como pode ser visto ele está importando a biblioteca **Flask**, escutando a porta 5000 e retornando o texto 'Uma resposta flask'  
Assim podemos executar o aplicativo com o comando

```bash
flask run
```

Acessando pelo navegador o endereço [http://localhost:5000/](http://localhost:5000/) vai aparecer a mensagem "Uma resposta flask" mostrando que o ambiente está completamente funcional

## REST

De forma simplicitada uma REST faz referência a um CRUD através de requisições HTTP, onde o servidor e cliente possui uma comunicação completa sem a necessidade de armazenar informações

- **POST:** Inserir uma ou várias instâncias
- **GET:** Consultar instâncias
- **PUT:** Atualizar as informações de uma ou várias instâncias
- **DELETE:** Deletar uma instância

Aplicando a leitura das requisições dos HTTP

```python
from flask_restful import Resource, Api

api = Api(app)

class response(Resource):
    def post(self):
        return {'post':'Resposta de POST'}

    def get(self):
        return {'get':'Resposta de GET'}

    def put(self):
        return {'put':'Resposta de PUT'}

    def delete(self):
        return {'delete':'Resposta de DELETE'}

api.add_resource(response, '/response')
```

Atualizar a execução do sistema podemos verificar a resposta do processo novo

## Testando

Para testar a execução podemos utiliza o [PostMan](https://www.getpostman.com/) ou pelo pacote **request** do Python, que pode ser instalada pelo PyPi com o comando

```bash
pip install requests
```

Através do shell do Python, comando _python_ no shell, carregamos os objetos para cada tipo de requisição

```python
from requests import put, get, post, delete
```

No trecho abaixo realizamos as requisições informando a URL completa, com a função _.json()_ forçando uma resposta em json

```python
post('http://localhost:5000/response').json()
# {'post':'Resposta de POST'}

put('http://localhost:5000/response').json()
# {'post':'Resposta de PUT'}

get('http://localhost:5000/response').json()
# {'get':'Resposta de GET'}

delete('http://localhost:5000/response').json()
# {'delete':'Resposta de DELETE'}
```

## JSON

Uma notação de objetos projetada para o JavaScript, por sua facilitada foi a adotada largamente para armazenamento e trafego de documentos estruturados e sem esquemas, por exemplo um trecho de uma receita de bolo

```javascript
{
    'name':'cake',
    'categories':[
        {'name':'sweet'},
        {'name':'wheat'}
    ],
    'steps':[
        {'ingredient':'sugar'},
        {'ingredient':'flour'}
    ]
}
```

Usando o Flask podemos ler os dados contidos no corpo do JSON e imprimir no servidor

```python
from flask import request

class readJSON(Resource):
    def post(self):
        data = request.json

        print('Name: ' + data['name'])
        print('First Category: ' + data['categories'][0]['name'])

        print('Steps')
        for step in data['steps']:
            print('Ingredient: ' + step['ingredient'])

api.add_resource(readJSON, '/readjson')
```

Realizando um teste pela biblioteca _request_, fazendo um post informando o conteúdo através do parametro _json_ e visualizando a impressão na parte do servidor

```python
post('http://localhost:5000/readjson', json={'name':'cake', 'categories':[{'name':'sweet'}, {'name':'wheat'}], 'steps':[{'ingredient':'sugar'}, {'ingredient':'flour'}]}).json()
# Print do lado da aplicação
# Name: cake
# First Category: sweet
# Steps
# Ingredient: sugar
# Ingredient: flour
```

## Token

Na definição de **token** temos símbolo, marca ou sinal, uma maneira de garantir um acesso a algo ao mostrar  
Podemos limitar o acesso de algumas áreas da API exigindo a apresentação de um token, esse podendo ser concedido somente em certos aspectos por exemplo com o uso de um usuário e senha  
No trecho abaixo importamos o pacote **flask_jwt_extended** do **jwt_extended** e com `@jwt_required` limitamos o acesso ao método POST

```python
from flask_jwt_extended import jwt_required

class response(Resource):
    @jwt_required
    def post(self):
        return {'post':'Resposta de POST'}
```

Como resultado ao realizar a requisição POST sem o token, o sistema bloqueia com o erro interno _Missing Authorization Header_ e retornando para o cliente _Internal Server Error_

```python
post('http://localhost:5000/v1.0/posts').json()
# {'message': 'Internal Server Error'}
```

Para disponibilizar o token usamos a chave secreta `<Chave Secreta JWT>`, cada sistema deve ter a sua própria  
Podemos saber quem realizou a requisição usando o comando `get_jwt_identity()` para ler a identidade do usuário, mas antes precisamos gerar o token com essa identidade pelo `create_access_token`

```python
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token

app.config['JWT_SECRET_KEY'] = '<Chave Secreta JWT>'
jwt = JWTManager(app)

class token(Resource):
    def post(self):
        data = request.json

        if (('admin' == data['user']) & ('123' == data['pass'])):
            current_user = get_jwt_identity()
            access_token = create_access_token(identity = current_user)
            return {'token': access_token}
        else:
            return {}
```

Com o trecho implantado, conseguimos acesso ao token com com um GET, informando o "user" e "pass" como "admin" e "123" respectivamente

```python
post('http://localhost:5000/token', json={'user':'admin', 'pass':'123'}).json()
# {'token': '<token gerado>'}
```

A API retorna o token, uma sequência de caracteres que deve ser usada no header como uma autenticação Bearer, fazendo uso do pacote request novamente temos acesso ao POST da API

```python
headers = {"Authorization":"Bearer <token gerado>"}
post('http://localhost:5000/v1.0/posts', headers=headers).json()
# {'post':'Resposta de POST'}
```

## Criptografia Hash

No trecho anterior usamos como exemplo o usuário "admin" e senha "123", mas uma boa prática é evitar o uso de Text Plain para senhas uma ótima maneira é descaracterizar o conteúdo, com uma função hash

```python
from passlib.hash import pbkdf2_sha256 as sha256
sha256.hash('123')
# <Sequência de caracteres Hash>
```

Alterando a validação de usuário e senha, substituindo o retorno do da função anterior em "<Sequência de caracteres Hash>"

```python
if (('admin' == data['user']) & sha256.verify(data['pass'], '<Sequência de caracteres Hash>')):
```

Claro que este trecho funciona melhor com uma base de dados consultando o nome do usuário e a senha hash armazenada

## Compilando

Para facilitar o código completo gerado nas etapas anteriores que devem conter no _app.py_ para rodar com o \'flask run\'  
Não esquencendo de alterar a `<Chave Secreta JWT>` para sua chave particular

```python
import os
from flask import Flask, request
from flask_restful import Resource, Api
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity, create_access_token
from passlib.hash import pbkdf2_sha256 as sha256

app = Flask(__name__)
api = Api(app)

app.config['JWT_SECRET_KEY'] = '<Chave Secreta JWT>'
jwt = JWTManager(app)

@app.route('/')
def start():
    return 'Uma resposta do flask'

class response(Resource):
    @jwt_required
    def post(self):
        return {'post':'Resposta de POST'}

    @jwt_required
    def put(self):
        return {'put':'Resposta de PUT'}

    @jwt_required
    def get(self):
        return {'get':'Resposta de GET'}

    @jwt_required
    def delete(self):
        return {'delete':'Resposta de DELETE'}

class readJSON(Resource):
    def post(self):
        data = request.json

        print('Name: ' + data['name'])
        print('First Category: ' + data['categories'][0]['name'])

        print('steps')
        for step in data['steps']:
            print(step['ingredient'])

class token(Resource):
    def post(self):
        data = request.json

        if (('admin' == data['user']) & sha256.verify(data['pass'], '<Sequência de caracteres Hash>')):
            current_user = get_jwt_identity()
            access_token = create_access_token(identity = current_user)
            return {'token': access_token}
        else:
            return {}

api.add_resource(token, '/token')
api.add_resource(readJSON, '/readjson')
api.add_resource(response, '/response')

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
```

### Referências

[Flask - Quickstart](http://flask.pocoo.org/docs/1.0/quickstart/)

[Flask - Configuration Handling](http://flask.pocoo.org/docs/1.0/config/)

[Flask-RESTful - Quickstart](https://flask-restful.readthedocs.io/en/latest/quickstart.html)

[JWT authorization in Flask](https://codeburst.io/jwt-authorization-in-flask-c63c1acf4eeb)
