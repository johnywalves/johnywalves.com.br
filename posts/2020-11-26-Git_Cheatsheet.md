---
date: 2020-11-26 14:18:35 -0300
title: Git - My Cheatsheet
description: Comandos Git para Consulta
category: Git
featuredImage: ./featured/git-1.jpg
coverImage: /figures/git-1.jpg
tags:
  - Git
  - Cheatsheet
---

Conferir se está instalado e a versão com `git --version` e usar `q` para sair das rotinas como a listagem de alteração 

## Básicos

Iniciar novo repositório: executar na pasta do projeto para gerar a estrutura

```bash
git init
```

Clonar repositório remoto

```bash
git clone <URL do repositório remoto>
```

Listar branchs

```bash
git branch
```

Mudar para uma branch local

```bash
git checkout <nome da branch>
```

Criar branch e mudar para ela apartir da atual

```bash
git checkout <nome da branch> -b
```

Adicionar arquivos para futuro commit

```bash
git add <nome do arquivo ou "." para todos>
```

Commitar: concluir as alterações e regristrar na base de dados do git

```bash
git commit -m "<desrição do commit>"
```

Atualizar (Pull) branch atual com o remoto linkado, senão houver um remoto linkado ou quiser outro adicionar o apelido do remoto

```bash
git pull
```

Enviar (Push) branch atual para remoto linkado, senão houver um remoto linkado ou quiser outro adicionar o apelido do remoto

```bash
git push
```

Listar repositórios remotos disponíveis

```bash
git remote -v
```

Adicionar repositório remoto

```bash
git remote add <apelido do repositório> <URL do repositório>
```

Remover remoto

```bash
git remote rm <apelido do repositório>
```

Listar as alterações 

```bash
git log
```
