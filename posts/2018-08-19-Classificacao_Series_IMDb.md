---
date: 2018-08-19 15:00:00 -0300
title: Classificação de Séries IMDb
description: Visualização de dados da base dados do IMDb com a linguagem R
category: R
tags: [Visualização, R]
coverImage: /assets/img/imdb-1.jpg
---

IMDb é uma maior referência para filmes, série, atores, diretores... podemos entender e visualizar na sua base toda a história de sua indústria cinematografica apartir de *Passage de Venus* de 1874 por *Pierre Jules César Janssen* até os não lançados em pré-produção.  
Atualizada diáriamente [Base de dados](https://datasets.imdbws.com/) possuem uma [Estrutura fácil de entender](https://www.imdb.com/interfaces/)  
  
Esse artigo foi utilizado os arquivos  

* **title.ratings.tsv.gz**: Classificação dos **títulos** feitos para os usuários  
* **title.episode.tsv.gz**: Classificação dos **episódios** das séries feitos para os usuários  
* **title.basics.tsv.gz*`**: Nome dos títulos  

### Ambiente

Para preparar o ambiente informei o diretório de trabalho indicado pelo **'.'** e limpei todas as variáveis de ambiente após pesquisar todas pelo .

```r
setwd('.')
rm(list=ls())
```

### Classifição de Episódios

Carregar a fonte de dados de classificações e epísodios

```r
ratings = read.table(gzfile("title.ratings.tsv.gz"), header = TRUE)
episode = read.table(gzfile("title.episode.tsv.gz"), header = TRUE)
```

Depois de carregadas foram necessárias algumas manipulações preparar o data.frame

```r
# Unir os data.frames de episódios e classificações
episodeRating <- cbind(episode[match(ratings$tconst, episode$tconst),], ratings)
# Remover episódios sem indicação de títulos
episodeRating <- episodeRating[!is.na(episodeRating$parentTconst),]
# Remover episódios sem númeração de temporada
episodeRating <- episodeRating[(episodeRating$seasonNumber != '\\N'),]
# Remover episódios com 50 ou menos classificações
episodeRating <- episodeRating[(episodeRating$numVotes > 50),]
# Ordenar por episódios
episodeRating <- episodeRating[order(episodeRating$seasonNumber, episodeRating$episodeNumber),]
# Converter os episódios e temporadas em números
episodeRating$seasonNumber <- as.integer(as.character(episodeRating$seasonNumber))
episodeRating$episodeNumber <- as.integer(as.character(episodeRating$episodeNumber))
```

Separando somente as colunas para manipulação

```r
# Somente as colunas de identificação do título e a classificação média
meanRating <- episodeRating[,c('parentTconst', 'averageRating')]
# Agregar as classificações por título aplicação de médias
meanRating <- aggregate(averageRating ~ parentTconst, meanRating, mean)
# Ordenar de forma decrescente as classificações
meanRating <- meanRating[order(-meanRating$averageRating),]
```

Separando as séries pela classificação pela [Curva ABC](https://pt.wikipedia.org/wiki/Curva_ABC) onde a proporção de 20%, 30%, 50% dos melhores

```r
nrow <- nrow(meanRating)
limitA <- nrow*0.2
limitB <- nrow*0.5
mediaCurvaA <- mean(meanRating[1:limitA,]$averageRating)
mediaCurvaB <- mean(meanRating[limitA:limitB,]$averageRating)
mediaCurvaC <- mean(meanRating[limitB:nrow,]$averageRating)
```

Para fins de exemplo foi escolhi o [My Little Poney: Friendship is Magic](https://www.imdb.com/title/tt1751105/) com o código **tt1751105**, por quê? Me pareceu divertido

```r
# My Little Poney: Friendship is Magic
codSerie <- 'tt1751105'
# Cálculo da média da série
mediaSerie <- meanRating[meanRating$parentTconst == codSerie,]$averageRating
# Filtar os episódios da série e remover atributos duplicados
episodeRatingSerie = episodeRating[episodeRating$parentTconst == codSerie, -5]
```

Tratar os dados organizando gerando um número sequencial de episódios (Ex. "0102" segunda a primeira temporada, "0312" décimo segundo da terceira temporada) e ordenando pela sequência

```r
# Organizar e ordenar episodios por sequência
library(stringr)
episodeRatingSerie$episodeNumber <- str_pad(episodeRatingSerie$episodeNumber, 2, pad = "0")
episodeRatingSerie$seasonNumber <- str_pad(episodeRatingSerie$seasonNumber, 2, pad = "0")
episodeRatingSerie$episode <- paste(episodeRatingSerie$seasonNumber,
                                    episodeRatingSerie$episodeNumber, sep = "")
# Ordenar
episodeRatingSerie <- episodeRatingSerie[order(episodeRatingSerie$episode),]
episodeRatingSerie$ordemEpisode <- seq(1,nrow(episodeRatingSerie))
```

Gerar e visualizar as classificações geradas

```r
# Definir cores as linhas
rainbow <- rainbow(3)
# Geração de gráfico por episódios
library(ggplot2)
ggplot(episodeRatingSerie, aes(x = ordemEpisode, y = averageRating)) +
  labs(x = "Episódio", y = "Média de pontuação") +
  geom_line(color=rainbow[1]) +
  geom_segment(color=rainbow[2], size=0.8,
               aes(x=1, xend=nrow(episodeRatingSerie), y=mediaSerie, yend=mediaSerie), alpha = 0.5) +  
  theme_minimal()
```

![plot of chunk serie](/assets/img/serie-1.svg)

#### Inclusão de comparações

Gerar um *data frame* com a média por temporada de todas as séries

```r
mediaTemporada = aggregate(episodeRatingSerie$averageRating,
                           by=list(Category=episodeRatingSerie$seasonNumber), mean)
mediaTemporada$Category = as.integer(mediaTemporada$Category)
colnames(mediaTemporada) <- c('seasonNumber', 'averageRating')
```

Gerar e visualizar as comparações geradas

```r
# Definir cores as linhas
rainbow <- rainbow(5)
# Geração de gráfico comparação de temporadas das séries
ggplot(mediaTemporada, aes(x=seasonNumber, y=averageRating)) +
    labs(x = "Temporada", y = "Média de pontuação") +
    geom_line(color=rainbow[1]) +

    geom_segment(color=rainbow[2], size=1,
                 aes(x=1, xend=nrow(mediaTemporada), y=mediaSerie, yend=mediaSerie), alpha = 0.5) +
    geom_segment(color=rainbow[3], size=1,
                 aes(x=1, xend=nrow(mediaTemporada), y=mediaCurvaA, yend=mediaCurvaA), alpha=0.5) +
    geom_segment(color=rainbow[4], size=1,
                 aes(x=1, xend=nrow(mediaTemporada), y=mediaCurvaB, yend=mediaCurvaB), alpha=0.5) +  
    geom_segment(color=rainbow[5], size=1,
                 aes(x=1, xend=nrow(mediaTemporada), y=mediaCurvaC, yend=mediaCurvaC), alpha=0.5) +

    geom_text(aes(x=1.1, y=mediaSerie, label='Série'),
              hjust=0, vjust=0.55, size=4, colour='red') +
    geom_text(aes(x=1.1, y=mediaCurvaA, label='A'),
              hjust=0, vjust=0.55, size=4, colour='red') +
    geom_text(aes(x=1.1, y=mediaCurvaB, label='B'),
              hjust=0, vjust=0.55, size=4, colour='red') +
    geom_text(aes(x=1.1, y=mediaCurvaC, label='C'),
              hjust=0, vjust=0.55, size=4, colour='red') +

    theme_minimal()
```

![plot of chunk temporadas](/assets/img/temporadas-1.svg)

### Comparação entre Séries

Para dar continuidade selecionei minhas séries favoritas

Séries para ser comparadas:  

* [tt0407362](https://www.imdb.com/title/tt0407362/) : Battlestar Galactica  
* [tt0903747](https://www.imdb.com/title/tt0903747/) : Breaking Bad  
* [tt0944947](https://www.imdb.com/title/tt0944947/) : Game of Thrones  
* [tt0411008](https://www.imdb.com/title/tt0411008/) : Lost  
* [tt0141842](https://www.imdb.com/title/tt0141842/) : The Sopranos  
  
Para realizar a leitura temos de mudar algumas coisas, *quote*, limitador de texto, padrão é o "'" e *comment.char*, reconhecedor de comentários, é o "#", mas alguns nomes possuem eles sendo necessário configurar para ignorar essas entradas

```r
# Importar títulos das séries
titles = read.table(gzfile("title.basics.tsv.gz"), sep="\t", quote="", comment.char="", header=TRUE)
# Listagem das séries
codSeries <- c('tt0407362', 'tt0903747', 'tt0944947', 'tt0411008', 'tt0141842')
```

```r
# Carregar pontuação da série
grupoSeries <- episodeRating[episodeRating$parentTconst %in% codSeries,]
grupoSeries <- aggregate(grupoSeries$averageRating,
                         by=list(seasonNumber=grupoSeries$seasonNumber,
                                 parentTconst=grupoSeries$parentTconst), mean)
colnames(grupoSeries)[3] <- 'averageRating'

# Capturar somente as colunas  títulos das séries
titlesSeries <- titles[titles$tconst %in% as.factor(codSeries), c('tconst', 'primaryTitle')]
grupoSeries <- cbind(titlesSeries[match(grupoSeries$parentTconst, titlesSeries$tconst),], grupoSeries)
```

```r
ggplot(grupoSeries, aes(x=seasonNumber, y=averageRating)) +
    labs(x = "Temporada", y = "Média de pontuação", colour = "Séries") +  
    geom_line(aes(group = primaryTitle, colour = primaryTitle)) +
    theme_minimal()
```

![plot of chunk comparacao](/assets/img/comparacao-1.svg)

```r
# Quais as melhores de todos os tempos
melhoresSeries <- head(meanRating)
melhoresTitles <- titles[titles$tconst %in% as.factor(melhoresSeries$parentTconst),
                         c('tconst', 'primaryTitle')]
melhoresSeries <- cbind(melhoresTitles[match(melhoresSeries$parentTconst, melhoresTitles$tconst),],
                        melhoresSeries)

print(melhoresSeries)
```

```text
##            tconst             primaryTitle parentTconst averageRating
## 381214  tt0396991                 LazyTown    tt0396991     10.000000
## 2535133 tt2973110         BK Comedy Series    tt2973110     10.000000
## 386084  tt0401969      Playing It Straight    tt0401969      9.975000
## 3213875 tt4517806            Furusato-Time    tt4517806      9.950000
## 2332879 tt2487370 Whose Line Is It Anyway?    tt2487370      9.947059
## 183451  tt0190196  Romper Room and Friends    tt0190196      9.900000
```

Mas tudo isso pode significar nada, por essas classificações esta é a melhor série já produzida
