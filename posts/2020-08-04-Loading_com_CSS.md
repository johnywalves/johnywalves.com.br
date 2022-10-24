---
title: Loading com CSS
description: Animação de loading com HTML e CSS
date: "2020-08-04 18:50:32"
featuredImage: ./featured/hourglass-1.jpg
coverImage: /figures/hourglass-1.jpg
category: CSS
tags:
  - Web
  - Animação
published: true
cheatsheet: false
---

Pode não parecer, mas essa é uma div simples girando com CSS

<video width="480" height="320" muted autoplay loop style="display: block; margin: 1rem auto;" >
  <source src="/videos/spinnerloader.mp4" type="video/mp4">
</video>

Pode ser vista em funcionamento em [Loading Spinner](/web/loadingspinner.html)

## Como fazer

Adicionando uma div com a classe `spinner`

```html
<div class="spinner"></div>
```

Aplicação de estilo, em uma página HTML com o [básico](/html-started)

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.spinner {
  border: 12px solid #ffffff29;
  border-left-color: #e0138c;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```
