---
date: 2018-08-19 15:00:00 -0300
title: Previsão de Sobreviventes do Titanic
description: Visualização de dados e machine learning com o desafio do Kaggle do Titanic
category: R
tags: [Machine Learning, R]
featuredImage: ./featured/titanic-1.jpg
coverImage: /figures/titanic-1.jpg
---

Kaggle, um organizador de competições para cientistas de dados, o desafio inicial dele é a previsão dos sobreviventes da viagem inaugural do RMS TItanic. [Titanic: Machine Learning from Disaster](https://www.kaggle.com/c/titanic)

### Ambiente

Configurei o ambiente como costumo fazer setando o diretório de trabalho, substituindo o _"."_ pelo caminho dos arquivos de dados, e limpando as viáveis de ambiente

```r
setwd('.')
rm(list = ls())
```

Carregando os dados por leitura de csv simples

```r
test <- read.csv("test.csv")
train <- read.csv("train.csv")
```

E unindo as bases de dados para tratar ambas da mesma forma, adicionando a coluna Sobrevivente (Survived) para a test, para poder utilizar o comando _rbind_

```r
test$Survived <- NA
combi <- rbind(train, test)
rm('train','test')
```

### Tratamento de dados

Os atributos de Sobrevivente (Survived), Porto em que embarcou (Embarked) e Gênero (ex) possuem quantidade de variações reduzidas e já informativas, facilitando a manipulação posterior portanto as transformei em fatores

```r
combi$Survived <- as.factor(combi$Survived)
combi$Embarked <- as.factor(combi$Embarked)
combi$Sex <- as.factor(combi$Sex)
```

Vamos classificar as famílias por nome

```r
combi$Familia <- combi$SibSp + combi$Parch + 1
combi$TipoFamilia[combi$Familia == 1] <- 'Solteiro/a'
combi$TipoFamilia[combi$Familia < 5 & combi$Familia > 1] <- 'Pequena'
combi$TipoFamilia[combi$Familia > 4] <- 'Grande'
combi$TipoFamilia <- as.factor(combi$TipoFamilia)
```

```r
combi$Name <- as.character(combi$Name)
combi$Title <- sapply(combi$Name, FUN=function(x) {trimws(strsplit(x, split = "[.,]")[[1]][2])})
# Organizar títulos
rareTitle <- c('Dona', 'Lady', 'the Countess', 'Capt', 'Col', 'Don', 'Dr', 'Major', 'Rev', 'Sir', 'Jonkheer')
combi$Title[combi$Title == 'Mlle'] <- 'Miss'
combi$Title[combi$Title == 'Ms'] <- 'Miss'
combi$Title[combi$Title == 'Mme'] <- 'Mrs'
combi$Title[combi$Title %in% rareTitle] <- 'Rare Title'
combi$Title <- as.factor(combi$Title)
rm(rareTitle)
```

```r
combi$Surname <- sapply(combi$Name, FUN=function(x) {trimws(strsplit(x, split = "[.,]")[[1]][1])})
```

## Ajustes de valores faltantes

```r
combi$Fare[is.na(combi$Fare)] <- median(combi$Fare[combi$Pclass == 3 & combi$Embarked == "S"], na.rm=TRUE)
```

```r
library("rpart")
modelo_idade <- rpart(Age ~ Pclass + Sex + SibSp + Parch + Fare + Embarked + Familia + TipoFamilia + Title, data=combi[!is.na(combi$Age),], method="anova")
combi$Age[is.na(combi$Age)] <- predict(modelo_idade, combi[is.na(combi$Age),])
rm(modelo_idade)
```

```r
combi$Embarked[combi$Embarked == ""] <- NA
combi$Embarked[is.na(combi$Embarked)] <- "C"
```

## Segmentação de passageiros

Passageiros com menos de 16 anos como **Crianças**

```r
combi$Kid <- ifelse(combi$Age <= 16, 1, 0)
combi$Kid <- as.factor(combi$Kid)
```

Mulheres maiores de 18 anos acompanhadas e com título de "Miss" como **Mães**

```r
combi$Mother <- ifelse(combi$Sex == 'female' & combi$Parch > 0 & combi$Age > 18 & combi$Title != 'Miss', 1, 0)
combi$Mother <- as.factor(combi$Mother)
```

```r
combi$Line <- ifelse(combi$Ticket == "LINE", 1, 0)
combi$Line <- as.factor(combi$Line)
```

```r
combi$Deck <- substr(combi$Cabin, 1, 1)
combi$Deck <- as.factor(combi$Deck)
```

```r
combi$NCabin <- sapply(as.character(combi$Cabin), FUN=function(x) {ifelse(x=="",0,length(strsplit(x, split = " ")[[1]]))})
combi$NCabin <- as.factor(combi$NCabin)
```

```r
ticketLimpo <- gsub("[./]", "", toupper(combi$Ticket))

combi$PC <- ifelse(substr(ticketLimpo, 1, 2) == "PC", 1, 0)
combi$PC <- as.factor(combi$PC)

combi$CA <- ifelse(substr(ticketLimpo, 1, 2) == "CA", 1, 0)
combi$CA <- as.factor(combi$CA)

combi$WC <- ifelse(substr(ticketLimpo, 1, 2) == "WC", 1, 0)
combi$WC <- as.factor(combi$WC)

rm(ticketLimpo)

# Encontrar a tripulação
combi$Crew <- ifelse(combi$Fare == 0 & combi$Deck == "", 1, 0)
```

```r
names <- colnames(combi)
campos <- names[!names %in% c("Name", "TipoFamilia", "Ticket", "Cabin", "Surname")]
combi <- combi[campos]

formula <- Survived ~ Pclass + Sex + Age + SibSp + Parch + Fare + Embarked +
                      Familia + Title + Kid + Mother + Deck + NCabin + Line +
                      PC + CA + WC + Crew

train <- combi[!is.na(combi$Survived),]
test <- combi[is.na(combi$Survived),]
rm(combi)
```

### Floresta Aletória

Aplicando Floresta Aletória (_Random Florest_)

```r
library("randomForest")

modelo_rf <- randomForest(formula, data=train)

test$Survived <- predict(modelo_rf, test)
test$Survived <- as.numeric(test$Survived) - 1

write.csv(test[c("PassengerId", "Survived")], file="solution.csv", row.names=FALSE)
```

## Visualizar critérios de sobrevivencia

```r
library("tidyverse")

importance <- importance(modelo_rf)

varImportance <- data.frame(Variables = row.names(importance),
        Importance = round(importance[,'MeanDecreaseGini'],2))

rankImportance <- varImportance %>%
        mutate(Rank = paste0('#',dense_rank(desc(importance))))

ggplot(rankImportance, aes(x = reorder(Variables, Importance),
                           y = Importance, fill = Importance)) +
  geom_bar(stat='identity') +
  labs(x = 'Variables') +
  coord_flip() +
  theme_minimal()
```

![plot of chunk titanic_importancia](/figures/titanic_importancia-1.svg)

### Visualização

```r
# Biblioteca geração de relatórios
library("ggplot2")
# Descrição de Sobrevivência
train$Sub = ifelse(train$Survived == 1, "Sim" , "Não")
# Palheta de Cores
cbPalette <- c("#FF6A00", "#069B87")
```

Homens sem títulos nobres ou patentes militares, foram os mais prejudicados

```r
ggplot(train, aes(as.factor(Title), fill=Sub, colour=Sub)) +
  labs(title = "",
       x="Título", y="Quantidade",
       fill="Sobreviventes", colour="Sobreviventes") +
  geom_bar(position='dodge', alpha = 0.2) +
  theme_minimal() +
  scale_fill_manual(values=cbPalette) +
  scale_colour_manual(values=cbPalette)
```

![plot of chunk titanic_titulos](/figures/titanic_titulos-1.svg)

No gráfico mostra a segunda característica em importância, crianças de até possuem mais possibilidades de adultos de 16 a 35 anos

```r
ggplot(train, aes(Age, fill = Sub, colour = Sub)) +
  labs(x = "Idade", y = "Quantidade", fill = "Sobreviventes", colour = "Sobreviventes") +
  geom_density(position = "identity", alpha = 0.2) +
  xlim(0, max(train$Age)) +
  theme_minimal() +
  scale_fill_manual(values=cbPalette) +
  scale_colour_manual(values=cbPalette)
```

![plot of chunk titanic_idade](/figures/titanic_idade-1.svg)

Infelizmente as pessoas que pagaram menos pela passagem, por estarem mais longes dos botes ou por outros fatores, é o terceiro critério

```r
ggplot(train, aes(Fare, fill = Sub, colour = Sub)) +
  labs(x = "Passagem", y = "Quantidade", fill = "Sobreviventes", colour = "Sobreviventes") +
  geom_density(alpha = 0.3) +
  xlim(0, 150) +
  theme_minimal() +
  scale_fill_manual(values=cbPalette) +
  scale_colour_manual(values=cbPalette)
```

![plot of chunk titanic_preco](../static/figures/titanic_preco-1.svg")

Embora seja o sétimo o tamanho da família é um dados interessante, proporcionalmente os solteiros tiveram a menor oportunidade de sobrevivência

```r
ggplot(train, aes(as.numeric(Familia), fill=Sub, colour=Sub)) +
  labs(title = "",
       x="Tamanho da Família", y="Quantidade",
       fill="Sobreviventes", colour="Sobreviventes") +
  geom_bar(position='dodge', alpha = 0.3) +
  scale_x_continuous(breaks=c(1:11)) +
  theme_minimal() +
  scale_fill_manual(values=cbPalette) +
  scale_colour_manual(values=cbPalette)
```

![plot of chunk titanic_familia](/figures/titanic_familia-1.svg)
