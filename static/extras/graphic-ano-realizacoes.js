function drawGraphic() {
  if (document.querySelector("#d3_wrapper svg")) {
    return true
  }

  const data = [
    { day: 1, date: "2022-10-17", weight: 111.0 },
    { day: 2, date: "2022-10-18", weight: 110.7 },
    { day: 3, date: "2022-10-19", weight: 110.7 },
    { day: 4, date: "2022-10-20", weight: 110.2 },
    { day: 5, date: "2022-10-21", weight: 110.1 },
    { day: 6, date: "2022-10-22", weight: 110.4 },
    { day: 7, date: "2022-10-23", weight: 110.8 },
    { day: 8, date: "2022-10-24", weight: 111.8 },
    { day: 9, date: "2022-10-25", weight: 110.4 },
    { day: 10, date: "2022-10-26", weight: 110.1 },
    { day: 11, date: "2022-10-27", weight: 110.1 },
    { day: 12, date: "2022-10-28", weight: 110.8 },
    { day: 13, date: "2022-10-29", weight: 109.7 },
    { day: 14, date: "2022-10-30", weight: 109.7 },
    { day: 15, date: "2022-10-31", weight: 109.7 },
    { day: 16, date: "2022-11-01", weight: 109.3 },
    { day: 17, date: "2022-11-02", weight: 108.8 },
    { day: 18, date: "2022-11-03", weight: 110.7 },
    { day: 19, date: "2022-11-04", weight: 109.7 },
    { day: 20, date: "2022-11-05", weight: 109.7 },
    { day: 21, date: "2022-11-06", weight: 110.4 },
    { day: 22, date: "2022-11-07", weight: 111.2 },
    { day: 23, date: "2022-11-08", weight: 112.8 },
    { day: 24, date: "2022-11-09", weight: 114.7 },
    { day: 25, date: "2022-11-10", weight: 114.3 },
    { day: 26, date: "2022-11-11", weight: 113.5 },
    { day: 27, date: "2022-11-12", weight: 112.2 },
    { day: 28, date: "2022-11-13", weight: 112.5 },
    { day: 29, date: "2022-11-14", weight: 113.9 },
    { day: 30, date: "2022-11-15", weight: 115.8 },
    { day: 31, date: "2022-11-16", weight: 113.8 },
    { day: 32, date: "2022-11-17", weight: 113.2 },
    { day: 33, date: "2022-11-18", weight: 112.5 },
    { day: 34, date: "2022-11-19", weight: 112.8 },
    { day: 35, date: "2022-11-20", weight: 113.1 },
    { day: 36, date: "2022-11-21", weight: 113.4 },
    { day: 37, date: "2022-11-22", weight: 112.8 },
    { day: 38, date: "2022-11-23", weight: 112.9 },
    { day: 39, date: "2022-11-24", weight: 114.8 },
    { day: 40, date: "2022-11-25", weight: 115.7 },
    { day: 41, date: "2022-11-26", weight: 116.5 },
    { day: 42, date: "2022-11-27", weight: 117.2 },
    { day: 43, date: "2022-11-28", weight: 116.3 },
    { day: 44, date: "2022-11-29", weight: 115.1 },
    { day: 45, date: "2022-11-30", weight: 115.5 },
    { day: 46, date: "2022-12-01", weight: 116.0 },
    { day: 47, date: "2022-12-02", weight: 116.4 },
    { day: 48, date: "2022-12-03", weight: 115.1 },
    { day: 49, date: "2022-12-04", weight: 115.5 },
    { day: 50, date: "2022-12-05", weight: 115.6 },
    { day: 51, date: "2022-12-06", weight: 114.2 },
    { day: 52, date: "2022-12-07", weight: 114.7 },
    { day: 53, date: "2022-12-08", weight: 115.5 },
    { day: 54, date: "2022-12-09", weight: 115.4 },
    { day: 55, date: "2022-12-10", weight: 115.6 },
    { day: 56, date: "2022-12-11", weight: 116.1 },
    { day: 57, date: "2022-12-12", weight: 115.4 },
    { day: 58, date: "2022-12-13", weight: 114.6 },
    { day: 59, date: "2022-12-14", weight: 114.2 },
    { day: 60, date: "2022-12-15", weight: 114.2 },
    { day: 61, date: "2022-12-15", weight: 114.1 },
  ]

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
