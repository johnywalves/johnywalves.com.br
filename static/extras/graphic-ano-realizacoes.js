function drawGraphic() {
    if (document.querySelector("#d3_wrapper svg")) {
        return true
    }

    const data = [
        { "day": 1, "date": "2022-10-17", "weight": 111.0 },
        { "day": 2, "date": "2022-10-18", "weight": 110.7 },
        { "day": 3, "date": "2022-10-19", "weight": 110.7 },
        { "day": 4, "date": "2022-10-20", "weight": 110.2 },
        { "day": 5, "date": "2022-10-21", "weight": 110.1 },
        { "day": 6, "date": "2022-10-22", "weight": 110.4 },
        { "day": 7, "date": "2022-10-23", "weight": 110.8 },
        { "day": 8, "date": "2022-10-24", "weight": 111.8 },
        { "day": 9, "date": "2022-10-25", "weight": 110.4 },
        { "day": 10, "date": "2022-10-26", "weight": 110.1 },
        { "day": 11, "date": "2022-10-27", "weight": 110.1 }
    ]

    // Selecionar div para colocar o relatório gráfico dentro
    const wrapper = d3.select("#d3_wrapper")

    // Margens do gráfico
    const margin = { top: 20, right: 20, bottom: 40, left: 40 },
        // Dimensão do gráfico (largura e altura)
        width = wrapper.node().getBoundingClientRect().width - margin.left - margin.right,
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
    const graphics = svg.append("g")
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
    x.domain([Math.min(...days), Math.max(...days)]);
    y.domain([Math.min(...weights), Math.max(...weights)]);

    // No eixo X, adicionar linhas de grade 
    graphics.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(
            d3.axisBottom(x).ticks(days.length)
                .tickSize(-height)
                .tickFormat("")
        )

    // No eixo Y, adicionar linhas de grade 
    graphics.append("g")
        .attr("class", "grid")
        .call(
            d3.axisLeft(y).ticks()
                .tickSize(-width)
                .tickFormat("")
        )

    // Adicionar o eixo X
    graphics.append("g")
        .attr("class", "domains")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(days.length).tickFormat(d => d))

    // Adicionar o eixo Y
    graphics.append("g")
        .attr("class", "domains")
        .call(d3.axisLeft(y))

    // Gerar o caminho das linhas
    graphics.append("path")
        .data([data])
        .style("stroke", "var(--third)")
        .attr("class", "line")
        .attr("d",
            // Gerar caminho para a linha 
            d3.line()
                .x(d => x(d.day))
                .y(d => y(maxWeight - d.weight))
        )

    document.getElementById("loading_graphic").style.display = 'none'
}

window.addEventListener("load", drawGraphic);
setTimeout(drawGraphic, 2000);