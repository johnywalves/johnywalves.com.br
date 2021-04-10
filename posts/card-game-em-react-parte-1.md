---
title: Card Game em React (Parte 1)
description: Desenvolvendo um jogo tipo Hearthstone, Gwent e Yu-Gi-Oh! do
  conceito a entrega com React (Parte 1 de ?)
date: 2021-04-10 09:48:05
coverImage: figures/alchemy-1.jpg
category: JS
tags:
  - javascript
published: false
highlight: false
---
Amo jogar e foi o motivo para me fazer entrar para área de desenvolvimento, mas nunca me propus a fazer nada maior que um pequeno protótipo, mas isso agora mais mudar nessa série vamos fazer um card game do conceito até o a primeira entrega com um modo single player (versus PC) com artes e animações simples

A escolha do React vem da necessidade aprimorar na biblioteca e querer fazer algo divertido no processo existem plataformas bem melhores e gratuitas para quem está começando incluindo algumas para HTML5 e JavaScript

## Termos no jogo

Alguns termos que serão usados adiante que podemos 

**Campo de batalha**: Formada de 4 linhas e 5 colunas onde cada carta deve ser posicionada nos campos disponíveis, em cada lado a linha voltada para o adversários é a linha de corpo-a-corpo e linhas do jogador a linha a distância;  
**Invocador**: O invocador é o avatar no jogador, cada invocador tem suas próprias características que influenciam no jogo;

## Mecânicas de jogo

Como descrito pelo artigo da Wikipédia sobre o tema "Sistemas de interação entre o jogador e o jogo", o jogo de cartas já traz um elemento aleatório adicionando conceito de turnos, pontos de ação, posicionamento e movimentação completando o conceito

Como vamos utilizar de cada conceito

**Turnos**: Cada jogador terá sua fase para escolher e realizar suas ações intercalando em cada um, o primeiro a agir é baseado em critério de sorte com a uma compreensão para o jogador seguinte;  
**Aleatório**: Ao começar cada jogador pega 5 (cinco) cartas e 1 (uma) carta em cada turno no topo da pilha de cartas, a ordem na pilha é aleatória fazendo o jogador a se adaptar para as cartas que tem a disposição;  
**Pontos de Ação**: O jogador recebe 3 (três) pontos de ação no início de seu turno para realizar suas ações como invocar, movimentar e atacar, cada ponto não gasto no seu turno é acumulado até o limite de 10 pontos;
**Posicionamento**: No campo de batalha a posição das cartas alteração suas capacidades e vulnerabilidades, as

Cada invocar tem uma quantidade de pontos de vida  condições de vitória 

* Desistência do adversário;
* Quando os pontos de vida do adversário chegar a zero;
* Após finalizar 10 turnos 


## Referências 

[Wikipedia - Game_mechanics](https://en.wikipedia.org/wiki/Game_mechanics)