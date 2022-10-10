function drawGraphic() {
    const data = [
        {
            "continent": "África",
            "growth": [
                { "year": 2022, "pop": 1426730932 },
                { "year": 2020, "pop": 1360671810 },
                { "year": 2015, "pop": 1201102442 },
                { "year": 2010, "pop": 1055228072 },
                { "year": 2000, "pop": 818946032 },
                { "year": 1990, "pop": 638150629 },
                { "year": 1980, "pop": 481536377 },
                { "year": 1970, "pop": 365444348 }
            ]
        },
        {
            "continent": "América",
            "growth": [
                { "year": 2022, "pop": 1037112744 },
                { "year": 2020, "pop": 1025766636 },
                { "year": 2015, "pop": 983518246 },
                { "year": 2010, "pop": 935798901 },
                { "year": 2000, "pop": 835703866 },
                { "year": 1990, "pop": 718412840 },
                { "year": 1980, "pop": 610082367 },
                { "year": 1970, "pop": 508381762 }
            ]
        },
        {
            "continent": "Ásia",
            "growth": [
                { "year": 2022, "pop": 4721383274 },
                { "year": 2020, "pop": 4663086535 },
                { "year": 2015, "pop": 4458250182 },
                { "year": 2010, "pop": 4220041327 },
                { "year": 2000, "pop": 3735089604 },
                { "year": 1990, "pop": 3210563577 },
                { "year": 1980, "pop": 2635334228 },
                { "year": 1970, "pop": 2144906290 }
            ]
        },
        {
            "continent": "Europa",
            "growth": [
                { "year": 2022, "pop": 743147538 },
                { "year": 2020, "pop": 745792196 },
                { "year": 2015, "pop": 741535608 },
                { "year": 2010, "pop": 735613934 },
                { "year": 2000, "pop": 726093423 },
                { "year": 1990, "pop": 720320797 },
                { "year": 1980, "pop": 692527159 },
                { "year": 1970, "pop": 655923991 }
            ]
        },
        {
            "continent": "Oceânia",
            "growth": [
                { "year": 2022, "pop": 45038554 },
                { "year": 2020, "pop": 43933426 },
                { "year": 2015, "pop": 40403283 },
                { "year": 2010, "pop": 37102764 },
                { "year": 2000, "pop": 31222778 },
                { "year": 1990, "pop": 26743822 },
                { "year": 1980, "pop": 22920240 },
                { "year": 1970, "pop": 19480270 }
            ]
        }
    ]

    // Selecionar a escala de cores
    const color = d3.scaleOrdinal(d3.schemeSet1);

    // Selecionar div para colocar o relatório gráfico dentro
    const wrapper = d3.select("#d3_wrapper")

    // Definição de escala dos números
    const factor = 1000 * 1000 * 1000,
        // Altura da legenda
        legendHeight = 40,
        // Raio do círculo da legenda
        legendRadius = 12,
        // Margens do gráfico
        margin = { top: 20, right: 20, bottom: 40 + legendHeight, left: 40 },
        // Dimensão do gráfico (largura e altura)
        width = wrapper.node().getBoundingClientRect().width - margin.left - margin.right,
        height = 650 - margin.top - margin.bottom,
        // Dimensão do gráfico (largura e altura)
        widthWrapper = width + margin.left + margin.right,
        heightWrapper = height + margin.top + margin.bottom,
        // Distribuição das legendas  
        legendSpace = width / data.length

    // Criação da caixa do gráfico
    const svg = wrapper
        .append("svg")
        .attr("width", widthWrapper)
        .attr("height", heightWrapper)

    // Criação e posicionamento do gráfico
    const graphics = svg.append("g")
        .attr("class", "graphics")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // Criação e posicionamento das legendas
    const legends = svg.append("g")
        .attr("class", "legends")
        .attr("transform", "translate(" + margin.left + ", " + (heightWrapper - legendHeight - 20) + ")")

    // Definição da escala das linhas
    const x = d3.scaleLinear().range([0, width])
    const y = d3.scaleLinear().range([height, 0])

    // Escala da variação dos dados (menor e maior número)
    const years = data[0].growth.map(({ year }) => year)
    x.domain([Math.min(...years), Math.max(...years)]);
    y.domain([0, 5])

    // No eixo X, adicionar linhas de grade 
    graphics.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(
            d3.axisBottom(x).ticks()
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
        .call(d3.axisBottom(x).tickFormat(d => d))

    // Adicionar o eixo Y
    graphics.append("g")
        .attr("class", "domains")
        .call(d3.axisLeft(y))

    // Geração das linhas
    data.forEach(({ continent, growth }, index) => {
        // Gerar o caminho das linhas
        graphics.append("path")
            .data([growth])
            .style("stroke", color(index))
            .attr("class", "line")
            .attr("d",
                // Gerar caminho para a linha 
                d3.line()
                    .x(d => x(d.year))
                    .y(d => y(d.pop / factor))
            )
    });

    // Geração da legenda
    data.forEach(({ continent, growth }, index) => {
        // Gerar círculo com a indicação das cores
        legends.append("circle")
            .attr("cx", index * legendSpace + legendRadius)
            .attr("cy", legendHeight - legendRadius)
            .attr("r", legendRadius)
            .style("fill", color(index))
            .attr("stroke-width", 2)
            .attr("stroke", "currentColor")

        // Gerar texto da legenda
        legends.append("text")
            .attr("x", index * legendSpace + legendRadius + 20)
            .attr("y", legendHeight - legendRadius / 2)
            .attr("fill", "currentColor")
            .text(continent)
    })

    document.getElementById("loading_graphic").style.display = 'none'
}

window.addEventListener("load", drawGraphic);