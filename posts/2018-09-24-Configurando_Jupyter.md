---
title: Configurar Jupyter para Servidor
description: Alguns detalhes para Jupyter em trabalho em equipe
date: 2018-09-24 22:17:00 -0300
featuredImage: ./featured/jupiter-1.jpg
coverImage: /figures/jupiter-1.jpg
category: Python
tags:
  - Jupyter
  - Ambiente
---

Para usar o notebook em um servidor é necessário alterar o arquivo de configuração, que pode ser gerado pelo comando

```bash
jupyter notebook --generate-config
```

### Acesso externo

Descomentar e configurar o IP Externo que pode ser um `*` para todos os caminhos de acesso ao servidor

```python
c.NotebookApp.ip = '<IP Externo>'
```

### Referências

[Running a notebook server - Jupyter Notebook](https://jupyter-notebook.readthedocs.io/en/stable/public_server.html)
