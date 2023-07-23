---
date: 2020-08-04 18:50:32 -0300
title: Animação de carregando (loading) com CSS puro
description: Estilização de carregando com girando estilizado somente com HTML e CSS
featuredImage: ./featured/hourglass-1.jpg
coverImage: /figures/hourglass-1.jpg
category: CSS
tags:
  - Animação
  - Interface
  - Carregando
published: true
cheatsheet: false
---

Pode não parecer, mas essa é uma div simples girando com CSS

<div class="content-box">
  <div class="spinner"></div>
</div>

Também pode ser observada funcionando em [Loading Spinner](/web/loadingspinner.html)

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

<style>
  .content-box {
    display: block;
    width: 100%;
    padding: 3rem 0 4rem;
  }

  .spinner {
    border: 0.75rem solid var(--color-line);
    border-left-color: var(--highlight);
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
