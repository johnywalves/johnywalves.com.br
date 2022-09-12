---
title: Letras pulando
description: Animação de letras pulando para texto carregando
date: "2022-05-16 09:28:16"
featuredImage: ./featured/jumpingdog-1.jpg
coverImage: /figures/jumpingdog-1.jpg
category: CSS
tags:
  - CSS
  - Animation
---

Busca de informações, cálculos, carregamento de recursos demandam tempo e comunicar para o usuário é essencial uma maneira vi recentimente e amei, as letras pulando em sequência

<video width="480" height="155" muted autoplay loop>
  <source src="/videos/jumpingletters.mp4" type="video/mp4" />
</video>

Pode ser vista em funcionamento em [Jumping Letters](/web/jumpingletters.html)

## Como fazer

Contruindo estrutura em HMTL para receber as configurações

```html
<h1>
  <span>C</span>
  <span>a</span>
  <span>r</span>
  <span>r</span>
  <span>e</span>
  <span>g</span>
  <span>a</span>
  <span>n</span>
  <span>d</span>
  <span>o</span>
  <span>.</span>
  <span>.</span>
  <span>.</span>
</h1>
```

Aplicação de estilo, em uma página HTML com o [básico](/html-started)

```css
body {
  color: #ed34a2;
  background: #282c35;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

h1 {
  font-size: 3.6rem;
  letter-spacing: 0.1em;
}

h1 span {
  display: inline-block;
  animation: bounce 3s ease infinite;
}

h1 span:nth-child(2) {
  animation-delay: 0.2s;
}

h1 span:nth-child(3) {
  animation-delay: 0.4s;
}

h1 span:nth-child(4) {
  animation-delay: 0.6s;
}

h1 span:nth-child(5) {
  animation-delay: 0.8s;
}

h1 span:nth-child(6) {
  animation-delay: 1s;
}

h1 span:nth-child(7) {
  animation-delay: 1.2s;
}

h1 span:nth-child(8) {
  animation-delay: 1.4s;
}

h1 span:nth-child(9) {
  animation-delay: 1.6s;
}

h1 span:nth-child(10) {
  animation-delay: 1.8s;
}

h1 span:nth-child(11) {
  animation-delay: 2s;
}

h1 span:nth-child(12) {
  animation-delay: 2.2s;
}

h1 span:nth-child(13) {
  animation-delay: 2.4s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }

  10% {
    transform: translateY(-2rem);
  }

  20% {
    transform: translateY(0);
  }
}
```
