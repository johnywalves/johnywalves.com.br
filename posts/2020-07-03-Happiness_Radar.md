---
title: Happiness Radar
description: Uma análise de dados em busca do que influencia na facilidade geral de uma nação 
date: '2020-07-03 23:32:15'
featuredImage: ./featured/happy-1.jpg
coverImage: /figures/happy-1.jpg
category: Py
tags:
  - Python
  - Pandas
---

Entre várias fontes de dados no Kaggle uma delas é a relação de felicidade com algumas estátisticas de uma país o [World Happiness Report](https://www.kaggle.com/unsdsn/world-happiness) vamos gerar algumas visualizações

## Correlação

Instalação das bibliotecas utilizadas

```bash
pip install pandas matplotlib
```

Importação com apelido para elas bibliotecas

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure
```

Fazendo o download da base em [World Happiness Report](https://www.kaggle.com/unsdsn/world-happiness) carregando para a memória e visualizando os primeiro registros

```python
df = pd.read_csv("./datasets_894_813759_2019.csv")
df.head()
```

| **Overall rank** | **Country or region** | **Score** | **GDP per capita** | **Social support** | **Healthy life expectancy** | **Freedom to make life choices** | **Generosity** | **Perceptions of corruption** |
|---:|:---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | Finland | 7.769 | 1.340 | 1.587 | 0.986 | 0.596 | 0.153 | 0.393 |
| 2 | Denmark | 7.600 | 1.383 | 1.573 | 0.996 | 0.592 | .252 | 0.410 |
| 3 | Norway | 7.554 | 1.488 | 1.582 | 1.028 | 0.603 | 0.271 | 0.341 |
| 4 | Iceland | 7.494 | 1.380 | 1.624 | 1.026 | 0.591 | 0.354 | 0.118 |
| 5 | Netherlands | 7.488 | 1.396 | 1.522 | 0.999 | 0.557 | 0.322 | 0.298 |

Trabalhar com esses nomes é muito chato, vamos simplificar um pouco, renomeando as colunas

```python
df = df.rename(columns={"Overall rank": "Rank", "Country or region": "Region",
                   "GDP per capita": "GDP", "Social support": "Social",
                   "Healthy life expectancy": "Healthy",
                   "Freedom to make life choices": "Freedom", "Perceptions of corruption": "Corruption"})
```

Visualizando as correlações entre os atributos

```python
values_columns = ["Score", "GDP", "Social", "Healthy", "Freedom", "Generosity", "Corruption"]
corr = df[values_columns].corr()
corr
```

A ideia da matrix de correlação é encontrar o resultado mais longe do zero ou seja mais perto de 1 ou -1

| | **Score** | **GDP** | **Social** | **Healthy** | **Freedom** | **Generosity** | **Corruption** |
|---:|---:|---:|---:|---:|---:|---:|---:|
| **Score** | 1.000000 | **0.793883** | 0.777058 | **0.779883** | 0.566742 | 0.075824 | 0.385613 |
| **GDP** | **0.793883** | 1.000000 | 0.754906 | 0.835462 | 0.379079 | -0.079662 | 0.298920 |
| **Social** | 0.777058 | 0.754906 | 1.000000 | 0.719009 | 0.447333 | -0.048126 | 0.181899 |
| **Healthy** | **0.779883** | 0.835462 | 0.719009 | 1.000000 | 0.390395 | -0.029511 | 0.295283 |
| **Freedom** | 0.566742 | 0.379079 | 0.447333 | 0.390395 | 1.000000 | 0.269742 | 0.438843 |
| **Generosity** | 0.075824 | -0.079662 | -0.048126 | -0.029511 | 0.269742 | 1.000000 | 0.326538 |
| **Corruption** | 0.385613 | 0.298920 | 0.181899 | 0.295283 | 0.438843 | 0.326538 | 1.000000 |

O valor mais próximos **Score** são os **Gross Domestic Product (GDP) per capita** e **Healthy life expectancy**, mas podemos visualizar isso em gráfico

```python
pd.plotting.scatter_matrix(df[values_columns], figsize=(18, 18))
plt.savefig("radar_scatter_matrix_correlation.svg", formatstr="svg")
plt.show()
```

![Scatter Happiness Correlation](/figures/radar_scatter_matrix_correlation.svg)

## Informações geográficas

Para a próxima visualização precisamos de mais informações no caso os continentes escolhi a base do [Lista de paises do Geonames](https://www.geonames.org/countries/)

Como a informação está na web precisamos fazer a leitura com Web Scraping, para iniciar vamos fazer a instalação das bibliotecas do BeautifulSoup, funções para lidar com requisições HTTP e o pacote de leitura de tags do pandas

```bash
pip install beautifulsoup4 requests lxml
```

Ler as informações da tabela do site e converter

```python
# Importação das bibliotecas para Web Scraping e requisições HTTP
from bs4 import BeautifulSoup
from requests import get

# Colher o conteúdo do geonames
html = get("https://www.geonames.org/countries/").text
# Converter o texto para elementos de tags do Beautiful Soup
soup = BeautifulSoup(html)
# Para visualizar de forma estruturada: print(soup.prettify())

# Procurar a tag <table> com o id "countries"
table = soup.find("table", attrs={"id": "countries"})
# Para visualizar de forma estruturada: print(table.prettify())

# Converter o conteúdo DataFrame do pandas
# Alterando valor NA para NT, para evitar a conversão para valores nulos
table_countries = pd.read_html(str(table).replace("<td>NA</td>", "<td>NT</td>"))[0]

# Selecionar os campos que serão usados
countries = table_countries[["Country", "Area in km²", "Population", "Continent"]]
countries.head()
```

| **Country** | **Area in km²** | **Population** | **Continent** |
|---|---:|---:|---|
| Andorra | 468.0 | 77006 | EU |
| United Arab Emirates | 82880.0 | 9630959 | AS |
| Afghanistan | 647500.0 | 37172386 | AS |
| Antigua and Barbuda | 443.0 | 96286 | NT |
| Anguilla | 102.0 | 13254 | NT |

Normalmente trabalhando com várias bases de dados é comum as informações não cruzam, no caso de países tem visões diferentes de mundo

```python
set(df["Region"]) - set(countries["Country"])
```

Como vamos tem alguns países diferentes, por ausência ou concepção de nomenclaturas

> {'Congo (Brazzaville)', 'Congo (Kinshasa)',  'Czech Republic', 'Northern Cyprus', 'Palestinian Territories', 'Swaziland', 'Trinidad & Tobago'}

Vamos unir os países existentes em ambas as bases

```python
data = pd.merge(df, countries, left_on="Region", right_on="Country").drop("Country", axis=1)
data = data.rename(columns={"Area in km²": "Area"})
data.head()
```

| **Rank** | **Region** | **Score** | **GDP** | **Social** | **Healthy** | **Freedom** | **Generosity** | **Corruption** | **Area** | **Population** | **Continent** |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 1 | Finland | 7.769 | 1.340 | 1.587 | 0.986 | 0.596 | 0.153 | 0.393 | 337030.0 | 5518050 | EU |
| 2 | Denmark | 7.600 | 1.383 | 1.573 | 0.996 | 0.592 | 0.252 | 0.410 | 43094.0 | 5797446 | EU |
| 3 | Norway | 7.554 | 1.488 | 1.582 | 1.028 | 0.603 | 0.271 | 0.341 | 324220.0 | 5314336 | EU |
| 4 | Iceland | 7.494 | 1.380 | 1.624 | 1.026 | 0.591 | 0.354 | 0.118 | 103000.0 | 353574 | EU |
| 5 | Netherlands | 7.488 | 1.396 | 1.522 | 0.999 | 0.557 | 0.322 | 0.298 | 41526.0 | 17231017 | EU |

E finalmente gerar um gráfico com o Score de felicidade e as informações que são mais correlacionadas, com o tamanho dos circulos pela pontuação de estimativa de vida e separado por cores de continentes

```python
# Definição do tamanho do gráfico
plt.figure(figsize=(18, 18))

# Colher os continentes diferentes da base
continents = data["Continent"].unique()

# Geração dos ciclos
for continent in continents:
    dc = data[data["Continent"] == continent]
    plt.scatter(dc["Score"], dc["GDP"], s=dc["Healthy"] * 500, alpha=0.4, label=continent)

# Adicionar título
plt.title("Scatter Happiness Radar")
# Adicionar rótulos nos eixos
plt.xlabel("Score")
plt.ylabel("GDP per capita")
# Adicionar legenda para os continentes
plt.legend(scatterpoints=1, frameon=False, labelspacing=1, title="Continents")
# Salvar gráfico em arquivo
plt.savefig("radar_scatter_happiness_radar.svg", formatstr="svg")
# Apresentar o gráfico em tela
plt.show()
```

![Scatter Happiness](/figures/radar_scatter_happiness_radar.svg)

## Coordenadas

Agora vamos adicionar as coordendas para os países, para isso tem outra fonte de dados no Kaggle no [Counties geographic coordinates](https://www.kaggle.com/eidanch/counties-geographic-coordinates), vamos importar e visualizar essas informações

```python
coods = pd.read_csv("./datasets_2312_3908_countries.csv")
coods.head()
```

| **country** | **latitude** | **longitude** | **name** |
|---|---:|---:|---|
| AD | 42.546245 | 1.601554 | Andorra |
| AE | 23.424076 | 53.847818 | United Arab Emirates |
| AF | 33.939110 | 67.709953 | Afghanistan |
| AG | 17.060816 | -61.796428 | Antigua and Barbuda |
| AI | 18.220554 | -63.068615 | Anguilla |

Novamente vamos conferir as informações divergentes

```python
set(data["Region"]) - set(coods["name"])
```

> {'Ivory Coast', 'Myanmar', 'North Macedonia', 'South Sudan'}

Novamente vamos unir essas informações e visualizar como fica após

```python
cc = pd.merge(data, coods, left_on="Region", right_on="name").drop(["name", "country"], axis=1)
cc.head()
```

| **Rank** | **Region** | **Score** | **GDP** | **Social** | **Healthy** | **Freedom** | **Generosity** | **Corruption** | **Area** | **Population** | **Continent** | **latitude** | **longitude** |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 1 | Finland | 7.769 | 1.340 | 1.587 | 0.986 | 0.596 | 0.153 | 0.393 | 337030.0 | 5518050 | EU | 61.924110 | 25.748151 |
| 2 | Denmark | 7.600 | 1.383 | 1.573 | 0.996 | 0.592 | 0.252 | 0.410 | 43094.0 | 5797446 | EU | 56.263920 | 9.501785 |
| 3 | Norway | 7.554 | 1.488 | 1.582 | 1.028 | 0.603 | 0.271 | 0.341 | 324220.0 | 5314336 | EU | 60.472024 | 8.468946 |
| 4 | Iceland | 7.494 | 1.380 | 1.624 | 1.026 | 0.591 | 0.354 | 0.118 | 103000.0 | 353574 | EU | 64.963051 | -19.020835 |
| 5 | Netherlands | 7.488 | 1.396 | 1.522 | 0.999 | 0.557 | 0.322 | 0.298 | 41526.0 | 17231017 | EU | 52.132633 | 5.291266 |

Gerar o gráfico de scatter com posicionamento do geográfico

```python
plt.figure(figsize=(18, 9))

continents = cc["Continent"].unique()
for continent in continents:
    dc = cc[cc["Continent"] == continent]
    plt.scatter(dc["longitude"], dc["latitude"], s=dc["Score"] * 50, alpha=0.4)

plt.savefig("radar_coods.svg", formatstr="svg")
plt.show()
```

![World Map Coords](/figures/radar_coods.svg)

Agora adicionando a imagem de fundo do mapa mundi [Clip Art Free - World Map](https://clipart.me/objects/world-map-vector-free-28675)

```python
import matplotlib.image as mpimg
world_img = mpimg.imread("./world-map.png") # 2000 x 1202

plt.figure(figsize=(18, 9))

continents = cc["Continent"].unique()
for continent in continents:
    dc = cc[cc["Continent"] == continent]
    plt.scatter(dc["longitude"], dc["latitude"], s=dc["Score"].pow(3), alpha=0.6) #  

plt.imshow(world_img, extent=[-149, 190, -75, 105], alpha=0.25) # left, right, bottom, top
plt.savefig("radar_world_map.svg", formatstr="svg")
plt.show()
```

![World Map](/figures/radar_world_map.svg)

Salvando a fonte de dados tratada para futuros usos

```python
cc.to_csv("./countries.csv", index = False, header=True)
```

Você pode baixar aqui: [Countries with Coordenates](/data/countries.csv)

## Referências

[Python Data Science Handbook - Customizing Plot Legends](https://jakevdp.github.io/PythonDataScienceHandbook/04.06-customizing-legends.html)  
