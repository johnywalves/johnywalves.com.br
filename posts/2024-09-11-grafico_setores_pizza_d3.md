---
date: 2024-09-11 10:48:12 -0300
title: Gráfico de setores (pizza) em D3.js
description: Visualização de dados com gráfico de setores / pizza / torta com D3.js
featuredImage: ./featured/charts-2.jpg
coverImage: /figures/charts-2.jpg
category: D3.js
tags:
  - Visualização
  - Gráficos
  - SVG
extras:
  - d3.v7.8.4.min.js
  - graphic-pie-chart-d3.js
published: true
cheatsheet: false
---

Isso é um gráfico de setores, pizza, torta... ou gráfico de rosca quando possuem buraco no meio

<div id="d3_wrapper_presentation" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Tem vários problemas para visualização de dados, alguns relacionados com a visualização de áreas e comunicações

Mesmo com problemas ele é muito usado por ser simples e bonito, vamos montar um com [D3.js](https://d3js.org/), uma bela biblioteca em JavaScript para visualização de dados em SVG

## Dados

Para facilitar o processo peguei uma fonte de informações fácil de entender e consultar, quantidade de habitantes por continentes:

- **name**: Nome do continente, Antártica foi removida por ter somente mil habitantes, e uma população não permanente;
- **count**: Quantidade de pessoas valores aproximados de 2008, valores divididos por milhão.

```javascript
const data = [
  { name: "Ásia", count: 3879 },
  { name: "América", count: 924 },
  { name: "África", count: 922 },
  { name: "Europa", count: 731 },
  { name: "Oceania", count: 32 },
]
```

## Desenhando um gráfico simples

Usando uma coleção de cores do conjunto do D3.js chamado [schemeSet1](https://github.com/d3/d3-scale-chromatic/blob/v3.0.0/README.md#schemeSet1)

```javascript
const colors = d3.scaleOrdinal(d3.schemeSet1)
```

Com [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors) encontramos o elemento HTML que vai hospedar nosso gráfico, usando a medida em pixel `px`, pegamos a largura em tela e selecionado uma altura `512px` para a caixa

Essas medidas criamos um elemento SVG com as medidas selecionadas

```javascript
const wrapper = d3.select("Texto CSS Selector")
const widthRect = wrapper.node().getBoundingClientRect().width
const heightRect = 512

const svg = wrapper
  .append("svg")
  .attr("width", widthRect)
  .attr("height", heightRect)
```

Adicionado as margens e posicionando o gráfico no centro da tela de pintura

```javascript
const margin = { top: 20, right: 20, bottom: 20, left: 20 }
const width = widthRect - margin.left - margin.right
const height = heightRect - margin.top - margin.bottom

const posX = width / 2 + margin.left
const posY = height / 2 + margin.top
const content = svg
  .append("g")
  .attr("transform", "translate(" + posX + "," + posY + ")")
```

Para criar uma função para criação do arco, que será o atributo `d` da tag `path` do SVG, para isso usamos o valor do raio círculo externo e círculo interno, que pode ser 0 para sem um terno

```javascript
const radius = Math.min(width, height) / 2

const arc = d3
  .arc()
  .innerRadius(radius / 2.5)
  .outerRadius(radius)
```

Com a função arco e gerando a função para converter os dados `pie` temos o desenho do gráfico

```javascript
const pie = d3.pie().value((d) => d.count)

content
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("fill", colors)
  .attr("d", arc)
```

Assim temos o seguinte gráfico

<div id="d3_wrapper_simple" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

<details>
  <summary>Código fonte completo</summary>

```javascript
// Definição do esquema de cores
// https://github.com/d3/d3-scale-chromatic/blob/v3.0.0/README.md#schemeSet1
const colors = d3.scaleOrdinal(d3.schemeSet1)

// Selecionar div para colocar o relatório gráfico dentro
const wrapper = d3.select(selector_wrapper)
// Pegar as largura do div com 100% de largura
const widthRect = wrapper.node().getBoundingClientRect().width
// Setar uma altura para o gráfico
const heightRect = 512

// Criação da caixa do gráfico
const svg = wrapper
  .append("svg")
  .attr("width", widthRect)
  .attr("height", heightRect)

// Margens do gráfico
const margin = { top: 20, right: 20, bottom: 20, left: 20 }
// Dimensão do gráfico (largura)
const width = widthRect - margin.left - margin.right
// Dimensão do gráfico (altura)
const height = heightRect - margin.top - margin.bottom

// Criação da caixa do gráfico
const posX = width / 2 + margin.left
const posY = height / 2 + margin.top
const content = svg
  .append("g")
  .attr("transform", "translate(" + posX + "," + posY + ")")

// Geração dos ângulos para a geração
const pie = d3.pie().value((d) => d.count)

// Cálculo do raio do gráfico
const radius = Math.min(width, height) / 2
// Geração da função de arcos
const arc = d3.arc().innerRadius(0).outerRadius(radius)

// Desenha caminho dos arcos
content
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("fill", colors)
  .attr("d", arc)
```

</details>

## Adicionar legenda

Primeiro vamos definir a largura do container da legenda

```javascript
const legendWidth = 180
```

Atualizando os valores de margem e largura para adicionar um espaço reservado do lado direito

```javascript
const margin = { top: 40, right: 20, bottom: 40, left: 20 }
const width = widthRect - margin.left - margin.right - legendWidth
const height = heightRect - margin.top - margin.bottom
```

Na legenda colocamos um pequeno círculo com as cores correspondentes, com `12px` de raio e uma estimativa para 10 elementos, temos menos e não queremos uma distribuição uniforme que poderia ser alcançada com `data.length`, e um valor total das contagens

```javascript
const legendRadius = 12
const legendCount = 10
const legendSpace = height / legendCount
const totalCount = data.reduce((p, c) => p + c.count, 0)
```

Iterando os valores desenhamos a legenda para cada valor

```javascript
data.forEach(({ name, count }, i) => {
  legends
    .append("circle")
    .attr("cx", legendRadius)
    .attr("cy", i * legendSpace + legendRadius)
    .attr("r", legendRadius)
    .attr("fill", colors(i))
    .attr("stroke-width", 1)

  const percent = (count / totalCount) * 100
  const percentFormatted = (Math.round(percent * 100) / 100).toFixed(2)
  const counter = count.toLocaleString("pt-BR")
  legends
    .append("text")
    .attr("x", legendRadius * 2 + 5)
    .attr("y", i * legendSpace + legendRadius + 5)
    .attr("fill", "currentColor")
    .text(name + " (" + counter + " - " + percentFormatted + "%)")
})
```

## Adicionar animação

Podemos adicionar um atributo com valor inicial e definir uma `transition()`, que podem ter propriedades de `delay`, `duration` ou ambos, com valores pré-definidos ou resultado de um função com a assinatura de `(data: any, index: number) => string | number` onde `data` são os dados do registro, posteriormente adicionado com o valor final da propriedade

```javascript
  .attr("opacity", "0")
  .transition()
  .delay((_, i) => i * 500)
  .duration("250")
  .attr("opacity", "1")
```

Outra maneira de adicionar uma animação, é a substituição do novo valor com `attr` final por uma função que varia pelo tempo `(time: number) => string | number` com a função `attrTween`

```javascript
content
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("fill", colors)
  .transition()
  .delay((_, i) => i * 500)
  .attrTween("d", (d) => {
    const inter = d3.interpolate(d.startAngle + 0.1, d.endAngle)
    return (t) => {
      d.endAngle = inter(t)
      return arc(d)
    }
  })
```

## Adicionar efeito com mouse e touch screen

Interatividade pode ser usada para filtrar dados, apresentar informações adicionais ou somente para realçar elementos, com a diretiva `on` podemos assinar um evento por exemplo `mouseover` quando o mouse está por cima do elemento e `mouseout` quando sair

```javascript
content
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("cursor", "pointer")
  .attr("transform", "scale(1)")
  .on("touchstart mouseover", function () {
    d3.select(this).transition().duration("250").attr("transform", "scale(1.1)")
  })
  .on("touchend mouseout", function () {
    d3.select(this).transition().duration("250").attr("transform", "scale(1)")
  })
```

## Gráfico completo

Somando todos esses passos temos o seguinte gráfico

<div id="d3_wrapper_legend" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

<details>
  <summary>Código fonte completo</summary>

```javascript
// Definição do esquema de cores
// https://github.com/d3/d3-scale-chromatic/blob/v3.0.0/README.md#schemeCategory10
const colors = d3.scaleOrdinal(d3.schemeSet1)

// Selecionar div para colocar o relatório gráfico dentro
const wrapper = d3.select(selector_wrapper)
// Pegar as largura do div com 100% de largura
const widthRect = wrapper.node().getBoundingClientRect().width
// Setar altura para o gráfico
const heightRect = 512
// Setar largura para caixa de legendas
const legendWidth = 180

// Criação da caixa do gráfico
const svg = wrapper
  .append("svg")
  .attr("width", widthRect)
  .attr("height", heightRect)

// Margens do gráfico
const margin = { top: 40, right: 20, bottom: 40, left: 20 }
// Dimensão do gráfico (largura)
const width = widthRect - margin.left - margin.right - legendWidth
// Dimensão do gráfico (altura)
const height = heightRect - margin.top - margin.bottom

// Criação da caixa do gráfico
const posX = width / 2 + margin.left
const posY = height / 2 + margin.top
const content = svg
  .append("g")
  .attr("transform", "translate(" + posX + "," + posY + ")")

// Geração dos ângulos para a geração
const pie = d3.pie().value((d) => d.count)

// Cálculo do raio do gráfico
const radius = Math.min(width, height) / 2
// Geração da função de arcos
const arc = d3
  .arc()
  .innerRadius(radius / 2.5)
  .outerRadius(radius)

// Desenha caminho dos arcos
content
  .selectAll("arc")
  .data(pie(data))
  .enter()
  .append("path")
  .attr("cursor", "pointer")
  .attr("transform", "scale(1)")
  .on("touchstart mouseover", function (d) {
    d3.select(this).transition().duration("250").attr("transform", "scale(1.1)")
  })
  .on("touchend mouseout", function () {
    d3.select(this).transition().duration("250").attr("transform", "scale(1)")
  })
  .attr("fill", colors)
  .transition()
  .delay((_, i) => i * 500)
  .attrTween("d", (d) => {
    const inter = d3.interpolate(d.startAngle + 0.1, d.endAngle)
    return (t) => {
      d.endAngle = inter(t)
      return arc(d)
    }
  })

// Raio do círculo da legenda
const legendRadius = 12
// Quantidade de elementos na legenda
const legendCount = 10
// Distribuição das legendas
const legendSpace = height / legendCount
// Soma das contagens
const totalCount = data.reduce((p, c) => p + c.count, 0)

// Criação e posicionamento das legendas
const legendsX = width + margin.left + margin.right
const legendsY = margin.top
const legends = svg
  .append("g")
  .attr("transform", "translate(" + legendsX + ", " + legendsY + ")")

// Reiniciar os valores das cores
const colorsLegends = d3.scaleOrdinal(d3.schemeSet1)

// Geração da legenda
data.forEach(({ name, count }, i) => {
  // Gerar círculo com a indicação das cores
  legends
    .append("circle")
    .attr("cx", legendRadius)
    .attr("cy", i * legendSpace + legendRadius)
    .attr("r", legendRadius)
    .attr("fill", colors(i))
    .attr("stroke-width", 1)

  // Gerar texto da legenda
  const percent = (count / totalCount) * 100
  const percentFormatted = (Math.round(percent * 100) / 100).toFixed(2)
  const counter = count.toLocaleString("pt-BR")
  legends
    .append("text")
    .attr("x", legendRadius * 2 + 5)
    .attr("y", i * legendSpace + legendRadius + 5)
    .attr("fill", "currentColor")
    .text(name + " (" + counter + " - " + percentFormatted + "%)")
})
```

</details>

Alguns detalhes podem ser adicionados como o valor ou percentual em cima de cada arco, se fizer parte de um dashboard um clique pode filtrar valores ou realizar um detalhamento (_drill down_) de dados

Com o tempo vou adicionado esses detalhes para esse artigo e futuramente fazer artigos sobre outros formatos de gráficos

## Referências

[Wikipedia - Continente](https://pt.wikipedia.org/wiki/Continente)

[Fil - Multitouch done right](https://observablehq.com/@d3/multitouch)

<details>
  <summary>Versões das bibliotecas utilizadas</summary>

```text
d3: "7.8.4"
```

</details>
