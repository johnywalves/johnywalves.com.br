---
title: Mortes em Kill Bill
description: Visualização de dados de filmes do Tarantino com a linguagem R
date: 2018-08-19 15:00:00 -0300
featuredImage: ./featured/kill-bill-1.jpg
coverImage: /figures/kill-bill-1.jpg
category: R
tags:
  - Visualização
---

Quando estava aprendendo o básico da **Linguagem R** e o **R Studio** em uma workshop do Igor Alcantara, ele disponibilizou algumas bases de dados dentre eles com ofecenças e mortes em filmes do Quentin Tarantino.  
Brincando um pouco a base encontrei uma lista de mortes em ambos volumes de Kill Bill e ocorre alguns montes

### Ambiente e Dados

Para preparar o ambiente informei o diretório de trabalho indicado pelo _"."_ e limpei todas as variáveis de ambiente após pesquisar todas pelo _list = ls()_

```r
setwd(".")
rm(list = ls())
```

Carreguei a bilbioteca do _tidyverse_ pois contém a _ggplot2_, geração de gráfico, e a _dplyr_, consulta para manipulação de dados

```r
# Instalar caso necessário com o comando: install.packages('tidyverse')
library('tidyverse')
```

Carregando os dados através do _csv_ na pasta e a visualização proporcionou uma análise exploratória

```r
# Carregar os dados do arquivo csv
tarantino <- read.csv('tarantino.csv')
head(tarantino)
```

```text
##            movie type     word minutes_in
## 1 Reservoir Dogs word     dick       0.40
## 2 Reservoir Dogs word    dicks       0.43
## 3 Reservoir Dogs word   fucked       0.55
## 4 Reservoir Dogs word  fucking       0.61
## 5 Reservoir Dogs word bullshit       0.61
## 6 Reservoir Dogs word     fuck       0.66
```

Os dados estão organizados com os nomes dos filmes, acontecimento de tempo em minutos

### Organização

Somente me interessa os dados de mortes dos volumes 1 e 2 de Kill Bill, um consulta um filtro usuando a bibliote _dplyr_ que faz parte da _tidyverse_, apliquei um filtro pelo nome do Filme e tipo de evento

```r
mortes <-
  tarantino %>%
  filter(type == 'death' & (movie == 'Kill Bill: Vol. 1' | movie == 'Kill Bill: Vol. 2'))
```

Para ter uma coluna com quantidade crescente de mortes, para facilitar na geração no gráfico

```r
qtdMortes <- nrow(as.data.frame(mortes$minutes_in))
mortes$qtd <- seq(1, qtdMortes)
```

Adicionei de 112 minutos antes do segundo para duração do primeiro volume acrescido de um minuto.  
Fonte da duração [Página do IMDb sobre Kill Bill: Volume 1](https://www.imdb.com/title/tt0266697/)

```r
mortes[(mortes$movie == 'Kill Bill: Vol. 2'),]$minutes_in <-
    mortes[(mortes$movie == 'Kill Bill: Vol. 2'),]$minutes_in + 112
```

### Visualização

Com os dados organaizados, o uso do _ggplot2_ com os comandos:

- **labs** Legendas do gráfico
- **geom_point** Visualização dos dados por pontos
- **geom_segment** Linha vermelha para separar o momento entre os dois filmes
- **theme_minimal** Interface com mínimo de recursos

Guardando na variável `graph` para usarmos depois e expondo ela

```r
graph <- ggplot(mortes, aes(x=qtd, y=minutes_in)) +
  labs(title = "Mortes por tempo em Kill Bill (Vol. 1 & 2)",
       x = "Número de mortes",
       y = "Tempo de filme (minutos)") +
  geom_point(color='#db0d0d', size = 1.5, alpha = 0.5) +
  geom_segment(color='#0d74db', size = 1,
               aes(x = 0, xend = qtdMortes, y = 112, yend = 112), alpha = 0.5) +
  theme_minimal()

graph
```

![plot of chunk killbill_mortes](/figures/killbill_mortes-1.svg)

Por final, gerei o arquivo com as informações na variável `graph` para visualização futura e divulgação no site

```r
ggsave(filename = 'KillBillDeath.jpg', graph,
       width = 9.38, height = 5.47, dpi = 95, units = 'in', device = 'jpg')
```
