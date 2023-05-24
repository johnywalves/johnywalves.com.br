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
const filtered = list.filter((value, index, array) => array.indexOf(value) === index)
```

or 

```javascript
const filtered = [... new Set([...list])]
```

## N elementos

Geração de uam lista com n elementos

Retorna uma lista com a `<quantidade de elementos>` de `undefined`

```javascript
Array.from({ length: "<quantidade de elementos>" })
```

## Ordenar elementos

Por ordem ascendente

```javascript
const sorted = list.sort((a, b) => a - b)
```

Por ordem descendente

```javascript
const sorted = list.sort((a, b) => b - a)
```

Reverter elementos da lista

```javascript
const sorted = list.reverse()
```

## Totalizar valores

`0`: valor inicial;
`p`: valor anterior;
`c`: valor atual.

```javascript
const sum = list.reduce((p, c) => p + c, 0)
```

## Agrupar por propriedade

```javascript
const items = [
  { nome: 'Item 1', grupo: 'A' },
  { nome: 'Item 2', grupo: 'B' },
  { nome: 'Item 3', grupo: 'A' },
  { nome: 'Item 4', grupo: 'B' },
  { nome: 'Item 5', grupo: 'C' }
];

const groupedItems = items.reduce((grupos, item) => {
  (grupos[item.grupo] = grupos[item.grupo] || []).push(item);
  return grupos;
}, {});

console.log(groupedItems);
```
