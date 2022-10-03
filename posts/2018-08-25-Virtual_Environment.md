---
date: 2018-08-25 15:00:00 -0300
title: PipEnv e Virtual Enviroment
description: Criação de ambiente virtual para isolar dependências em Python
featuredImage: ./featured/library-1.jpg
coverImage: /figures/library-1.jpg
category: Python
tags:
  - Ambiente
  - Dependências
---

Para facilitar o controle de dependências de uma projeto Python podemos isolar um ambiente para executar com um versão controlada do Python e dos seus pacotes  
Com um [Ambiente Python](../Ambiente_Python) preparado podemos instalar o pacote do pipenv, nosso gestor de ambientes virtuais, com ele podemos:

- Controlar os pacotes
- Isolar para execução
- Saber as dependências do projeto
- Faciliitar a duplicação do ambiente para produção e desenvolvimento

Instalando pelo **pip** do repositório do [PyPi](https://pypi.org/)

```bash
pip install pipenv
```

## Gerenciar Ambiente Virtual

Para criar um ambiente virtual, usando a versão instalada e configurada como padrão do Python

```bash
pipenv install
```

Ou podemos definir uma versão com a diretiva `--python`

```bash
pipenv --python 3.6
```

Após a instalação podemos entrar no ambiente virtual

```bash
pipenv shell
```

Assim podemos instalar um pacote de maneira muito semelhante ao **pip**

```bash
pipenv install <nome do pacote>
```

Com o comando anterior o sistema cria no arquvio **Pipfile** na pasta atual, o arquivo contém todas as configurações do ambiente como versão do Pyhton e pacotes instalados nele  
Podemos "congelar" as versões dos pacotes

```bash
pipenv lock
```

Gerando o arquivo **Pipfile.lock** com as versões dos pacotes  
Para instalar um ambiente apartir de um já configurado basta executar novamente o comando em uma pasta com os **Pipfile** e o **Pipfile.lock**  
No exemplo a seguir vamos usar o pacote flask, que mesmo instalado no ambiente da máquina, precisa estar no _Virtual_, ou somente no virtual

```bash
pipenv install flask
```

## Programa

Com biblioteca do _Flask_ instalada, basta criar um arquivo **app.py** desta maneira

```python
import os
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Aeeee!!! Funciona'

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
```

## Execução

Para executar a aplicação em ambiente virtual, podemos executar a chamada `flask run` pelo shell

```bash
pipenv shell
```

Ou executar direto para execução da aplicação

```bash
pipenv run python app.py
```

## Referências

[Flask - Quickstart](http://flask.pocoo.org/docs/1.0/quickstart/)

[How to manage your Python projects with Pipenv](https://robots.thoughtbot.com/how-to-manage-your-python-projects-with-pipenv)
