---
title: Card Game em React (Parte 1)
description: Desenvolvendo um jogo tipo Hearthstone, Gwent e Yu-Gi-Oh! do
  conceito a entrega com React (Parte 1 de ?)
date: 2021-04-10 12:51:46
coverImage: figures/pokemon_cardgame_1.jpg
category: JS
tags:
  - javascript
published: false
highlight: true
---
Amo jogar e foi o motivo para me fazer entrar para área de desenvolvimento, mas nunca me propus a fazer nada maior que um pequeno protótipo, mas isso agora mais mudar nessa série vamos fazer um card game do conceito até o a primeira entrega com um modo single player (versus PC) com artes e animações simples

A escolha do React vem da necessidade aprimorar na biblioteca e querer fazer algo divertido no processo, existem plataformas bem melhores e gratuitas para quem está começando incluindo algumas para HTML5 e JavaScript

## Termos no jogo

Alguns termos que serão usados adiante que podemos 

**Campo de batalha**: Formada de 4 linhas e 5 colunas onde cada carta deve ser posicionada nos campos disponíveis, em cada lado a linha voltada para o adversários é a linha de corpo-a-corpo e linhas do jogador a linha a distância;\
**Invocador**: O invocador é o avatar no jogador, cada invocador tem suas próprias características que influenciam no jogo;\
**Artefatos**: Cartas de efeitos, que se efetivam no momento que invocadas;\
**Feitiços**: Cartas que efeitos, que se efetivam no turno seguinte a sua invocação;\
**Criaturas**: Cartas com valores de ataque e defesa, responsáveis pela defesa do invocador;\
**Nível**: Cada carta possui um valor que determina quantos pontos de ação necessário para colocar no campo de batalha.

## Mecânicas de jogo

Como descrito pelo artigo da Wikipédia sobre o tema "Sistemas de interação entre o jogador e o jogo", o jogo de cartas já traz um elemento aleatório adicionando conceito de turnos, pontos de ação, posicionamento e movimentação completando as mecânicas que vamos utilizar

Como vamos utilizar de cada conceito

**Turnos**: Cada jogador terá sua fase para escolher e realizar suas ações intercalando em cada um, o primeiro a agir é baseado em critério de sorte com a uma compreensão para o jogador seguinte;\
**Aleatório**: Ao começar cada jogador pega 5 (cinco) cartas e 1 (uma) carta em cada turno no topo da pilha de cartas, a ordem na pilha é aleatória fazendo o jogador a se adaptar para as cartas que tem a disposição;\
**Pontos de Ação**: O jogador recebe 3 (três) pontos de ação no início de seu turno para realizar suas ações como invocar e movimentar, cada ponto não gasto no seu turno é acumulado até o limite de 10 pontos;\
**Posicionamento**: No campo de batalha a posição das cartas alteração suas capacidades e vulnerabilidades, as criaturas somente com capacidade de ataques corpo-a-corpo somente inimigos na linha adjacente e as criaturas com capacidade de ataques a distância são capazes de ataques em qualquer linha, o jogador deve colocar as cartas no seu lado no campo de batalha;\
**Movimentação**: Com o gasto de um ponto de ação o jogador pode trocar uma criatura da linha de corpo-a-corpo para a distância no seu lado do campo de batalha. 

As cartas podemos possuir descrições que alteração alguma mecânica, nesse caso a descrição da carta sempre deve prevalecer

## Ciclo de jogo

No início cada jogador deve pegar 5 (cinco) cartas de sua pilha de cartas, jogar de cara ou coroa para escolher o jogador que iniciará o turno, onde não poderá realizar nenhum ataque, nos turnos o fluxo abaixo deve ser seguido:

![Um desenho de processo com descrições de cada etapa](figures/game_loop_1.png "Game Loop")

Em resumo:\
\
**Fase de preparo**: Invocações de artefatos e criaturas, movimentações de criaturas, com o gasto de pontos de ação, e ativação de feitiços;

**Fase de combate**: As criaturas atacam e se defender, cada criatura tem a possibilidade de um ataque;

**Fase de feitiços**: Reservada para invocação de feitiços, com o custo dos pontos de ação.

## Cartas de criaturas, invocadores e resolvendo combate

Cada criatura tem valores de **ataque, defesa**, **distância de ataque** e **nível**, alguns podem ter descrições de **efeitos**, esses efeitos podem ser acionados no momento do ataque, defesa, no início da fase de combate ou na invocação

![Uma carta formato de retrato com valores de nível, ataque e defesa e tipo de ataque](figures/explicacao_card_criaturas.png "Exemplo de carta de criatura")

Cada invocador possuir **pontos de vida**, **pontos de defesa** e eventualmente alguma descrição de **efeitos** de do acionamento

![Uma carta formato de hexágono com pontos de vida e valores de defesa](figures/explicacao_card_invocador.png "Exemplo de carta de invocador")

Na fase de combate cada criatura pode realizar um ataque contra outra criatura ou contra um invocador caso não tenha criaturas dispostas para a defesa, ao receber um ataque se a criatura possuir pontos de defesa menores que o valor do ataque a carta deve ir para a pilha de descarte, o invocador ao receber um ataque debita os valores de defesa e debita a diferença dos pontos de vida

## Condições de vitória

Cada invocar tem uma quantidade de pontos de vida o objetivo do é zerar os pontos de vida do adversário e preservar os próprios gerando as condições de vitória:

* Desistência do adversário;
* Quando os pontos de vida do adversário chegar a zero;
* Após finalizar 10 turnos quem tiver mais pontos de vida, se forem iguais segue os critérios de desempate em ordem:  

  * Maior número de cartas no campo de batalha; 
  * Maior valor de ataque das criaturas;
  * Maior valor de defesa das criaturas.

## Referências

Paras as mecânicas são um conjunto de experiências com meus card games favoritos Hearthstone, Gwent e Yu-Gi-Oh!, sobre como organizar e classificar as mecânicas das descrições em [Wikipedia - Game_mechanics](https://en.wikipedia.org/wiki/Game_mechanics) foram de grande ajuda

Continua na parte 2...