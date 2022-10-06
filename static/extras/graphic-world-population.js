window.addEventListener("load", function () {
    var datas = [
        {
            "continent": "Africa",
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
    var color = d3.scaleOrdinal(d3.schemeSet1);

    // Selecionar Div para colocar o relatório gráfico dentro
    var wrapper = d3.select("#d3_wrapper")

    // Definição de dimensões
    var factor = 1000 * 1000 * 1000,
        legendHeight = 60,
        legendRadius = 12,
        margin = { top: 20, right: 20, bottom: 30 + legendHeight, left: 90 },
        width = wrapper.node().getBoundingClientRect().width - margin.left - margin.right,
        height = 650 - margin.top - margin.bottom,
        legendSpace = width / datas.length;

    // Definição da escala das linhas
    var x = d3.scaleLinear().range([0, width])
    var y = d3.scaleLinear().range([height, 0])

    // Criação da caixa do gráfico
    var svg = wrapper
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")

    //  Gerar agrupamento de legendas
    var legends = svg.append("g")
        .attr("class", "legends")
        .attr("transform", "translate(0, " + height + ")")

    // Escala da variação dos dados
    x.domain([1970, 2022]);
    y.domain([0, 5000000000 / factor]);

    // No eixo X Adicionar linhas de grade 
    svg.append("g")
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(
            d3.axisBottom(x).ticks(9)
                .tickSize(-height)
                .tickFormat("")
        )

    // No eixo Y adicionar linhas de grade 
    svg.append("g")
        .attr("class", "grid")
        .call(
            d3.axisLeft(y).ticks(8)
                .tickSize(-width)
                .tickFormat("")
        )

    // Adicionar o eixo X
    svg.append("g")
        .attr("class", "domains")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(function (d) { return d }));

    // Adicionar o eixo Y
    svg.append("g")
        .attr("class", "domains")
        .call(d3.axisLeft(y));

    // Geração das linhas
    datas.forEach(function ({ continent, growth }, index) {
        // Gerar o caminho das linhas
        svg.append("path")
            .data([growth])
            .style("stroke", color(index))
            .attr("class", "line")
            .attr("d",
                // Gerar caminho para a linha 
                d3.line()
                    .x(function (d) { return x(d.year); })
                    .y(function (d) { return y(d.pop / factor); })
            );

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
            .text(continent);
    });

    document.getElementById("loading_graphic").style.display = 'none';
});
