---
date: 2023-07-23 18:07:35 -0300
title: Animação para esqueleto de elementos
description: Usando HTML, CSS e keyframes para animação de esqueleto de elementos carregando com gradiente
featuredImage: ./featured/skeleton-1.jpg
coverImage: /figures/skeleton-1.jpg
category: CSS
tags:
  - Animação
  - Interface
  - Carregando
published: true
cheatsheet: false
---

Uma animação de "carregando", como a demonstrada abaixo, é útil para indicar que algum elemento, informação ou execução de código está em andamento:

<div class="content-box">
  <div class="spinner"></div>
</div>

Uma excelente coleção pode ser encontrada em [Loader Generator](https://www.cssportal.com/css-loader-generator/)

## Esqueleto de elementos

O uso de esqueletos transmite a ideia de uma estrutura organizada, proporcionando aos usuários uma sensação mais confortável durante o carregamento.

<div class="content-box">
  <div class="card column">
    <div class="column">
      <div class="row">
        <picture class="image_profile skeletable skeleton">
          <img />
        </picture>
        <h1 class="name skeletable skeleton">&nbsp;</h1>
      </div>
      <div class="column description">
        <p class="line skeletable skeleton">&nbsp;</p>
        <p class="line skeletable skeleton">&nbsp;</p>
        <p class="line skeletable skeleton">&nbsp;</p>
      </div>
    </div>
    <div class="detail">
      <div class="badge skeletable skeleton"></div>
      <div class="badge skeletable skeleton"></div>
    </div>
  </div>
</div>

Para implementar esse comportamento, basta adicionar a classe `skeleton`, que contém a animação `shine`, e aplicar `pointer-events: none` para evitar a ativação de links e botões

```css
.skeleton {
  background: linear-gradient(110deg, #dcdcdc 20%, #f4f4f4 60%, #dcdcdc 80%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  pointer-events: none;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
```

<style>
  .content-box {
    display: block;
    width: 100%;
    padding: 1rem 0 3rem;
  }

  .skeletable {
    background-color: var(--color-text);
    border-radius: 0.25rem;
  }

  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
  }

  .card {
    background-color: var(--white);
    margin: 0 auto;
    box-shadow: 0 0 4px 2px var(--shadow-colors), 4px 4px 8px 4px var(--shadow-colors);

    justify-content: space-between;

    width: 20rem;
    height: 22rem;
    border-radius: 1rem;
    padding: 1rem;
  }

  .image_profile {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .name {
    margin: 0 !important;
    line-height: 2.5rem;
    flex-grow: 1;
  }

  .description {
    align-items: normal;
  }

  .line {
    margin: 0 !important;
    line-height: 1.5rem !important;
    flex-grow: 1 !important;
  }

  .detail {
    width: 100%;
    align-self: flex-end;
    justify-self: flex-end;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1rem;
  }

  .badge {
    width: 5rem;
    height: 5rem;
  }

  .skeleton {
    background: linear-gradient(
      110deg,
      #dcdcdc 20%,
      #f4f4f4 60%,
      #dcdcdc 80%
    );
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    pointer-events: none;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  .spinner {
    border: 0.5rem solid var(--color-line);
    border-left-color: var(--highlight);
    height: 4rem;
    width: 4rem;
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
