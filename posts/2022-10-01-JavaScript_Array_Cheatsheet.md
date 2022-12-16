---
date: 2022-10-01 12:48:58 -0300
title: JavaScript Array - Cheatsheet
description: Cheatsheet para lidar arrays com JavaScript
featuredImage: ./featured/chain-1.jpg
coverImage: /figures/chain-1.jpg
category: JavaScript
tags:
  - Array
  - Cheatsheet
published: true
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

Ascendente

```javascript
const sorted = list.sort((a, b) => a - b)
```

Descendente

```javascript
const sorted = list.sort((a, b) => b - a)
```

## Totalizar valores

`0`: valor inicial;
`p`: valor anterior;
`c`: valor atual.

```javascript
const sum = list.reduce((p, c) => p + c, 0)
```