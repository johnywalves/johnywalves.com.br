---
date: 2024-05-28 20:50:23 -0300
title: Checkbox estilizado com HTML e CSS puro
description: Checkbox (caixa de seleção) estilizado com personalização de cores e tamanho
featuredImage: ./featured/checklist-1.jpg
coverImage: /figures/checklist-1.jpg
category: CSS
tags:
  - Web
  - Estilo
extras:
  - custom-checkbox.css
published: true
cheatsheet: false
---

A tag de `<input type="checkbox">`, ou caixa de seleção, original do HTML é meio... pequena e feia

<div class="custom-checkout-wrapper">
  <div>
    <input id="banana-org" type="checkbox"></input>
    <label for="banana-org">Banana (desmarcado)<label>
  </div>
  <div>
    <input id="kiwi-org" type="checkbox" checked></input>
    <label for="kiwi-org">Kiwi (marcado)<label>
  </div>
  <div>
    <input id="morango-org" type="checkbox" disabled></input>
    <label for="morango-org" class="disabled">Morango (desativado)<label>
  </div>
  <div>
    <input id="maca-org" type="checkbox" checked disabled></input>
    <label for="maca-org" class="disabled">Maça (marcado e desativado)<label>
  </div>
</div>

Podemos personalizar todos os checkboxes da nossa página para deixar com a estética mais próxima dos outros componentes

<div class="custom-checkout-wrapper">
  <div>
    <input id="banana" type="checkbox" class="custom-checkout"></input>
    <label for="banana">Banana (desmarcado)<label>
  </div>
  <div>
    <input id="kiwi" type="checkbox" class="custom-checkout" checked></input>
    <label for="kiwi">Kiwi (marcado)<label>
  </div>
  <div>
    <input id="morango" type="checkbox" class="custom-checkout" disabled></input>
    <label for="morango" class="disabled">Morango (desativado)<label>
  </div>
  <div>
    <input id="maca" type="checkbox" class="custom-checkout" checked disabled></input>
    <label for="maca" class="disabled">Maça (marcado e desativado)<label>
  </div>
</div>

Lembrando que podemos indicar um rótulo `<label>` para o checkbox `<input type="checkbox">` para contextualizar o recebimento de dados, apenas informando

```html
<input id="banana" type="checkbox"></input>
<label for="banana">Banana<label>
```

Aplicando seguinte estilo para todos os checkbox da página

```css
/* Caixa para o marcador */
input[type="checkbox"] {
  appearance: none;
  position: relative;
  /* Tamanho */
  width: 1.125rem;
  height: 1.125rem;
  /* Cor do fundo e borda */
  background-color: #fff;
  border: 0.125rem solid #ccc;
  border-radius: 0.25rem;
}

/* Características do marcador */
input[type="checkbox"]::before {
  content: "";
  /* Posicionar no meio */
  position: absolute;
  top: 50%;
  left: 50%;
  /* Tamanho do marcador */
  width: 0.75rem;
  height: 0.75rem;
  /* Formato do marcador */
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  /* Posicionar no meio */
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;
  transition: 0.125s transform ease-in-out;
  /* Cor do marcador */
  box-shadow: inset 1rem 1rem #fff;
}

/* Cor da caixa para o marcador */
input[type="checkbox"]:checked {
  background-color: #e0138c;
  border-color: #e0138c;
}

/* Características do marcador quando selecionado */
input[type="checkbox"]:checked::before {
  transform: translate(-50%, -50%) scale(1);
}

/* Características do marcador quando selecionado */
input[type="checkbox"]:disabled {
  opacity: 0.25;
}
```

Aplicando o [CSS Nest](https://caniuse.com/?search=css%20nest) que está com grande aceitação pelos navegadores

```css
input[type="checkbox"] {
  appearance: none;
  position: relative;
  width: 1.125rem;
  height: 1.125rem;
  background-color: #fff;
  border: 0.125rem solid #ccc;
  border-radius: 0.25rem;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.75rem;
    height: 0.75rem;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: translate(-50%, -50%) scale(0);
    transform-origin: center;
    transition: 0.125s transform ease-in-out;
    box-shadow: inset 1rem 1rem #fff;
  }

  &:checked {
    background-color: #e0138c;
    border-color: #e0138c;

    &::before {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &:disabled {
    opacity: 0.25;
  }
}
```

Ou substituindo `[type="checkbox"]` pelo seletor de classe, como `input.custom-checkout`, e aplicando no atributo `class` na tag
