function drawGraphic() {
  function drawPosition(wrapper, x, y) {
    wrapper
      .append("circle")
      .attr("cx", x)
      .attr("cy", y)
      .attr("r", 1)
      .attr("fill", "var(--texts)")

    wrapper
      .append("text")
      .style("fill", "var(--texts)")
      .style("font-size", "0.25rem")
      .style("text-anchor", x < 75 ? "start" : "end")
      .style("alignment-baseline", y < 75 ? "hanging" : "baseline")
      .attr("x", x < 75 ? x + 2 : x - 2)
      .attr("y", y < 75 ? y + 2 : y - 2)
      .text("(" + x + "," + y + ")")
  }

  if (!d3.select("#d3_grid svg").node()) {
    const wrapper = d3
      .select("#d3_grid")
      .append("svg")
      .attr("width", 400)
      .attr("height", 400)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    for (x = 0; x <= 100; x += 10) {
      function lineStyle(element) {
        element.attr("stroke-width", 1).attr("stroke", "var(--color-line)")
      }

      wrapper
        .append("line")
        .attr("x1", x)
        .attr("y1", 0)
        .attr("x2", x)
        .attr("y2", 100)
        .call(lineStyle)

      wrapper
        .append("line")
        .attr("x1", 0)
        .attr("y1", x)
        .attr("x2", 100)
        .attr("y2", x)
        .call(lineStyle)
    }

    ;[
      [0, 0],
      [100, 0],
      [0, 100],
      [100, 100],
      [50, 50],
    ].forEach((coords) => drawPosition(wrapper, coords[0], coords[1]))

    // Ocultar o icone de carregar
    d3.select("#d3_grid #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_fill_stroke svg").node()) {
    const svg = d3
      .select("#d3_fill_stroke")
      .append("svg")
      .attr("width", 480)
      .attr("height", 120)
      .attr("viewBox", "0 0 120 30")
      .attr("overflow", "visible")

    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 30)
      .attr("height", 30)
      .attr("fill", "var(--color-line)")

    svg
      .append("rect")
      .attr("x", 45)
      .attr("y", 0)
      .attr("width", 30)
      .attr("height", 30)
      .attr("fill", "none")
      .attr("stroke", "var(--highlight)")
      .attr("stroke-width", 5)
      .attr("stroke-linejoin", "round")

    svg
      .append("rect")
      .attr("x", 90)
      .attr("y", 0)
      .attr("width", 30)
      .attr("height", 30)
      .attr("fill", "var(--color-line)")
      .attr("stroke", "var(--highlight)")
      .attr("stroke-width", 5)
      .attr("stroke-linejoin", "round")

    // Desenhar pontos de enteresse
    drawPosition(svg, 0, 0)
    drawPosition(svg, 45, 0)
    drawPosition(svg, 90, 0)

    // Ocultar o icone de carregar
    d3.select("#d3_fill_stroke #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_rect svg").node()) {
    // Gerar forma de retângulo
    const svg = d3
      .select("#d3_rect")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    svg
      // Adicionar retângulo no elemento
      .append("rect")
      // Definição da posição do retângulo
      .attr("x", 5)
      .attr("y", 5)
      // Definição das dimensões do retângulo
      .attr("width", 95)
      .attr("height", 85)
      // Preencher o conteúdo
      .attr("fill", "var(--color-line)")

    // Desenhar pontos de enteresse
    drawPosition(svg, 5, 5)
    drawPosition(svg, 100, 90)

    // Ocultar o icone de carregar
    d3.select("#d3_rect #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_circle svg").node()) {
    // Gerar forma de círculo
    const svg = d3
      .select("#d3_circle")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    svg
      // Adicionar círculo
      .append("circle")
      // Definição do centro do círculo
      .attr("cx", 50)
      .attr("cy", 50)
      // Definição do raio do círculo
      .attr("r", 45)
      // Preencher o conteúdo
      .attr("fill", "var(--color-line)")

    // Desenhar pontos de enteresse
    drawPosition(svg, 50, 50)
    drawPosition(svg, 95, 50)
    drawPosition(svg, 50, 95)

    // Ocultar o icone de carregar
    d3.select("#d3_circle #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_ellipse svg").node()) {
    // Gerar forma de círculo
    const svg = d3
      .select("#d3_ellipse")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    svg
      // Adicionar elipse
      .append("ellipse")
      // Definição do centro do círculo
      .attr("cx", 50)
      .attr("cy", 50)
      // Definição do raio do círculo
      .attr("rx", 45)
      .attr("ry", 30)
      // Preencher o conteúdo
      .attr("fill", "var(--color-line)")

    // Desenhar pontos de enteresse
    drawPosition(svg, 50, 50)
    drawPosition(svg, 95, 50)
    drawPosition(svg, 50, 80)

    // Ocultar o icone de carregar
    d3.select("#d3_ellipse #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_line svg").node()) {
    // Gerar forma de círculo
    const svg = d3
      .select("#d3_line")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    svg
      // Adicionar elipse
      .append("line")
      // Posicionamento inicial
      .attr("x1", 5)
      .attr("y1", 5)
      // Posicionamento final
      .attr("x2", 90)
      .attr("y2", 90)
      // Definição da cor de linha
      .attr("stroke", "var(--highlight)")
      // Definição grossura da linha
      .attr("stroke-width", 3)

    // Desenhar pontos de enteresse
    drawPosition(svg, 5, 5)
    drawPosition(svg, 90, 90)

    // Ocultar o icone de carregar
    d3.select("#d3_line #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_polyline svg").node()) {
    // Gerar forma de polilinha
    const svg = d3
      .select("#d3_polyline")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    svg
      // Adicionar polilinha
      .append("polyline")
      //
      .attr("points", "0,0 40,20 40,75 75,40 100,100")
      // Preencher o conteúdo
      .attr("fill", "var(--color-line)")
      // Definição da cor de linha
      .attr("stroke", "var(--highlight)")
      // Definição grossura da linha
      .attr("stroke-width", 3)
      // Definição do comportamento das junções
      .attr("stroke-linejoin", "round")

    // Desenhar pontos de enteresse
    drawPosition(svg, 0, 0)
    drawPosition(svg, 40, 20)
    drawPosition(svg, 40, 75)
    drawPosition(svg, 75, 40)
    drawPosition(svg, 100, 100)

    // Ocultar o icone de carregar
    d3.select("#d3_polyline #loading_graphic").style("display", "none")
  }

  if (!d3.select("#d3_path svg").node()) {
    // Gerar forma de polilinha
    const svg = d3
      .select("#d3_path")
      .append("svg")
      .attr("width", 300)
      .attr("height", 300)
      .attr("viewBox", "0 0 100 100")
      .attr("overflow", "visible")

    svg
      .append("path")
      // Definição do caminho
      .attr(
        "d",
        `M 50,0
        L 62,40
        L 100,40
        L 66,62
        L 80,100
        L 50,76
        L 20,100
        L 32,62
        L 0,40
        L 40,40
        Z`
      )
      // Preencher o conteúdo
      .attr("fill", "var(--color-line)")

    // Desenhar pontos de enteresse
    drawPosition(svg, 50, 0)
    drawPosition(svg, 100, 40)
    drawPosition(svg, 80, 100)
    drawPosition(svg, 20, 100)
    drawPosition(svg, 0, 40)

    // Ocultar o icone de carregar
    d3.select("#d3_path #loading_graphic").style("display", "none")
  }
}

// Chamada da função para desenhar gráfico
window.addEventListener("load", drawGraphic)
// Caso o evento load não seja acionado rodar depois de 2 segundos
setTimeout(
  () => document.querySelector("#d3_wrapper svg") || drawGraphic(),
  2000
)
