---
title: JavaScript Positions - Cheatsheet
description: Cheatsheet para lidar posições em navegadores com JavaScript
date: 2022-04-27 12:45:17 -0300
featuredImage: ./featured/maps-1.jpg
coverImage: /figures/maps-1.jpg
category: JavaScript
tags:
  - Position
  - Cheatsheet
published: true
cheatsheet: true
---

Posicionamento de objeto com relação ao scroll da página

```javascript
function getCoords() {
  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0

  const top = scrollTop - clientTop
  const left = scrollLeft - clientLeft

  return { top: Math.round(top), left: Math.round(left) }
}
```

Movimentar scroll do navegador lentamente para posição

```javascript
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
})
```

Verificar se elemento está na tela

```javascript
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
```
