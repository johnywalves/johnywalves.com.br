---
date: 2023-05-05 14:29:02 -0300
title: Relação de bilheterias em filmes de ação
description: Visualização de dados com D3.js e gráfico de dispersão com filmes de grandes bilheterias
featuredImage: ./featured/movie-1.jpg
coverImage: /figures/movie-1.jpg
category: D3
tags:
  - Visualização
  - Gráficos
  - SVG
extras:
  - d3.v7.8.4.min.js
  - graphic-actions-movies.js
published: true
cheatsheet: false
---

Vasculhando as fontes de dados encontrei uma listagem com as maiores bilheterias de filmes de ação [esse link](https://www.kaggle.com/datasets/bilalwaseer/all-time-worldwide-box-office-for-action-movies)

Selecionei as primeiras 200 posições e salvei no arquivo `box_office_action_movies.csv` para ser importado e usando o D3.js v7 gerei o seguinte gráfico

<p class="center bold">Relação entre bilheteria doméstica e internacional das 200 maiores de filmes de ação</p>

<div id="d3_wrapper" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

<p class="center">Filtragem de filmes</p>

<div class="d3_commands">
  <button id="top_10">Melhores 10</button>
  <button id="top_50">Melhores 50</button>
  <button id="top_100">Melhores 100</button>
  <button id="reset_data" class="disabled">Todos</button>
  <button id="bottom_100">Últimos 100</button>
  <button id="bottom_50">Últimos 50</button>
  <button id="bottom_10">Últimos 10</button>
</div>

Com interação de passar o ponteiro em cima mostra o nome do filme

## Geração do gráfico

Para executar o gráfico criamos uma caixa onde ele vai estar contido, com uma animação de carregando

```html
<div id="d3_wrapper" class="d3_graph">
  <div id="loading_graphic"></div>
</div>
```

Fazendo uso da função `getElement` para buscar ou criar os elementos atualizando os valores sem recriar

```javascript
function getElement(parent, tag, selector = "") {
  return parent.select(selector || tag).node()
    ? parent.select(selector || tag)
    : parent.append(tag)
}
```

Desenhar o gráfico com as movimentações de atualizações e remoção, comentários para cada parte

```javascript
function drawGraphic(data) {
  // Selecionar div para colocar o relatório gráfico dentro
  const wrapper = d3.select("#d3_wrapper")

  // Caso a caixa não esteja disponível pular o desenho
  if (!wrapper.node()) {
    return
  }

  // Margens do gráfico
  const margin = { top: 10, right: 10, bottom: 60, left: 60 }

  // Dimensão do gráfico (largura e altura)
  const width =
    wrapper.node().getBoundingClientRect().width - margin.left - margin.right
  const height = 600 - margin.top - margin.bottom

  // Dimensão do elemento SVG (largura e altura)
  const widthWrapper = width + margin.left + margin.right
  const heightWrapper = height + margin.top + margin.bottom

  // Criação da caixa SVG para contenção do gráfico
  const svg = getElement(wrapper, "svg")
    .attr("width", widthWrapper)
    .attr("height", heightWrapper)

  // Criação e posicionamento do gráfico
  const graph = getElement(svg, "g")
    .attr("class", "graph")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Valores máximos dos domínios
  const maxDomestic = d3.max(data, (d) => d.domestic)
  const maxInternational = d3.max(data, (d) => d.international)

  // Definição do eixo X
  const xScale = d3.scaleLinear().range([0, width]).domain([0, maxDomestic])

  // Definição do eixo Y
  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, maxInternational])

  // Adicionar linhas de grade no eixo X
  getElement(graph, "g", "g.grid.x")
    .attr("class", "grid x")
    .call(
      d3
        .axisBottom(xScale)
        .ticks(10)
        .tickSize(height)
        .tickFormat((d) => +d / Math.pow(10, 9) + "B")
    )

  // Adicionar linhas de grade no eixo Y
  getElement(graph, "g", "g.grid.y")
    .attr("class", "grid y")
    .call(
      d3
        .axisLeft(yScale)
        .ticks(10)
        .tickSize(-width)
        .tickFormat((d) => +d / Math.pow(10, 9) + "B")
    )

  // Gerar legenda do eixo X
  getElement(graph, "text", "text.bottom")
    .attr("class", "bottom")
    .style("fill", "var(--texts)")
    .style("font-size", "1rem")
    .style("text-anchor", "end")
    .attr("x", xScale(maxDomestic))
    .attr("y", height + margin.bottom / 1.5)
    .text("Arrecadação doméstica")

  // Gerar legenda do eixo Y
  getElement(graph, "text", "text.left")
    .attr("class", "left")
    .style("fill", "var(--texts)")
    .style("font-size", "1rem")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left + 20)
    .attr("x", 0)
    .text("Arrecadação internacional")

  // Conteúdo para os círculos de dispersão
  const content = getElement(graph, "g", "g.circles").attr("class", "circles")

  // Criação da caixa de texto para a integração do mouse
  const tooltip = getElement(graph, "text", "text.tooltip")
    .attr("class", "tooltip")
    .style("text-anchor", "start")
    .style("fill", "var(--texts)")
    .style("font-size", "1.25rem")
    .style("visibility", "hidden")

  // Interações com o mouse para os círculos
  // Atenção pela redeclaração fora do join para atualizar valores
  function takeAction(element) {
    element
      // Apresentar o texto e atualizar conteúdo
      .on("mouseover", function (_, d) {
        d3.select(this).transition().duration("50").attr("opacity", "1")

        tooltip.style("visibility", "visible").text(d.name)
      })
      // Posicionar o texto perto do círculo
      // Ajustando para baixo e esquerda para encaixar na tela
      .on("mousemove", function (_, d) {
        const xPos = xScale(d.domestic)
        const yPos =
          yScale(d.international) +
          (d.international < maxInternational * 0.6 ? -20 : 30)

        tooltip
          .style(
            "text-anchor",
            d.domestic < maxDomestic * 0.6 ? "start" : "end"
          )
          .attr("transform", "translate(" + xPos + "," + yPos + ")")
      })
      // Ocultar o texto
      .on("mouseout", function () {
        d3.select(this).transition().duration("50").attr("opacity", "0.5")

        tooltip.style("visibility", "hidden")
      })
  }

  // Desenhar círculos de dispersão
  content
    .selectAll("circle")
    .data(data)
    .join(
      // Valores inciais para os circulos
      (enter) =>
        enter
          .append("circle")
          .call(takeAction)
          .attr("cx", (d) => xScale(d.domestic))
          .attr("cy", (d) => yScale(d.international))
          .attr("fill", "var(--highlight)")
          .attr("stroke", "var(--texts)")
          .attr("opacity", "0.5")
          .attr("r", 0)
          .transition()
          .duration(500)
          .attr("r", 10),
      // Movimentar posição ao atualizar os registros
      (update) =>
        update
          .call(takeAction)
          .transition()
          .duration(500)
          .attr("cx", (d) => xScale(d.domestic))
          .attr("cy", (d) => yScale(d.international)),
      // Reduzir o círculo antes de ser removida
      (exit) => exit.transition().duration(500).attr("r", 0).remove()
    )

  // Ocultar o icone de carregar
  d3.select("#loading_graphic").style("display", "none")
}
```

## Seleção de dados

Carregamos somente os 200 primeiros registro da fonte de dados original, com os botões para filtrar os valores

```html
<div class="d3_commands">
  <button id="top_10">Melhores 10</button>
  <button id="top_50">Melhores 50</button>
  <button id="top_100">Melhores 100</button>
  <button id="reset_data" class="disabled">Todos</button>
  <button id="bottom_100">Últimos 100</button>
  <button id="bottom_50">Últimos 50</button>
  <button id="bottom_10">Últimos 10</button>
</div>
```

Para cada botão selecionar uma parte dados brutos `raw` e atualizar os dados usados no gráfico realizando o desenho novamente

```javascript
async function onLoad() {
  // Busca das informações dos filmes em CSV
  const raw = await d3.csv(
    "/extras/box_office_action_movies.csv",
    // Converter os dados em números
    // e colocar o ano no nome do texto
    (d) => ({
      name: `${d.Movie} (${d.Released})`,
      domestic: +d["Domestic Box Office"].replace("$", "").split(",").join(""),
      international: +d["International Box Office"]
        .replace("$", "")
        .split(",")
        .join(""),
    })
  )

  function enable_button(element) {
    d3.select("#top_10").attr("class", "")
    d3.select("#top_50").attr("class", "")
    d3.select("#top_100").attr("class", "")
    d3.select("#reset_data").attr("class", "")
    d3.select("#bottom_100").attr("class", "")
    d3.select("#bottom_50").attr("class", "")
    d3.select("#bottom_10").attr("class", "")

    d3.select(element).attr("class", "disabled")
  }

  function filterData(start, end) {
    return function () {
      enable_button(this)
      // Aplicar filtros das informações
      drawGraphic(raw.slice(start, end))
    }
  }

  // Selecionar as 10 primeiras
  d3.select("#top_10").on("click", filterData(0, 10))
  // Selecionar as 20 primeiras
  d3.select("#top_50").on("click", filterData(0, 50))
  // Selecionar as 50 primeiras
  d3.select("#top_100").on("click", filterData(0, 100))
  // Apresentar todos os registros
  d3.select("#reset_data").on("click", filterData(0, 200))
  // Selecionar as 50 últimos
  d3.select("#bottom_100").on("click", filterData(100, 200))
  // Selecionar as 20 últimos
  d3.select("#bottom_50").on("click", filterData(150, 200))
  // Selecionar as 10 últimos
  d3.select("#bottom_10").on("click", filterData(190, 200))

  // Desenhar o gráfico no momento do carregamento
  drawGraphic(raw)
}
```

## Primeiro desenho

Executar o primeiro desenho com o [load da página](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event), caso o documento não carregue completamente, garantimos o desenho depois de 2 segundos

```javascript
// Chamada da função para desenhar gráfico
window.addEventListener("load", onLoad)
// Caso o evento load não seja acionado rodar depois de 2 segundos
setTimeout(() => document.querySelector("#d3_wrapper svg") || onLoad(), 2000)
```

Temos nosso gráfico de dispersão em tela

## Referências

[Kaggle - All Time Worldwide Box Office for Action Movies](https://www.kaggle.com/datasets/bilalwaseer/all-time-worldwide-box-office-for-action-movies)

<details>
  <summary>Versões das bibliotecas utilizadas</summary>

```text
d3: "7.8.4"
```

</details>
