---
date: 2022-12-01 12:48:58 -0300
title: JavaScript Array - Cheatsheet
description: Cheatsheet para lidar arrays com JavaScript
featuredImage: ./featured/sheets-1.jpg
coverImage: /figures/sheets-1.jpg
category: JavaScript
tags:
  - Array
  - Cheatsheet
published: false
highlight: false
cheatsheet: true
---

Uma pequena coleção que vou adicionando com o tempo de utilidades para lidar com Array em JavaScript

## Elemento único

Remover elementos repetidos de uma lista

```javascript
const filtered = list.filter((v, i, a) => a.indexOf(v) === i)
```

## N elementos

Geração de uam lista com n elementos

Retorna uma lista com a `<quantidade de elementos>` de `undefined`

```javascript
Array.from({ length: "<quantidade de elementos>" })
```

## Ordenar elementos

```javascript
const sorted = list.sort((a, b) => a - b)
```

```javascript
const sorted = list.sort((a, b) => b - a)
```

## Totalizar valores

```javascript
const sum = list.reduce((p, c) => p + c, 0)
```
