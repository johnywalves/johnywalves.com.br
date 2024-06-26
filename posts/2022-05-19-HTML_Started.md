---
title: Modelo para iniciar com HTML
description: Modelo para iniciar uma página HTML com metatags e recomendações de valores
date: "2022-05-19 16:45:29"
featuredImage: ./featured/net-1.jpg
coverImage: /figures/net-1.jpg
category: Web
tags:
  - HTML
  - Cheatsheet
published: true
cheatsheet: true
---

Um modelo simples para copiar e começar uma página HTML, cansei de ter de lembrar toda vez :)

Substituir as informações nas tags:

**Page Title**: Título com o tamanho máximo de 60 caracteres, recomendável superior a 50 caracteres;  
**Page Name**: Nome do site com o tamanho máximo de 65 caracteres;  
**Page Description**: Descrição com o tamanho máximo de 160 caracteres, recomendável superior a 100 caracteres;  
**url.page**: Endereço permanente para o conteúdo;  
**/path/to/thumbnail**: Caminho absoluto, com url, da imagem do thumbnail com tamanho máximo de 300KB, dimensão de 1200px por 628px e com link com HTTPS.

Na variável `og:type` informar o tipo de conteúdo como `website`, `article`, `book`, `profile` ou os tipos de arquivos no [OGP Type](https://ogp.me/#types)

Também alterar e informar as cores na lista dentro do `:root` completando com outras variáveis, não esquecendo de informar a cor do tema na tag `theme-color`

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="theme-color" content="#e0138c" />

    <title>Page Title</title>
    <meta name="title" property="og:title" content="Page Title" />
    <meta
      name="description"
      property="og:description"
      content="Page Description"
    />
    <meta
      name="image"
      property="og:image"
      itemprop="image"
      content="/path/to/thumbnail"
    />
    <meta name="type" property="og:type" content="website" />
    <meta name="url" property="og:url" content="https://url.page" />
    <meta name="site_name" property="og:site_name" content="Page Name" />
    <meta name="locale" property="og:locale" content="pt_BR" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://url.page" />
    <meta name="twitter:title" content="Page Title" />
    <meta name="twitter:description" content="Page Description" />
    <meta name="twitter:image" content="/path/to/thumbnail" />

    <style>
      /* Reset CSS */
      *,
      *:before,
      *:after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }

      html {
        --14px: 0.875rem;
        --16px: 1rem;
        --18px: 1.125rem;
        --21px: 1.3125rem;
        --24px: 1.5rem;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      }

      ol,
      ul {
        list-style: none;
      }

      a,
      a:hover,
      a:visited {
        text-decoration: none;
        color: inherit;
      }

      /* Content CSS */
      :root {
        --color-background: #282c35;
        --color-text: #e0138c;
      }

      body {
        background: var(--color-background);
        color: var(--color-text);
      }
    </style>
  </head>

  <body></body>

  <script type="text/javascript"></script>
</html>
```

## Metatags adicionais

Algumas meta tags que podem ser incluídas

### Autor do conteúdo

Usado para indicar quem produziu o conteúdo, muito usado por artigos

```html
<meta name="author" content="Author Name" />
<meta name="twitter:creator" content="Author Twitter" />
```

### As palavras chaves do conteúdo

Informando a lista de palavras chaves separado com vírgula, como `css, html, javascript`

```html
<meta name="keywords" content="List of the keywords" />
<meta name="news_keywords" content="List of the keywords" />
```

### Imagem de Icone

No exemplo está como PNG, substituir o tipo para outras extensões de arquivos

```html
<link rel="icon" href="/path/to/icon.png" type="image/png" />
```

## Referenciar arquivos

Podemos referências arquivos externos como

### CSS externo

```html
<link rel="stylesheet" href="/path/to/styles.css" />
```

### Script externo

```html
<script src="/path/to/scripts.js"></script>
```

### Manifest

Linkar o manifesto com a apresentação formado do site para as ferramentas

```html
<link rel="manifest" href="manifest.json" />
```

Modelo do manifesto para arquivo `manifest.json`

```javascript
{
  "$schema": "https://json.schemastore.org/web-manifest-combined.json",
  "name": "Johny W. Alves | Web Developer",
  "short_name": "Johny W. Alves",
  "description": "Desenvolvedor Web, estudante de ciência de dados e quadrinista amador com vários projetos, alguns conteúdos e um pouco de humor, espero que gostem",
  "display": "fullscreen",
  "background_color": "#0e4266",
  "theme_color": "#e0138c",
  "start_url": "/",
  "icons": [
    {
      "src": "/img/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/img/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

### Sitemap

Apresentação dos diretório e caminhos disponíveis no site

```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
```

Modelo de sitemap

```xml
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
    <url>
        <loc>https://url.page</loc>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>
</urlset>
```

## Referências

[Metatags](https://metatags.io/)

[Josh W Comeau - The Surprising Truth About Pixels and Accessibility](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
