---
date: 2022-11-01 12:48:58 -0300
title: JavaScript Array - Cheatsheet
description: Cheatsheet para lidar arrays com JavaScript
featuredImage: ./featured/sheets-1.jpg
coverImage: /figures/sheets-1.jpg
category: JavaScript
tags:
  - Array
  - Cheatsheet
published: false
cheatsheet: true
---

Uma pequena coleção que vou adicionando com o tempo de utilidades para lidar com Array em JavaScript

**Elemento único**: Remover elementos repetidos de uma lista

```javascript
lista.filter((v, i, a) => a.indexOf(v) === i)
```

**N elementos**: Geração de uam lista com n elementos

Retorna uma lista com a `<quantidade de elementos>` de `undefined`

```javascript
Array.from({ length: "<quantidade de elementos>" })
```

**N elementos**: Geração de uam lista com n elementos

const sorted = data.sort((a, b) => a.count - b.count)

const sorted = data.sort((a, b) => b.count - a.count)
