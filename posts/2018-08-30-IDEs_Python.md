---
title: IDEs Python (Jupyter e Spyder)
description: Instalação do Jupyter e Spyder para desenvolvimento com Python
date: 2018-08-30 13:32:48 -0300
featuredImage: ./featured/jupiter-1.jpg
coverImage: /figures/jupiter-1.jpg
category: Python
tags:
  - Ambiente
  - Jupyter
  - Spyder
---

Ambientes de Desenvolvimentos ou IDE (Integrated Development Environment) são ferramentas para auxliar o desenvolvimento com validações de sintaxe, autopreencimento de comandos, automação para executar e publicar o projeto devenvolvido  
Lembrando que a definição de um verdadeiro programador é o tema de sua IDE, sempre dark para evitar cansaços aos olhos  
Uma ótima pedida é [Microsoft Visual Code](https://code.visualstudio.com/) que possui terminal integrado e vários plugins, mas um ambiente dedicado é sempre uma boa opção como o **Jupyter** e o **Spyder**, ambos com o [IPython](https://ipython.org/) integrada

### Jupyter Notebook

Uma interface notebook executando direto no navegador, facilmente instalada pelo `pip` do **PyPI**

```bash
pip install jupyter
```

Para executar o jupyter e já abrir o navegador, o comando deve ser executado na pasta de trabalho

```bash
jupyter notebook
```

### Spyder

Outra boa opção é o Spyder, com uma interface simples e dedicada para facilitação da execução pelo IPython

```bash
pip install spyder
```

Para abrir o spyder basta executar o comando

```bash
spyder3
```

Para alterar o tema `Ferramentas > Preferências > Sintaxe colorida` selecionar em `Esquema` o que mais lhe agradar, recomendo o **Zenbrun**

### Scripts

Para executar os comandos `jupyter notebook` e `spyder 3` direito pelo shell a pasta de **Scripts** do Python deve estar mapeada no sistema, caso lembre da pasta de instalação, ela pode ser consulta pelo código no shell do Python

```python
import os
import sys
os.path.dirname(sys.executable)
```
