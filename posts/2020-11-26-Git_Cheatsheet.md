---
title: Git - Cheatsheet
description: Comandos para consulta da ferramenta de versionamento Git
date: 2020-11-26 14:18:35 -0300
featuredImage: ./featured/library-2.jpg
coverImage: /figures/library-2.jpg
category: Git
tags:
  - Cheatsheet
  - Versionamento
cheatsheet: true
published: true
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
