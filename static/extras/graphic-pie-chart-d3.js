function drawSimplePie(data, selector_wrapper, heightRect, margin) {
  if (document.querySelector(selector_wrapper + " svg")) {
    return true
  }

  // Definição do esquema de cores
  // https://github.com/d3/d3-scale-chromatic/blob/v3.0.0/README.md#schemeSet1
  const colors = d3.scaleOrdinal(d3.schemeSet1)

  // Selecionar div para colocar o relatório gráfico dentro
  const wrapper = d3.select(selector_wrapper)
  // Pegar as largura do div com 100% de largura
  const widthRect = wrapper.node().getBoundingClientRect().width

  // Criação da caixa do gráfico
  const svg = wrapper
    .append("svg")
    .attr("width", widthRect)
    .attr("height", heightRect)

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

  // Cálculo do raio do gráfico
  const radius = Math.min(width, height) / 2

  // Geração da função de arcos
  const arc = d3.arc().innerRadius(0).outerRadius(radius)

  // Geração dos ângulos para a geração
  const pie = d3.pie().value((d) => d.count)

  // Desenha caminho dos arcos
  content
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", colors)
    .attr("d", arc)

  // Ocultar o ícone de carregar
  d3.select(selector_wrapper + " #loading_graphic").style("display", "none")
}

function drawCompletePie(data, selector_wrapper) {
  if (document.querySelector(selector_wrapper + " svg")) {
    return true
  }

  // Definição do esquema de cores
  // https://github.com/d3/d3-scale-chromatic/blob/v3.0.0/README.md#schemeSet1
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

  // Cálculo do raio do gráfico
  const radius = Math.min(width, height) / 2

  // Geração da função de arcos
  const arc = d3
    .arc()
    .innerRadius(radius / 2.5)
    .outerRadius(radius)

  // Geração dos ângulos para a geração
  const pie = d3.pie().value((d) => d.count)

  // Desenha caminho dos arcos
  content
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("path")
    .attr("fill", colors)
    .attr("cursor", "pointer")
    .attr("transform", "scale(1)")
    .on("touchstart mouseover", function (d) {
      d3.select(this)
        .transition()
        .duration("250")
        .attr("transform", "scale(1.1)")
    })
    .on("touchend mouseout", function () {
      d3.select(this).transition().duration("250").attr("transform", "scale(1)")
    })
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
      .attr("fill", colorsLegends(i))
      .attr("opacity", "0")
      .transition()
      .delay(i * 500)
      .attr("opacity", "1")

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
      .attr("opacity", "0")
      .transition()
      .delay(i * 500)
      .attr("opacity", "1")
  })

  // Ocultar o ícone de carregar
  d3.select(selector_wrapper + " #loading_graphic").style("display", "none")
}

function drawGraphic() {
  const data = [
    { name: "Ásia", count: 3879 },
    { name: "América", count: 924 },
    { name: "África", count: 922 },
    { name: "Europa", count: 731 },
    { name: "Oceania", count: 32 },
  ]

  drawSimplePie(data, "#d3_wrapper_presentation", 160, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })
  drawSimplePie(data, "#d3_wrapper_simple", 512, {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20,
  })
  drawCompletePie(data, "#d3_wrapper_legend")
}

window.addEventListener("load", drawGraphic)
setTimeout(drawGraphic, 2000)
