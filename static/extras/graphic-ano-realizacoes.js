function drawGraphic() {
  if (document.querySelector("#d3_wrapper svg")) {
    return true
  }

  const raw = [
    { date: "2022-10-17", weight: 111.0 },
    { date: "2022-10-18", weight: 110.7 },
    { date: "2022-10-19", weight: 110.7 },
    { date: "2022-10-20", weight: 110.2 },
    { date: "2022-10-21", weight: 110.1 },
    { date: "2022-10-22", weight: 110.4 },
    { date: "2022-10-23", weight: 110.8 },
    { date: "2022-10-24", weight: 111.8 },
    { date: "2022-10-25", weight: 110.4 },
    { date: "2022-10-26", weight: 110.1 },
    { date: "2022-10-27", weight: 110.1 },
    { date: "2022-10-28", weight: 110.8 },
    { date: "2022-10-29", weight: 109.7 },
    { date: "2022-10-30", weight: 109.7 },
    { date: "2022-10-31", weight: 109.7 },
    { date: "2022-11-01", weight: 109.3 },
    { date: "2022-11-02", weight: 108.8 },
    { date: "2022-11-03", weight: 110.7 },
    { date: "2022-11-04", weight: 109.7 },
    { date: "2022-11-05", weight: 109.7 },
    { date: "2022-11-06", weight: 110.4 },
    { date: "2022-11-07", weight: 111.2 },
    { date: "2022-11-08", weight: 112.8 },
    { date: "2022-11-09", weight: 114.7 },
    { date: "2022-11-10", weight: 114.3 },
    { date: "2022-11-11", weight: 113.5 },
    { date: "2022-11-12", weight: 112.2 },
    { date: "2022-11-13", weight: 112.5 },
    { date: "2022-11-14", weight: 113.9 },
    { date: "2022-11-15", weight: 115.8 },
    { date: "2022-11-16", weight: 113.8 },
    { date: "2022-11-17", weight: 113.2 },
    { date: "2022-11-18", weight: 112.5 },
    { date: "2022-11-19", weight: 112.8 },
    { date: "2022-11-20", weight: 113.1 },
    { date: "2022-11-21", weight: 113.4 },
    { date: "2022-11-22", weight: 112.8 },
    { date: "2022-11-23", weight: 112.9 },
    { date: "2022-11-24", weight: 114.8 },
    { date: "2022-11-25", weight: 115.7 },
    { date: "2022-11-26", weight: 116.5 },
    { date: "2022-11-27", weight: 117.2 },
    { date: "2022-11-28", weight: 116.3 },
    { date: "2022-11-29", weight: 115.1 },
    { date: "2022-11-30", weight: 115.5 },
    { date: "2022-12-01", weight: 116.0 },
    { date: "2022-12-02", weight: 116.4 },
    { date: "2022-12-03", weight: 115.1 },
    { date: "2022-12-04", weight: 115.5 },
    { date: "2022-12-05", weight: 115.6 },
    { date: "2022-12-06", weight: 114.2 },
    { date: "2022-12-07", weight: 114.7 },
    { date: "2022-12-08", weight: 115.5 },
    { date: "2022-12-09", weight: 115.4 },
    { date: "2022-12-10", weight: 115.6 },
    { date: "2022-12-11", weight: 116.1 },
    { date: "2022-12-12", weight: 115.4 },
    { date: "2022-12-13", weight: 114.6 },
    { date: "2022-12-14", weight: 114.2 },
    { date: "2022-12-15", weight: 114.2 },
    { date: "2022-12-15", weight: 114.1 },
    { date: "2022-12-16", weight: 114.0 },
    { date: "2022-12-17", weight: 114.1 },
    { date: "2022-12-18", weight: 114.5 },
    { date: "2022-12-19", weight: 114.2 },
    { date: "2022-12-20", weight: 113.9 },
    { date: "2022-12-21", weight: 114.8 },
    { date: "2022-12-22", weight: 114.4 },
    { date: "2022-12-23", weight: 114.2 },
    { date: "2022-12-24", weight: 115.2 },
    { date: "2022-12-25", weight: 116.1 },
    { date: "2022-12-26", weight: 114.1 },
    { date: "2022-12-27", weight: 113.5 },
    { date: "2022-12-28", weight: 115.2 },
    { date: "2022-12-29", weight: 114.0 },
    { date: "2022-12-30", weight: 113.5 },
    { date: "2022-12-31", weight: 114.2 },
    { date: "2023-01-01", weight: 115.6 },
    { date: "2023-01-02", weight: 114.7 },
    { date: "2023-01-03", weight: 114.6 },
    { date: "2023-01-04", weight: 114.4 },
    { date: "2023-01-05", weight: 114.8 },
    { date: "2023-01-06", weight: 114.3 },
    { date: "2023-01-07", weight: 114.9 },
    { date: "2023-01-08", weight: 115.1 },
    { date: "2023-01-09", weight: 116.2 },
    { date: "2023-01-10", weight: 115.3 },
    { date: "2023-01-11", weight: 115.1 },
    { date: "2023-01-12", weight: 115.9 },
    { date: "2023-01-13", weight: 115.7 },
    { date: "2023-01-14", weight: 115.8 },
    { date: "2023-01-15", weight: 116.2 },
    { date: "2023-01-16", weight: 116.3 },
    { date: "2023-01-17", weight: 115.4 },
    { date: "2023-01-18", weight: 114.9 },
    { date: "2023-01-19", weight: 115.3 },
    { date: "2023-01-20", weight: 115.9 },
    { date: "2023-01-21", weight: 116.2 },
    { date: "2023-01-22", weight: 115.3 },
    { date: "2023-01-23", weight: 117.1 },
    { date: "2023-01-24", weight: 116.3 },
    { date: "2023-01-25", weight: 115.6 },
    { date: "2023-01-26", weight: 116.4 },
    { date: "2023-01-27", weight: 116.1 },
    { date: "2023-01-28", weight: 116.7 },
    { date: "2023-01-29", weight: 117.5 },
    { date: "2023-01-30", weight: 117.1 },
    { date: "2023-01-31", weight: 117.2 },
    { date: "2023-02-01", weight: 116.3 },
    { date: "2023-02-02", weight: 116.1 },
    { date: "2023-02-03", weight: 116.1 },
    { date: "2023-02-04", weight: 116.6 },
    { date: "2023-02-05", weight: 117.6 },
    { date: "2023-02-06", weight: 117.5 },
    { date: "2023-02-07", weight: 117.1 },
    { date: "2023-02-08", weight: 116.1 },
    { date: "2023-02-09", weight: 116.1 },
    { date: "2023-02-10", weight: 116.1 },
    { date: "2023-02-11", weight: 115.4 },
    { date: "2023-02-12", weight: 115.6 },
    { date: "2023-02-13", weight: 114.7 },
    { date: "2023-02-14", weight: 113.0 },
    { date: "2023-02-15", weight: 113.6 },
    { date: "2023-02-16", weight: 114.1 },
    { date: "2023-02-17", weight: 113.6 },
    { date: "2023-02-18", weight: 113.8 },
    { date: "2023-02-19", weight: 115.0 },
    { date: "2023-02-20", weight: 113.6 },
    { date: "2023-02-21", weight: 113.1 },
    { date: "2023-02-22", weight: 112.1 },
    { date: "2023-02-23", weight: 111.6 },
    { date: "2023-02-24", weight: 111.4 },
    { date: "2023-02-25", weight: 111.8 },
    { date: "2023-02-26", weight: 112.1 },
    { date: "2023-02-27", weight: 112.0 },
    { date: "2023-02-28", weight: 112.2 },
    { date: "2023-03-01", weight: 111.8 },
    { date: "2023-03-02", weight: 111.8 },
    { date: "2023-03-03", weight: 111.6 },
    { date: "2023-03-04", weight: 112.1 },
    { date: "2023-03-05", weight: 111.6 },
    { date: "2023-03-06", weight: 112.4 },
    { date: "2023-03-07", weight: 110.6 },
    { date: "2023-03-08", weight: 110.6 },
    { date: "2023-03-09", weight: 110.6 },
    { date: "2023-03-10", weight: 110.6 },
    { date: "2023-03-11", weight: 109.8 },
    { date: "2023-03-12", weight: 108.2 },
    { date: "2023-03-13", weight: 107.5 },
    { date: "2023-03-14", weight: 106.8 },
    { date: "2023-03-15", weight: 107.2 },
    { date: "2023-03-16", weight: 107.0 },
    { date: "2023-03-17", weight: 107.0 },
    { date: "2023-03-18", weight: 107.0 },
    { date: "2023-03-19", weight: 107.0 },
    { date: "2023-03-20", weight: 106.7 },
    { date: "2023-03-21", weight: 105.7 },
    { date: "2023-03-22", weight: 106.3 },
    { date: "2023-03-23", weight: 106.0 },
    { date: "2023-03-24", weight: 107.5 },
    { date: "2023-03-25", weight: 108.0 },
    { date: "2023-03-26", weight: 107.8 },
    { date: "2023-03-27", weight: 106.6 },
    { date: "2023-03-28", weight: 105.0 },
    { date: "2023-03-29", weight: 107.1 },
    { date: "2023-03-30", weight: 105.6 },
    { date: "2023-03-31", weight: 106.9 },
    { date: "2023-04-01", weight: 107.5 },
    { date: "2023-04-02", weight: 108.9 },
    { date: "2023-04-03", weight: 108.0 },
    { date: "2023-04-04", weight: 106.7 },
    { date: "2023-04-05", weight: 106.4 },
    { date: "2023-04-06", weight: 105.6 },
    { date: "2023-04-07", weight: 103.7 },
    { date: "2023-04-08", weight: 104.1 },
    { date: "2023-04-09", weight: 104.4 },
    { date: "2023-04-10", weight: 105.5 },
    { date: "2023-04-11", weight: 104.8 },
    { date: "2023-04-12", weight: 103.5 },
    { date: "2023-04-13", weight: 104.8 },
    { date: "2023-04-14", weight: 104.3 },
    { date: "2023-04-15", weight: 103.8 },
    { date: "2023-04-16", weight: 103.6 },
    { date: "2023-04-17", weight: 104.5 },
    { date: "2023-04-18", weight: 103.9 },
    { date: "2023-04-19", weight: 103.1 },
    { date: "2023-04-20", weight: 103.8 },
    { date: "2023-04-21", weight: 103.5 },
    { date: "2023-04-22", weight: 103.9 },
    { date: "2023-04-23", weight: 104.5 },
    { date: "2023-04-24", weight: 105.5 },
    { date: "2023-04-25", weight: 104.7 },
    { date: "2023-04-26", weight: 104.5 },
    { date: "2023-04-27", weight: 103.8 },
    { date: "2023-04-28", weight: 103.1 },
    { date: "2023-04-29", weight: 103.0 },
    { date: "2023-04-30", weight: 104.1 },
    { date: "2023-05-01", weight: 104.0 },
    { date: "2023-05-02", weight: 104.2 },
    { date: "2023-05-03", weight: 105.9 },
    { date: "2023-05-04", weight: 102.9 },
    { date: "2023-05-05", weight: 102.3 },
    { date: "2023-05-06", weight: 102.7 },
    { date: "2023-05-07", weight: 104.7 },
    { date: "2023-05-08", weight: 103.0 },
    { date: "2023-05-09", weight: 103.0 },
    { date: "2023-05-10", weight: 103.8 },
    { date: "2023-05-11", weight: 102.7 },
    { date: "2023-05-12", weight: 103.7 },
    { date: "2023-05-13", weight: 103.0 },
    { date: "2023-05-14", weight: 102.0 },
    { date: "2023-05-15", weight: 101.6 },
    { date: "2023-05-16", weight: 103.3 },
    { date: "2023-05-17", weight: 104.1 },
    { date: "2023-05-18", weight: 102.5 },
    { date: "2023-05-19", weight: 101.8 },
    { date: "2023-05-20", weight: 104.2 },
    { date: "2023-05-21", weight: 103.4 },
    { date: "2023-05-22", weight: 102.9 },
    { date: "2023-05-23", weight: 103.0 },
    { date: "2023-05-24", weight: 104.8 },
    { date: "2023-05-25", weight: 104.0 },
    { date: "2023-05-26", weight: 103.6 },
    { date: "2023-05-27", weight: 104.2 },
    { date: "2023-05-28", weight: 104.5 },
    { date: "2023-05-29", weight: 103.9 },
    { date: "2023-05-30", weight: 104.3 },
    { date: "2023-05-31", weight: 103.6 },
    { date: "2023-06-01", weight: 102.5 },
    { date: "2023-06-02", weight: 102.5 },
    { date: "2023-06-03", weight: 102.5 },
    { date: "2023-06-04", weight: 102.5 },
    { date: "2023-06-05", weight: 105.2 },
    { date: "2023-06-06", weight: 104.7 },
    { date: "2023-06-07", weight: 104.5 },
    { date: "2023-06-08", weight: 106.1 },
    { date: "2023-06-09", weight: 105.6 },
    { date: "2023-06-10", weight: 105.5 },
    { date: "2023-06-11", weight: 106.3 },
    { date: "2023-06-12", weight: 105.1 },
    { date: "2023-06-13", weight: 103.0 },
    { date: "2023-06-14", weight: 103.6 },
    { date: "2023-06-15", weight: 103.5 },
    { date: "2023-06-16", weight: 103.8 },
    { date: "2023-06-17", weight: 104.8 },
    { date: "2023-06-18", weight: 104.0 },
    { date: "2023-06-19", weight: 105.8 },
    { date: "2023-06-20", weight: 104.2 },
    { date: "2023-06-21", weight: 103.0 },
    { date: "2023-06-22", weight: 104.6 },
    { date: "2023-06-23", weight: 104.9 },
    { date: "2023-06-24", weight: 104.6 },
    { date: "2023-06-25", weight: 103.6 },
    { date: "2023-06-26", weight: 104.0 },
    { date: "2023-06-27", weight: 103.9 },
    { date: "2023-06-28", weight: 102.9 },
    { date: "2023-06-29", weight: 103.7 },
    { date: "2023-06-30", weight: 102.5 },
    { date: "2023-07-01", weight: 103.8 },
    { date: "2023-07-02", weight: 105.6 },
    { date: "2023-07-03", weight: 104.9 },
    { date: "2023-07-04", weight: 103.2 },
    { date: "2023-07-05", weight: 101.9 },
    { date: "2023-07-06", weight: 101.6 },
    { date: "2023-07-07", weight: 102.7 },
    { date: "2023-07-08", weight: 100.8 },
    { date: "2023-07-09", weight: 102.2 },
    { date: "2023-07-10", weight: 101.5 },
    { date: "2023-07-11", weight: 101.3 },
    { date: "2023-07-12", weight: 101.2 },
    { date: "2023-07-13", weight: 103.0 },
    { date: "2023-07-14", weight: 104.3 },
    { date: "2023-07-15", weight: 102.7 },
    { date: "2023-07-16", weight: 102.0 },
    { date: "2023-07-17", weight: 103.7 },
    { date: "2023-07-17", weight: 102.0 },
  ]

  const data = raw.map((elem, index) => ({ day: index + 1, ...elem }))

  // Selecionar div para colocar o relatório gráfico dentro
  const wrapper = d3.select("#d3_wrapper")

  // Margens do gráfico
  const margin = { top: 20, right: 20, bottom: 40, left: 40 },
    // Dimensão do gráfico (largura e altura)
    width =
      wrapper.node().getBoundingClientRect().width - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom,
    // Dimensão do gráfico (largura e altura)
    widthWrapper = width + margin.left + margin.right,
    heightWrapper = height + margin.top + margin.bottom

  // Criação da caixa do gráfico
  const svg = wrapper
    .append("svg")
    .attr("width", widthWrapper)
    .attr("height", heightWrapper)

  // Criação e posicionamento do gráfico
  const graphics = svg
    .append("g")
    .attr("class", "graphics")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Definição da escala das linhas
  const x = d3.scaleLinear().range([0, width])
  const y = d3.scaleLinear().range([height, 0])

  // Separação dos valores para escala
  const maxWeight = Math.max(...data.map(({ weight }) => weight)),
    weights = data.map(({ weight }) => maxWeight - weight),
    days = data.map(({ day }) => day)

  // Escala da variação dos dados (menor e maior número)
  x.domain([Math.min(...days), Math.max(...days)])
  y.domain([Math.min(...weights), Math.max(...weights)])

  // No eixo X, adicionar linhas de grade
  graphics
    .append("g")
    .attr("class", "grid")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(x)
        .ticks(Math.ceil(days.length / 10))
        .tickSize(-height)
        .tickFormat("")
    )

  // No eixo Y, adicionar linhas de grade
  graphics
    .append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).ticks().tickSize(-width).tickFormat(""))

  // Adicionar o eixo X
  graphics
    .append("g")
    .attr("class", "domains")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(x)
        .ticks(Math.ceil(days.length / 10))
        .tickFormat((d) => d)
    )

  // Adicionar o eixo Y
  graphics.append("g").attr("class", "domains").call(d3.axisLeft(y))

  // Gerar o caminho das linhas
  graphics
    .append("path")
    .data([data])
    .style("stroke", "var(--third)")
    .attr("class", "line")
    .attr(
      "d",
      // Gerar caminho para a linha
      d3
        .line()
        .x((d) => x(d.day))
        .y((d) => y(maxWeight - d.weight))
    )

  document.getElementById("loading_graphic").style.display = "none"
}

window.addEventListener("load", drawGraphic)
setTimeout(drawGraphic, 2000)
