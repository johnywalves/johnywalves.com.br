---
title: Loading com CSS 
description: Animação de loading com HTML e CSS
date: "2020-08-04 18:50:32"
category: CSS
tags:
  - Web
  - CSS
---

Pode não parecer, mas essa é uma div simples girando com CSS, pode ser vista em funcionamento em [Loading Spinner](/web/loadingspinner)

<video width="480" height="320" muted autoplay loop style="display: block; margin: 0 auto;" >
  <source src="/videos/spinnerloader.mp4" type="video/mp4">
</video>

Adicionando uma div com a classe `spinner`

```html
<div class="spinner"></div>
```

Aplicação de estilo, após um reset de CSS

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.spinner {
  border: 12px solid #ffffff29;
  border-left-color: #ed34a2;
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
