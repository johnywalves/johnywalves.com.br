---
date: 2022-11-02 12:34:02 -0300
title: Análise dos personagens Marvel
description: Exploração de fonte de dados dos personagens nos quadrinhos Marvel
featuredImage: ./featured/speech_bubble-1.jpg
coverImage: /figures/planet_night-1.jpg
category: D3
tags:
  - Visualização
  - Gráficos
  - SVG
extras:
  - d3.v7.6.1.min.js
  - graphic-marvel-character.js
published: false
cheatsheet: false
---

Dando sequência na pesquisa e documentação na versão 7 da biblioteca D3

> A bilioteca [D3.js - Data-Driven Documents](https://d3js.org/) é uma ferramenta para manipulação de documentos baseada em dados, com uso de HTML, CSS e SVG

Buscando no Kaggle uma base de dados interessante encontrei um pequeno resumo da apresentação dos personagens da Marvel nos quadrinhos [Kaggle - Marvel Chracters](https://www.kaggle.com/datasets/syedasimalishah/marvel-chracters)

## Transformação de dados

O arquivo se encontra em csv, o D3 possui uma função para importar os dados assim, não vamos usar

Para deixar o processo mais leve, vamos mandar os dados para precisar de menos processamento pela camada de visualização, com a agregação de dados

```python
# Importação das bilbiotecas
import json
import pandas as pd

# Declarar função para extrair e agregar a contagem por valor único da columa
def get_data(field):
    # Agregar e contar
    counted = df_characters.groupby(field).name.nunique()
    # Converter para JSON
    converted = json.loads(counted.to_json())
    # Exportar por nome e contagem
    return [{"name": k, "count": v} for k, v in converted.items()]

# Carregar os dados direto do CSV
df_characters = pd.read_csv('marvel_characters.csv')

# Gerar objeto com as informações agregadas
output = {}
output['eye'] = get_data('EYE')
output['hair'] = get_data('HAIR')
output['sex'] = get_data('SEX')
output['id'] = get_data('ID')
output['alive'] = get_data('ALIVE')

# Transformar para JSON e salvar os valores
json_object = json.dumps(output)
with open("data.json", "w") as outfile:
    outfile.write(json_object)
```

Salvando os valores agregados no arquivo `data.json` preparados para visualização

## Função de geração de gráficos

Vamos gerar 5 gráficos da mesma manneira

```javascript
function drawPie(data, selector_wrapper) {
  // Ordenar os valores por valor da contagem
  const sorted = data.sort((a, b) => b.count - a.count)

  // Selecionar div para colocar o relatório gráfico dentro
  const wrapper = d3.select(selector_wrapper)

  // Altura da legenda
  const legendWidth = 200,
    // Margens do gráfico
    margin = { top: 40, right: 20, bottom: 40, left: 20 },
    // Dimensão do gráfico (largura e altura)
    width =
      wrapper.node().getBoundingClientRect().width -
      margin.left -
      margin.right -
      legendWidth,
    height = 450 - margin.top - margin.bottom,
    // Cálculo do raio do gráfico
    radius = Math.min(width, height) / 2,
    // Definição do esquema de cores
    color = d3.scaleOrdinal(d3.schemeTableau10),
    // Raio do círculo da legenda
    legendRadius = 12,
    // Quantidade de elementos na legenda
    legendCount = 10,
    // Distribuição das legendas
    legendSpace = height / legendCount

  // Criação da caixa do gráfico
  const svg = wrapper
    .append("svg")
    .attr("width", width + margin.left + margin.right + legendWidth)
    .attr("height", height + margin.top + margin.bottom)

  // Criação da caixa do gráfico
  const content = svg
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (width / 2 + margin.left) +
        "," +
        (height / 2 + margin.top) +
        ")"
    )

  const pie = d3.pie().value((d) => d.count)

  // Geração dos arcos do gráfico
  const arc = d3.arc().innerRadius(0).outerRadius(radius)

  // Generate groups
  const arcs = content
    .selectAll("arc")
    .data(pie(sorted))
    .enter()
    .append("g")
    .attr("class", "arc")

  // Desenha caminho dos arcos
  arcs
    .append("path")
    .attr("fill", (_, i) => color(i))
    .attr("d", arc)
    .attr("stroke", "var(--background)")
    .style("stroke-width", 1)

  // Criação e posicionamento das legendas
  const legends = svg
    .append("g")
    .attr("class", "legends")
    .attr(
      "transform",
      "translate(" +
        (width + margin.left + margin.right) +
        ", " +
        margin.top +
        ")"
    )

  // Geração da legenda
  sorted.slice(0, legendCount).forEach(({ name, count }, index) => {
    // Gerar círculo com a indicação das cores
    legends
      .append("circle")
      .attr("cx", legendRadius)
      .attr("cy", index * legendSpace + legendRadius)
      .attr("r", legendRadius)
      .style("fill", color(index))
      .attr("stroke", "currentColor")
      .attr("stroke-width", 1)

    // Gerar texto da legenda
    legends
      .append("text")
      .attr("x", legendRadius * 2 + 5)
      .attr("y", index * legendSpace + legendRadius + 5)
      .attr("fill", "currentColor")
      .text(name + " (" + count + ")")
  })
}
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

## Cor dos olhos

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

```javascript
const data_eye = [
  { name: "Amber", count: 10 },
  { name: "Black Eyeballs", count: 3 },
  { name: "Black", count: 555 },
  { name: "Blue", count: 1962 },
  { name: "Brown", count: 1924 },
  { name: "Compound", count: 1 },
  { name: "Gold", count: 14 },
  { name: "Green", count: 613 },
  { name: "Grey", count: 95 },
  { name: "Hazel", count: 76 },
  { name: "Magenta", count: 2 },
  { name: "Multiple", count: 7 },
  { name: "No Eyes", count: 7 },
  { name: "One Eye", count: 21 },
  { name: "Orange", count: 25 },
  { name: "Pink", count: 21 },
  { name: "Purple", count: 31 },
  { name: "Red", count: 508 },
  { name: "Silver", count: 12 },
  { name: "Variable", count: 49 },
  { name: "Violet", count: 11 },
  { name: "White", count: 400 },
  { name: "Yellow Eyeballs", count: 6 },
  { name: "Yellow", count: 256 },
]

drawPie(data_eye, "#d3_wrapper_eye")
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

<p class="title-asset">Proporção da cor dos olhos</p>

<div id="d3_wrapper_eye" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

## Cor dos cabelos

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

```javascript
const data_hair = [
  { name: "Auburn", count: 78 },
  { name: "Bald", count: 838 },
  { name: "Black", count: 3755 },
  { name: "Blond", count: 1582 },
  { name: "Blue", count: 56 },
  { name: "Bronze", count: 1 },
  { name: "Brown", count: 2339 },
  { name: "Dyed", count: 1 },
  { name: "Gold", count: 8 },
  { name: "Green", count: 117 },
  { name: "Grey", count: 531 },
  { name: "Light Brown", count: 6 },
  { name: "Magenta", count: 5 },
  { name: "No", count: 1176 },
  { name: "Orange", count: 43 },
  { name: "Orange-brown", count: 3 },
  { name: "Pink", count: 31 },
  { name: "Purple", count: 47 },
  { name: "Red", count: 620 },
  { name: "Reddish Blond", count: 6 },
  { name: "Silver", count: 16 },
  { name: "Strawberry Blond", count: 47 },
  { name: "Variable", count: 32 },
  { name: "White", count: 754 },
  { name: "Yellow", count: 20 },
]

drawPie(data_hair, "#d3_wrapper_hair")
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit

<p class="title-asset">Proporção da cor dos cabelos</p>

<div id="d3_wrapper_hair" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet.

## Gênero dos personagens

Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

```javascript
const data_sex = [
  { name: "Agender", count: 45 },
  { name: "Female", count: 3837 },
  { name: "Genderfluid", count: 2 },
  { name: "Male", count: 11638 },
]

drawPie(data_sex, "#d3_wrapper_sex")
```

Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

<div id="d3_wrapper_sex" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet

## Relação da identidade

Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

```javascript
const data_id = [
  { name: "Known to Authorities Identity", count: 15 },
  { name: "No Dual Identity", count: 1788 },
  { name: "Public Identity", count: 4528 },
  { name: "Secret Identity", count: 6275 },
]

drawPie(data_id, "#d3_wrapper_id")
```

Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

<div id="d3_wrapper_id" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

## Personagem de quadrinho não morre?

Lorem ipsum dolor sit amet, consectetur adipiscing elit

```javascript
const data_alive = [
  { name: "Deceased Characters", count: 3765 },
  { name: "Living Characters", count: 12608 },
]

drawPie(data_alive, "#d3_wrapper_alive")
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

<div id="d3_wrapper_alive" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor volutpat imperdiet. Mauris faucibus leo id vehicula sollicitudin. Integer nibh lacus, egestas eu dui quis, faucibus pellentesque mauris

## Referências

[Kaggle - Marvel Chracters](https://www.kaggle.com/datasets/syedasimalishah/marvel-chracters)
