---
title: Formatação de datas
description: Snippets para formatação de datas em JavaScript
date: 2020-10-31 10:20:35 -0300
featuredImage: ./featured/calendar-1.jpg
coverImage: /figures/calendar-1.jpg
category: JS
tags:
  - JavaScript
  - Datas
---

Recentemente estava pensando qual snippet utilizo no JavaScript, acredito que seja a formatação de datas

Com a data atual

```javascript
const getCurrentFormatDate = () => {
  const date = new Date(),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return day + "/" + month + "/" + year
}
```

a versão de alta compatibilidade

```javascript
function getCurrentFormatDate() {
  var date = new Date(),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return day + "/" + month + "/" + year
}
```

ou a versão para datas sem horário

```javascript
const getFormatDate = (text) => {
  const date = new Date(text + " 00:00:00"),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return day + "/" + month + "/" + year
}
```
