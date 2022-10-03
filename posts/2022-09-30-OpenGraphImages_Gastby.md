---
title: Gastby - Geração de miniaturas por contexto
description: Otimizando as imagens de thumbnail das postagens
date: 2022-09-30 12:00:25 -0300
featuredImage: ./featured/museum-1.jpg
coverImage: /figures/museum-1.jpg
category: Gatsby
tags:
  - SEO
  - Automação
  - Imagem
published: true
cheatsheet: false
---

No momento de estruturar os artigos costumo usar uma imagem para ilustrar, com direitos de uso permitido encontradas no Google Imagens ou WikiCommons, quando compartilhada nas redes socias ela aparece juntamente com o título e descrição, como neste exemplo do twitter

![Café cremoso em uma xícara com o nome "Construindo Layout 2.0" do artigo abaixo](/figures/og_gastby_before.png "Compartilhamento de postagem no Twitter")

Podemos fazer melhor a imagem não é o objetivo, diferente do instagram ou outras redes sociais, temos de dar mais destaque o título, descrição e entre outras que fazem mais sentido

Gerei essa imagem para substituir a anterior

![Café cremoso em uma xícara com o nome "Construindo Layout 2.0" e descrição do artigo  do artigo abaixo](/figures/og_gastby_after.jpg "Imagem com o resumo do artigo")

## Solução

Existem plugins como o [Gatsby Plugin: Open Graph Images](https://www.gatsbyjs.com/plugins/gatsby-plugin-open-graph-images/) que possuem problemas e está quebrando para algumas versões do Gatsby, depois vou investigar o motivo e fazer um Pull Request de correção

Nesse meio tempo resolvi criar minha própria solução me baseando no plugin, até para entender como deve funcionar

## Gerando a página

Crei um template com o nome `open-graph-image`, onde o elemento com o conteúdo adicionei atributo `div="ogimage"`, dentro do `gatsby-node.js` gerei as páginas dentro do caminho do `/__generated` com o `slug` da página

```javascript
createPage({
  path: `/__generated${node.fields.slug}`,
  component: path.resolve(`src/templates/open-graph-image.jsx`),
  context: {
    slug: node.fields.slug,
  },
})
```

Juntamente as outras páginas deve ser acessível quando gerada para produção ou em modelo de desenvolvimento pelo endereço `/__generated/<slug do artigo>/index.html`

## Tranformando em imagem

Depois de pronto, criei uma automação para tirar uma screenshot, para isso também precisei fazer o serviço funcionar dentro com as bibliotecas `puppeteer` e `express`

```bash
npm install puppeteer express --save-dev
# or
yarn add puppeteer express -D
```

E gerando com arquivo `get-open-graphic-images.js` com o conteúdo abaixo, alterando o script de `build` para `gatsby build && node get-open-graphic-images.js`

```javascript
const puppeteer = require("puppeteer")
const express = require("express")
const fs = require("fs")
const http = require("http")

async function getImage(servingUrl, page, slug) {
  await page.goto(`${servingUrl}__generated/${slug}/index.html`)

  const elementThumbnail = await page.$("#ogimage")
  await elementThumbnail.screenshot({
    path: `./public/ogimages/${slug}.jpg`,
  })

  console.log(`get OpenGraphImage ${slug}`)
}

// Gerar os Open Graphics Images
async function navigateOpenGraphic() {
  // Gerar pastas de origem para as imagens
  if (!fs.existsSync("./public/ogimages")) {
    fs.mkdirSync("./public/ogimages")
  }

  // Pegar caminhos gerados
  const slugs = []
  fs.readdir("./public/__generated", (_, files) => {
    files.forEach((file) => slugs.push(file))
  })

  // Servir os arquivos index.html
  const app = express()
  app.use(express.static("public"))
  const server = http.createServer(app)
  await server.listen(0)
  const servingUrl = `http://0.0.0.0:${server.address().port}/`

  // Crawler das imagens
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (const slug of slugs) {
    await getImage(servingUrl, page, slug)
  }

  // Fechar o navegador e servidor
  await browser.close()
  await server.close((err) => {
    console.log("OpenGraph server closed")
    process.exit(err ? 1 : 0)
  })
}

navigateOpenGraphic()
```

Depois foi atualizar o das metatags com os caminhos novos, como no exemplo

```html
<meta
  name="image"
  property="og:image"
  itemprop="image"
  content="<url do sitem>/ogimages/<slug do artigo>.jpg"
/>
```

## Referências

[Gatsby Plugin Open Graph - Images Public](https://github.com/squer-solutions/gatsby-plugin-open-graph-images)
