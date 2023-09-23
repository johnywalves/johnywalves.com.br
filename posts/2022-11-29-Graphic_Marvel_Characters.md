---
date: 2022-11-29 12:34:02 -0300
title: Análise dos personagens Marvel
description: Exploração de fonte de dados dos personagens nos quadrinhos Marvel
featuredImage: ./featured/speech_bubble-1.jpg
coverImage: /figures/speech_bubble-1.jpg
category: D3
tags:
  - Visualização
  - Gráficos
  - SVG
extras:
  - d3.v7.8.4.min.js
  - graphic-marvel-character.js
published: true
cheatsheet: false
---

Dando sequência na pesquisa e documentação na versão 7 da biblioteca D3

> A biblioteca [D3.js - Data-Driven Documents](https://d3js.org/) é uma ferramenta para manipulação de documentos baseada em dados, com uso de HTML, CSS e SVG

Buscando no Kaggle uma base de dados interessante encontrei um pequeno resumo da apresentação dos personagens da Marvel nos quadrinhos [Kaggle - Marvel Chracters](https://www.kaggle.com/datasets/syedasimalishah/marvel-chracters)

## Transformação de dados

O arquivo se encontra em Comma Separated Value (CSV), D3 possui ferramentas para importação de dados neste formato, focando na camada de visualização vamos deixar o processo mais leve, estruturando os dados com o uso a agregação de dados

Para realizar a agregação de dados usamos um trecho de código de Python

```python
# Importação das bibliotecas
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

Vamos gerar cinco gráficos da mesma maneira, gráficos de pizza com apresentação de proporcionalidade

Criamos uma função para realizar a operação, no trecho a abaixo cada etapa está comentada para facilitar a compreenção

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
    legendSpace = height / legendCount,
    // Soma das contagens
    totalCount = sorted.reduce((p, c) => p + c.count, 0)

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
      .text(
        name +
          " (" +
          count +
          " - " +
          Math.floor((count / totalCount) * 100) +
          "%)"
      )
  })
}
```

Com os dados a agrupados e a função para geração pronta, vamos para os gráficos

## Cor dos olhos

O primeiro campo escolhido foi a cor dos olhos

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

Podemos observar que alguns não possuem olhos, como outros uma cor uniforme para todo o globo ocular, como o Remy LeBeau (Gambit) com o globo todo preto

<p class="center bold">Proporção da cor dos olhos</p>

<div id="d3_wrapper_eye" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Olhos azuis e marrons não a grande maioria, até ai sem grande surpresas

## Cor dos cabelos

Sobre a cor dos cabelos, os personagens mais antigos tinham alta limitação de cores e resolução na gráfica que limitava muito as escolhas, como estamos falando da cultura ocidental cores diferentes não deveria ser comum

Nos dados organizados já coisas diferentes como _Auburn_ que se traduz como ruivo, sendo diferente de vermelho

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

No gráfico podemos ver a proporção

<p class="center bold">Proporção da cor dos cabelos</p>

<div id="d3_wrapper_hair" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Sem grandes surpresas que quase a metade possui cabelos entre o preto (Black) e o marrom (Brown), com 13% loiros (Blond) e 6% de carecas (No)

## Gênero dos personagens

Gênero, vale destacar que é diferente de orientação, aqui vão se apresentar

```javascript
const data_sex = [
  { name: "Agender", count: 45 },
  { name: "Female", count: 3837 },
  { name: "Genderfluid", count: 2 },
  { name: "Male", count: 11638 },
]

drawPie(data_sex, "#d3_wrapper_sex")
```

Como podemos ver tem dois personagens de gênero fluído, [Xavin](https://pt.wikipedia.org/wiki/Xavin) (da raça dos Skulls) e [Loki](<https://pt.wikipedia.org/wiki/Loki_(Marvel_Comics)>), ambos personagens ligados a capacidade de mudar de forma, que acredito não ser coincidência

<p class="center bold">Proporção dos gêneros</p>

<div id="d3_wrapper_sex" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Como podemos observar 74% dos personagens são masculinos, o público alvo das publicações

Para entender melhor essa distribuição geramos uma visualização com as primeiras aparições dos personagens por gênero

<details>
  <summary>Visualizar geração do gráfico de contagens por gêneros e ano</summary>

Geração da fonte de dados por agrupamento com Python

```python
# Importação das bibliotecas
import json
import pandas as pd

# Carregar os dados direto do CSV
df_characters = pd.read_csv('marvel_characters.csv')

# Filtrar somente generos binários
df_characters = df_characters[(df_characters.SEX == "Female Characters") | (df_characters.SEX == "Male Characters")]

# Definir ponto de contagem
df_characters['id'] = df_characters.index

# Contar elementos para ano e gênero
df_year_gender = df_characters.groupby(['Year', 'SEX']).id.count().rename("Count").reset_index(name='Count')
df_year_gender.Year = df_year_gender.Year.astype(int)

# Exportar por ano, genero e contagem
output = {}
output["female_list"] = [{"year": r.Year, "count": r.Count} for i, r in df_year_gender[df_year_gender.SEX == "Female Characters"].iterrows()]
output["male_list"] = [{"year": r.Year, "count": r.Count} for i, r in df_year_gender[df_year_gender.SEX == "Male Characters"].iterrows()]

# Transformar para JSON e salvar os valores
json_object = json.dumps(output)
with open("year_genre.json", "w") as outfile:
    outfile.write(json_object)
```

Fonte de dados gerada com separação por gênero

```javascript
const data_yearsex = {
  female_list: [
    { year: 1939, count: 10 },
    { year: 1940, count: 33 },
    { year: 1941, count: 15 },
    { year: 1942, count: 14 },
    { year: 1943, count: 13 },
    { year: 1944, count: 12 },
    { year: 1945, count: 12 },
    { year: 1946, count: 12 },
    { year: 1947, count: 13 },
    { year: 1948, count: 14 },
    { year: 1949, count: 6 },
    { year: 1950, count: 3 },
    { year: 1951, count: 9 },
    { year: 1952, count: 5 },
    { year: 1953, count: 10 },
    { year: 1954, count: 19 },
    { year: 1955, count: 4 },
    { year: 1956, count: 1 },
    { year: 1958, count: 1 },
    { year: 1960, count: 2 },
    { year: 1961, count: 5 },
    { year: 1962, count: 13 },
    { year: 1963, count: 25 },
    { year: 1964, count: 23 },
    { year: 1965, count: 21 },
    { year: 1966, count: 19 },
    { year: 1967, count: 10 },
    { year: 1968, count: 18 },
    { year: 1969, count: 17 },
    { year: 1970, count: 17 },
    { year: 1971, count: 16 },
    { year: 1972, count: 34 },
    { year: 1973, count: 50 },
    { year: 1974, count: 50 },
    { year: 1975, count: 66 },
    { year: 1976, count: 57 },
    { year: 1977, count: 54 },
    { year: 1978, count: 32 },
    { year: 1979, count: 61 },
    { year: 1980, count: 60 },
    { year: 1981, count: 58 },
    { year: 1982, count: 52 },
    { year: 1983, count: 65 },
    { year: 1984, count: 61 },
    { year: 1985, count: 69 },
    { year: 1986, count: 66 },
    { year: 1987, count: 45 },
    { year: 1988, count: 81 },
    { year: 1989, count: 71 },
    { year: 1990, count: 92 },
    { year: 1991, count: 92 },
    { year: 1992, count: 118 },
    { year: 1993, count: 125 },
    { year: 1994, count: 117 },
    { year: 1995, count: 79 },
    { year: 1996, count: 101 },
    { year: 1997, count: 91 },
    { year: 1998, count: 76 },
    { year: 1999, count: 72 },
    { year: 2000, count: 87 },
    { year: 2001, count: 73 },
    { year: 2002, count: 85 },
    { year: 2003, count: 84 },
    { year: 2004, count: 108 },
    { year: 2005, count: 112 },
    { year: 2006, count: 105 },
    { year: 2007, count: 82 },
    { year: 2008, count: 101 },
    { year: 2009, count: 85 },
    { year: 2010, count: 110 },
    { year: 2011, count: 99 },
    { year: 2012, count: 56 },
    { year: 2013, count: 54 },
  ],
  male_list: [
    { year: 1939, count: 56 },
    { year: 1940, count: 183 },
    { year: 1941, count: 180 },
    { year: 1942, count: 220 },
    { year: 1943, count: 178 },
    { year: 1944, count: 121 },
    { year: 1945, count: 85 },
    { year: 1946, count: 78 },
    { year: 1947, count: 58 },
    { year: 1948, count: 99 },
    { year: 1949, count: 53 },
    { year: 1950, count: 26 },
    { year: 1951, count: 43 },
    { year: 1952, count: 20 },
    { year: 1953, count: 26 },
    { year: 1954, count: 57 },
    { year: 1955, count: 38 },
    { year: 1956, count: 13 },
    { year: 1957, count: 7 },
    { year: 1958, count: 1 },
    { year: 1959, count: 4 },
    { year: 1960, count: 36 },
    { year: 1961, count: 71 },
    { year: 1962, count: 86 },
    { year: 1963, count: 149 },
    { year: 1964, count: 144 },
    { year: 1965, count: 132 },
    { year: 1966, count: 107 },
    { year: 1967, count: 102 },
    { year: 1968, count: 111 },
    { year: 1969, count: 92 },
    { year: 1970, count: 108 },
    { year: 1971, count: 93 },
    { year: 1972, count: 140 },
    { year: 1973, count: 181 },
    { year: 1974, count: 180 },
    { year: 1975, count: 209 },
    { year: 1976, count: 238 },
    { year: 1977, count: 214 },
    { year: 1978, count: 146 },
    { year: 1979, count: 149 },
    { year: 1980, count: 187 },
    { year: 1981, count: 156 },
    { year: 1982, count: 152 },
    { year: 1983, count: 122 },
    { year: 1984, count: 143 },
    { year: 1985, count: 171 },
    { year: 1986, count: 168 },
    { year: 1987, count: 129 },
    { year: 1988, count: 215 },
    { year: 1989, count: 237 },
    { year: 1990, count: 243 },
    { year: 1991, count: 232 },
    { year: 1992, count: 318 },
    { year: 1993, count: 401 },
    { year: 1994, count: 344 },
    { year: 1995, count: 210 },
    { year: 1996, count: 192 },
    { year: 1997, count: 194 },
    { year: 1998, count: 190 },
    { year: 1999, count: 147 },
    { year: 2000, count: 221 },
    { year: 2001, count: 148 },
    { year: 2002, count: 214 },
    { year: 2003, count: 170 },
    { year: 2004, count: 168 },
    { year: 2005, count: 211 },
    { year: 2006, count: 259 },
    { year: 2007, count: 209 },
    { year: 2008, count: 244 },
    { year: 2009, count: 199 },
    { year: 2010, count: 200 },
    { year: 2011, count: 235 },
    { year: 2012, count: 140 },
    { year: 2013, count: 97 },
  ],
}
```

Geração das linhas do gráfico

```javascript
function drawLines(data, selector_wrapper) {
  if (document.querySelector(selector_wrapper + " svg")) {
    return true
  }

  // Selecionar div para colocar o relatório gráfico dentro
  const wrapper = d3.select(selector_wrapper)

  const // Margens do gráfico
    margin = { top: 20, right: 20, bottom: 20, left: 40 },
    // Dimensão do gráfico (largura e altura)
    width =
      wrapper.node().getBoundingClientRect().width - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom,
    // Definição do esquema de cores
    color = d3.scaleOrdinal(d3.schemeTableau10)

  // Criação da caixa do gráfico
  const svg = wrapper
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

  // Criação e posicionamento do gráfico
  const graphics = svg
    .append("g")
    .attr("class", "graphics")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  // Definição da escala das linhas
  const x = d3.scaleLinear().range([0, width])
  const y = d3.scaleLinear().range([height, 0])

  // Escala da variação dos dados (menor e maior número)
  const years = data.male_list.map(({ year }) => year),
    counts = data.male_list.map(({ count }) => count)
  x.domain([Math.min(...years), Math.max(...years)])
  y.domain([0, Math.max(...counts)])

  // Adicionar o eixo X
  graphics
    .append("g")
    .attr("class", "domains")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat((d) => d))

  // Adicionar o eixo Y
  graphics.append("g").attr("class", "domains").call(d3.axisLeft(y))

  // Gerar caminho para a linha
  const genline = d3
    .line()
    .x((d) => x(d.year))
    .y((d) => y(d.count))

  // Gerar o caminho das linhas
  graphics
    .append("path")
    .data([data.male_list])
    .style("stroke", color(0))
    .attr("class", "line")
    .attr("d", genline)

  graphics
    .append("path")
    .data([data.female_list])
    .style("stroke", color(1))
    .attr("class", "line")
    .attr("d", genline)

  document.querySelector(selector_wrapper + " > div").style.display = "none"
}

drawLines(data_yearsex, "#d3_wrapper_yearsex")
```

</details>

As primeiras aparições de mulheres sempre é uma visualização inferior a quantidade de homens

<p class="center bold">Primeiras aparições por gênero e ano</p>

<div id="d3_wrapper_yearsex" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

## Relação da identidade

O Peter Parker tirou a máscara na frente das câmera para todo mundo saber a identidade do Homem-Aranha, antes do Mefisto apagar tudo

```javascript
const data_id = [
  { name: "Known to Authorities Identity", count: 15 },
  { name: "No Dual Identity", count: 1788 },
  { name: "Public Identity", count: 4528 },
  { name: "Secret Identity", count: 6275 },
]

drawPie(data_id, "#d3_wrapper_id")
```

Essa história faz sentido para todos os persogens?

<p class="center bold">Proporção do tipo de identidades</p>

<div id="d3_wrapper_id" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Aparentemente não, nem a metade dos personagens possuem uma identidade secreta (49%)

## Personagem de quadrinho não morre?

Vamos verificar a realizadade dessa afirmação, podemos visualizar a relação entre heróis vivos e mortos

```javascript
const data_alive = [
  { name: "Deceased Characters", count: 3765 },
  { name: "Living Characters", count: 12608 },
]

drawPie(data_alive, "#d3_wrapper_alive")
```

Com a geração dos gráficos podemos ver que uma parte das figuras não voltagem

<p class="center bold">Proporção de personagens vivo</p>

<div id="d3_wrapper_alive" class="d3_graph">
  <div id="loading_graphic"></div>
</div>

Aqui podemos mostrar como é mentira que personagem de quadrinho não morre, temos 22% de mortos

Como todo mundo que fez parte dos quadrinhos é relacionado como personagem, pesosas históricas como Winston Churchill e o Adolf Hitler estão na lista, e ressusitar essas pessoas seria muuuito estranho

## Referências

[Kaggle - Marvel Chracters](https://www.kaggle.com/datasets/syedasimalishah/marvel-chracters)

<details>
  <summary>Versões das bibliotecas utilizadas</summary>

```text
d3: "7.8.4"
```

</details>
