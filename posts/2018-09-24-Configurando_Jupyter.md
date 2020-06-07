---
date: 2018-09-24 22:17:00 -0300
title: Configurar Jupyter para Servidor
description: Lorem lipsunm
category: Python
tags: [Python, Jupyter]
featuredImage: ./featured/jupiter-1.jpg
coverImage: /figures/jupiter-1.jpg
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
