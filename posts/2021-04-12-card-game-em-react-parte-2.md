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
Configuração do ambiente React com Next

## Preparar os pacotes 

Iniciar o projeto 

```shell
yarn init
```

Instalar dependências do sistema

```shell
yarn add next react react-dom styled-components styled-icons
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

Criar o arquivo .gitignore

```gitconfig
/node_modules
/.next
```

Criar o arquivo tsconfig.json com as estruturas para o TypeScript

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

Criar o arquivo .eslintrc.json

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

Criar o arquivo .babelrc

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

Criar o arquivo .prettierrc

```json
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```