---
title: Card Game em React (Parte 2)
description: Desenvolvendo um jogo tipo Hearthstone, Gwent e Yu-Gi-Oh! do
  conceito a entrega com React (Parte 2 de ?)
date: 2021-04-12 07:35:58 -0300
coverImage: /figures/pokemon_cardgame-1.jpg
category: JS
tags:
  - javascript
published: false
highlight: false
---
```shell
yarn init
```

```shell
yarn add next react react-dom styled-components styled-icons
```

```shell
yarn add @babel/preset-typescript @storybook/addon-essentials @storybook/react @testing-library/jest-dom @testing-library/react @types/jest @types/node @types/react @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-loader babel-plugin-styled-components eslint eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky jest jest-styled-components prettier typescript -D
```



```json
  "scripts": {
    "dev": "next dev",
    "prepare": "husky install",
    "build": "next build",
    "export": "next export",
    "deploy": "next build && next export",
    "start": "next start",
    "storybook": "start-storybook -s ./public -p 6006",
    "build-storybook": "build-storybook -s ./public",
    "lint": "eslint src --max-warnings=0",
    "test": "jest",
    "test:watch": "yarn test --watch"
  }
```