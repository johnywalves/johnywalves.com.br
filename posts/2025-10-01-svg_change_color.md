---
title: Card Game em React (1/?) - Conceito
description: Desenvolvendo um jogo tipo Magic, Digimon e Yu-Gi-Oh! do conceito até a entrega com React (Parte 1 de ?)
date: 2025-06-01 19:57:08 -0300
featuredImage: ./featured/cards-1.jpg
coverImage: figures/cards-1.jpg
category: React
tags:
  - Games
  - Design
  - JavaScript
cheatsheet: false
published: false
---

<style>
  .saturate {
    filter: brightness(100%) grayscale(100%) contrast(1000%);
  }

  .saturate-invert {
    filter: brightness(105%) grayscale(100%) contrast(1000%) invert(1);
  }

  .lights {
    filter: brightness(65%) grayscale(100%) contrast(1000%);
  }

  .all-white {
    filter: brightness(1000%) grayscale(100%) contrast(1000%);
  }
</style>

<svg width="595" height="420" xmlns="http://www.w3.org/2000/svg">
  <filter id="AllMagenta">
    <feColorMatrix
      type="matrix"
      values="
      5 2 2 0 0
      0 .75 0 0 0
      0 0 2 0 0
      0 0 0 1 0"
    />
  </filter>

  <mask id="mask-saturate" mask-type="luminance">
    <image
      href="/figures/gameboy.png"
      x="0"
      y="0"
      width="595"
      height="420"
      class="saturate"
    />
  </mask>

  <mask id="mask-saturate-invert" mask-type="luminance">
    <image
      href="/figures/gameboy.png"
      x="0"
      y="0"
      width="595"
      height="420"
      class="saturate-invert"
    />
  </mask>

  <mask id="mask-light" mask-type="luminance">
    <image
      href="/figures/gameboy.png"
      x="0"
      y="0"
      width="595"
      height="420"
      class="lights"
    />
  </mask>

  <image href="/figures/gameboy.png" x="0" y="0" width="595" height="420" />
</svg>

<svg width="595" height="420" xmlns="http://www.w3.org/2000/svg">
  <image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    filter="url(#AllMagenta)"
  />
</svg>

<svg width="595" height="420" xmlns="http://www.w3.org/2000/svg">
  <image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    class="saturate"
  />
</svg>

<svg width="595" height="420" xmlns="http://www.w3.org/2000/svg">
  <image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    class="saturate-invert"
  />
</svg>

<svg width="595" height="420" xmlns="http://www.w3.org/2000/svg">
  <image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    class="lights"
  />
</svg>

<svg width="595" height="420" xmlns="http://www.w3.org/2000/svg">
<image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    mask="url(#mask-saturate)"
    filter="url(#AllMagenta)"
  />

<image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    mask="url(#mask-saturate-invert)"
  />

<image
    href="/figures/gameboy.png"
    x="0"
    y="0"
    width="595"
    height="420"
    class="all-white"
    mask="url(#mask-light)"
  />
</svg>
