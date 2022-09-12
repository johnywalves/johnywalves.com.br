---
date: 2022-04-09 12:18:34 -0300
title: Strapi - Static com JavaScript Inline
description: Disponibilizar arquivos pela raiz do Strapi com JavaScript embutido
category: Strapi
featuredImage: ./featured/armband-1.jpg
coverImage: /figures/armband-1.jpg
tags:
  - Strapi
  - Static
---

Strapi é um headless CMS, em NodeJS com Koa, com grande facilidade de personalização, facilitando subir uma ferramenta e adequando para seu uso no decorer o projeto

Embora não seja recomendando fazer uso da pasta **public** para disponibilizar conteúdo, no início do projeto pode ser de grande ajuda

## Problema

Fazendo uso da versão do Stapi `4.1.7`, podemos colocar os arquivos estáticos na pasta **public** que serão entregues pelo sistema, lembrando não fazer uso de caminhos já usados como **admin** e **api**

Por conta das restrições de segurança informados pela propriedade `Content-Security-Policy` no header da resposta do GET não podemos fazer uso de alguns recursos

Incluindo dentro dele comandos JavaScript com a tag `<script>` podemos incorporar nas diretivas de segurança para liberar essa opção

## Procedimento

Dentro do **config/middlewares.js** alterar a declaração do `strapi::security` por

```javascript
{
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: {
      directives: {
        'script-src': ["'self'", "'unsafe-inline'"],
      },
    }
  },
},
```

Observando o `self` que vai garantir que o sistema admin vai continuar funcionando com conta dos scripts do React ou outros que faça a chamada e `unsafe-inline` para executar os scripts dentro da tag `<script>`
