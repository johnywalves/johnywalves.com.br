---
title: Automação de screenshot com Puppeteer
description: Armazenar telas de páginas Web com Puppeteer, JavaScript e NodeJS
date: 2023-03-28 17:50:32
featuredImage: ./featured/robot-1.jpg
coverImage: /figures/robot-1.jpg
category: JavaScript
tags:
  - Automação
  - Puppeteer
  - Tests
published: true
highlight: false
cheatsheet: false
---

Automatizar é criar um robô para realizar tarefas repetitividas, do dicionário:

> **Robô**
>
> de 1923, "pessoa mecânica", "pessoa que trabalha ou realizar atividades inteiramente mecânicamente" da tradução em inglês de 1920 da peça "R.U.R." ("Rossum's Universal Robots") por Karel Capek (1890-1938), do tcheco *robotnik* "trabalhor forçado,", de *robota* "trabalho forçado, serviço compusório, labuta," ...
>
> Fonte: [Tradução livre de Etymology Online](https://www.etymonline.com/search?q=robot)

Vamos criar um pequeno robô para fazer uma atividade específica

## Instalação de pacotes

Podemos instalar o `puppeteer` como global ou iniciar um projeto com o, respondendo as perguntas do inicializador

```bash
npm init
# or 
yarn init
```

E instalar o próprio `puppeteer`

```bash
npm install puppeteer
# or 
yarn add puppeteer
```

## Realizar o passo a passo

Geração do código para nosso pequeno robô

### Abrir o navegador

Importação da biblioteca do Pupeeteer

```javascript
const puppeteer = require("puppeteer")
```

Iniciação do navegador do Google Chrome e abrir uma aba nova

```javascript
const browser = await puppeteer.launch()
const page = await browser.newPage()
```

### Navegar e esperar construção da página

Navegando para `https://google.com` e esperar o navegador informar o fim do carregamento

```javascript
await page.goto('https://google.com', { waitUntil: "networkidle0" })
```

### Redimensionar janela do navegador

```javascript
await page.setViewport({
  width: 1800,
  height: 1200,
  deviceScaleFactor: 1,
})
```

### Tirando uma foto

```javascript
await page.screenshot({
  path: `./open.jpg`,
  type: "jpeg",
  quality: 100,
})
```

### Digitando texto na caixa

Buscar e focar no campo de texto de pesquisa

```javascript
const searchField = await page.$("[name=q]")
searchField.focus()
```

Informar o termo de busca e iniciar a pesquisa com `Enter`

```javascript
await page.keyboard.type("orange")
await page.keyboard.press('Enter')
```

### Clicando no elemento

```javascript
const imageTab = await page.$("#top_nav a")
await imageTab.click()
```

### Esperando página carregar 

Não é ideial no processo de carregamento ter um esperar com tempo definido, mas algumas vezes é necessário

```javascript
function delay(time) {
  return new Promise(function(resolve) { 
    setTimeout(resolve, time)
  })
}

// Esperar por 10 segundos
await delay(10000)
```

Sempre que possível solicite para esperar a página carregar com resposta da rede finalizada

```javascript
await page.waitForNavigation({waitUntil: 'networkidle2'})
```

## Compilado

Compilado para executar de forma invisível (headless) no Google Chrome

```javascript
const puppeteer = require("puppeteer")

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    })
 }

async function main() {
    // Iniciar Puppeteer, navegador e nova página
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    // Acessar endereço, esperando página carregar
    await page.goto('https://google.com', { waitUntil: "networkidle0" })

    // Tirar um screenshot
    await page.screenshot({
        path: `./open.jpg`,
        type: "jpeg",
        quality: 100,
    })

    // Alterar o tamanho da tela
    await page.setViewport({
        width: 1800,
        height: 1200,
        deviceScaleFactor: 1,
    })

    // Tirar um screenshot da tela ampliada
    await page.screenshot({
        path: `./max.jpg`,
        type: "jpeg",
        quality: 100,
    })

    // Encontrar e focar no campo de busca
    const searchField = await page.$("[name=q]")
    searchField.focus()

    // Digitar a palavra "orange" na caixa de busca e digitar <Enter>
    await page.keyboard.type("orange")
    await page.keyboard.press('Enter')

    // Esperar por 10 segundos
    await delay(10000)

    // Tirar um screenshot do resultado da busca
    await page.screenshot({
        path: `./search.jpg`,
        type: "jpeg",
        quality: 100,
    })

    // Clicar para a aba de Imagens
    const imageTab = await page.$("#top_nav a")
    await imageTab.click()

    // Esperar página carregar após o clique
    await page.waitForNavigation({waitUntil: 'networkidle2'})

    // Tirar um screenshot das imagens
    await page.screenshot({
        path: `./imagens.jpg`,
        type: "jpeg",
        quality: 100,
    })    

    // Fechar o navegador
    await browser.close()
}

main()
```

## Possíveis problemas

No sistema Linux é necessário alguns pacotes para a execução do Chrome Driver 

Se for necessário executar ```sudo apt install libnss```

Se a continuar com problemas de execução tentar ```sudo apt install libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev```

Se necessário adicionar ```sudo apt install libgconf-2-4 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev```

Para adicionar libasound2  ```sudo apt install libasound2```

## Referências

[Puppeteer - Docs](https://pptr.dev/)
