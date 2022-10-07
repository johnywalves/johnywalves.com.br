---
date: 2022-10-05 11:54:58 -0300
title: JavaScript Array - Cheatsheet
description: Cheatsheet para lidar arrays com JavaScript
featuredImage: ./featured/sheets-1.jpg
coverImage: /figures/sheets-1.jpg
category: JavaScript
tags:
  - Array
  - Cheatsheet
cheatsheet: true
published: false
---

## Elemneto único

Remover eleemento repetidos

```javascript
lista.filter((v, i, a) => a.indexOf(v) === i)
```

## Gerar lista com n elementos

Retorna uma lista com a `<quantidade de elementos>` de `undefined`

```javascript
Array.from({ length: "<quantidade de elementos>" })
```
