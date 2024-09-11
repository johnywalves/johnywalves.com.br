---
title: Preparando Ambiente Python e Pacotes
description: Configuração de ambiente para desenvolvimento em Python
date: 2018-08-25 15:00:00 -0300
featuredImage: ./featured/python-2.jpg
coverImage: /figures/python-2.jpg
category: Python
tags:
  - Ambiente
  - Dependências
published: true
cheatsheet: false
---

Python é uma linguagem de programação simples e elegante, vem junto com muito amor e facilidade de desenvolvimento, tem até um poema para ensinar o jeito Python de programar

## Instalação do Python

Para iniciar o ambiente precisamos do compilador e Pip

### Ambiente Windows

Realizar o donwload em [Python Downloads](https://www.python.org/downloads/) e seguir o passo a passo do instalador, que automaticamente realiza o cadastro dos caminhos nas variáveis de ambiente do Windows  
Configurar nas variáveis de sistema `PATH` o caminho raiz e a pasta da instalação

### Ambiente Linux

Distribuições Linux possuem uma ou duas versões do Python já embarcadas, que podem ser acessadas com os comandos `python2`, `python3` ou somente `python`, mas o gerenciador de pacotes precisa ser instalado caso não esteja disponível

```bash
apt-get install python-pip # Python 2
apt-get install python3-pip # Python 3
```

### Verificar

Após isso a interface de comando (shell do sistema) deve apresentar a versão instalada do Python com o comando, reforçando que o "V" são maiúsculos

```bash
python -V
# ou
python --version
```

O gerenciador de pacotes **pip** acessa o repositório [PyPi](https://pypi.org/), para verificar a versão use

```bash
pip -V
# ou
pip --version
```

```bash
pip install --upgrade pip setuptools wheel
```

## Gestão de Dependências

Após o ambiente instalado podemos gerenciar as dependências de maneira bem simples com o **pip**, como por exemplo instalando um pacote pelo nome do pacote

```bash
pip install <nome_do_pacote>
```

Ou desinstalar

```bash
pip uninstall <nome_do_pacote>
```

Para atualizar as dependências no ambiente do Python, devemos usar instalador com a diretiva --update indicando o download da versão mais nova  
Sendo assim podemos as bibliotecas de gestão de pacotes, os **pip**, download do repositório, e o **setuptools**, instalador de bibliotecas, desta maneira

```bash
pip install --upgrade setuptools pip
```

Para tornar a portabilidade e replicação de ambientes mais simples, é possível exportar a lista de pacotes instalados juntamente com suas versões correspondentes

```bash
pip freeze > requirements.txt
```

E, posteriormente, você pode instalar a lista completa com um único comando:

```bash
pip install -r requirements.txt
```

## Poema

Para visualizar o poema basta usar comando no shell do Python acessado por pelo comando `python`

```python
import this
```

Em uma tradução:

> O Zen do Python, por Tim Peters
>
> Bonito é melhor que feio.  
> Explícito é melhor que implícito.  
> Simples é melhor que complexo.  
> Complexo é melhor que complicado.  
> Linear é melhor do que aninhado.  
> Esparso é melhor que denso.  
> Legibilidade conta.  
> Casos especiais não são especiais o bastante para quebrar as regras.  
> Ainda que praticidade vença a pureza.  
> Erros nunca devem passar silenciosamente.  
> A menos que sejam explicitamente silenciados.  
> Diante da ambiguidade, recuse a tentação de adivinhar.  
> Deveria haver um — e preferencialmente só um — modo óbvio para fazer algo.  
> Embora esse modo possa não ser óbvio a princípio a menos que você seja holandês.  
> Agora é melhor que nunca.  
> Embora nunca frequentemente seja melhor que já.  
> Se a implementação é difícil de explicar, é uma má ideia.  
> Se a implementação é fácil de explicar, pode ser uma boa ideia.  
> Namespaces são uma grande ideia — vamos ter mais dessas!

Eu disse que tem muito amor no Python
