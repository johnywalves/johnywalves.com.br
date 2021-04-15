---
title: Card Game em React (Parte 2)
description: Desenvolvendo um jogo tipo Hearthstone, Gwent e Yu-Gi-Oh! do
  conceito a entrega com React (Parte 2 de ?)
date: 2021-04-13 03:17:05 -0300
featuredImage: ./featured/pokemon_cardgame-1.jpg
coverImage: /figures/pokemon_cardgame-1.jpg
category: JS
tags:
  - javascript
  - game
  - react
published: false
highlight: false
---
Configuração do ambiente React com Next

## Preparar os pacotes

Iniciar o projeto [Create Next App](https://nextjs.org/docs/api-reference/create-next-app) p

```shell
yarn create next-app
```

Instalar dependências do sistema

```shell
yarn add styled-components
```

Instalar dependências de desenvolvimento

```shell
yarn add @babel/preset-typescript @storybook/addon-essentials @storybook/react @testing-library/jest-dom @testing-library/react @types/jest @types/node @types/react @types/styled-components @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-loader babel-plugin-styled-components eslint eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks husky jest jest-styled-components prettier typescript -D
```

Adicionar no `package.json` os scripts 

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

Atualizar os arquivos com o comando

```shell
yarn 
```

## Configurar o TypeScript

Criar o arquivo `next-env.d.ts`

```typescript
/// <reference types="next" />
/// <reference types="next/types/global" />
```

Criar o arquivo `tsconfig.json` com as estruturas para o TypeScript

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "exclude": [
    "node_modules"
  ],
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ]
}
```

Criar o arquivo `.babelrc` para configurar o TypeScript como intepretador e adicionar suporte ao styled components

```json
{
    "presets": [
        "next/babel",
        "@babel/preset-typescript"
    ],
    "plugins": [
        [
            "babel-plugin-styled-components",
            {
                "ssr": true,
                "displayName": true
            }
        ]
    ],
    "env": {
        "test": {
            "plugins": [
                [
                    "babel-plugin-styled-components",
                    {
                        "ssr": false,
                        "displayName": false
                    }
                ]
            ]
        }
    }
}
```

## Configurar o ESLint e o Prettier

Criar o arquivo `.eslintrc.json`

```json
{
    "env": {
        "browser": true,
        "es2020": true,
        "jest": true,
        "node": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "import",
        "import-helpers",
        "@typescript-eslint"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import-helpers/order-imports": [
            "warn",
            {
                "newlinesBetween": "always",
                "groups": [
                    "/^react/",
                    [
                        "/^@/",
                        "module"
                    ],
                    [
                        "parent",
                        "sibling",
                        "index"
                    ]
                ],
                "alphabetize": {
                    "order": "asc",
                    "ignoreCase": true
                }
            }
        ]
    }
}
```

Criar o arquivo .prettierrc

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

## Configurar o Storybook

Criar a pasta `.storybook` e na pasta o arquivo `main.js `

```javascript
module.exports = {
    stories: ['../src/components/**/*stories.tsx'],
    addons: ['@storybook/addon-essentials']
};
```

Dentro da pasta `.storybook` também criar o arquivo `jest.config.js`

```javascript
import GlobalStyles from '../src/styles/global'

export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />
            <Story />
        </>
    )
]
```

## Configurar as Bibliotecas de Testes

Criar o arquivo `jest.config.js`

```javascript
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
```

Criar a pasta `.jest` e na pasta o arquivo `setup.ts`

```javascript
import '@testing-library/jest-dom'
import 'jest-styled-components'
```

## Configurar as Bibliotecas de Estilo

Criar o arquivo `global.ts` na pasta 'styles'

```typescript
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: inherit;
    }
`

export default GlobalStyles
```

## Configuração do VSCode

Criar o arquivo `.editorconfig`

```
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Criar a pasta `.vscode` e na pasta o arquivo `settings.json`

```json
{
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```
