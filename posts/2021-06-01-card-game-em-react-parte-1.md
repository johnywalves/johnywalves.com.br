---
title: Card Game em React (Parte 1)
description: Desenvolvendo um jogo tipo Hearthstone, Gwent e Yu-Gi-Oh! do
  conceito a entrega com React (Parte 1 de ?)
date: 2021-06-01 08:26:08 -0300
featuredImage: ./featured/pokemon_cardgame-1.jpg
coverImage: figures/pokemon_cardgame-1.jpg
category: JS
tags:
  - javascript
  - game
  - react
published: false
highlight: false
---
Amo vídeo game, foi o motivo que me fez entrar para área de desenvolvimento, fazendo uso deste amor vamos nessa série fazer um card game do conceito até o a primeira entrega com um modo single player (versus PC) com artes e animações simples

A escolha do React vem da necessidade me aprimorar na biblioteca e fazer algo divertido no processo, existem plataformas bem melhores e gratuitas para quem está começando no desenvolvimento de jogos incluindo algumas para HTML5 e JavaScript, mas como o foco é o aprendizado e a prática, vamos de React

## Termos no jogo

Para o melhor entendimento vamos detalhar alguns termos que serão usados adiante destes artigos:

**Campo de batalha**: Formada de 4 linhas e 5 colunas onde cada carta deve ser posicionada nos espaços disponíveis entre elas, em cada lado a linha voltada para o adversários é a linha de corpo-a-corpo e linhas do jogador a linha a distância;\
**Invocador**: O invocador é o avatar no jogador, é uma carta especial com pontos de vida que deve ser protegida;\
**Criaturas**: Cartas com valores de ataque e defesa, responsáveis pela defesa do invocador;\
**Artefatos**: Cartas de efeitos, que se efetivam no momento que invocadas;\
**Feitiços**: Cartas que efeitos, que podem ser ativadas nos turnos seguintes a sua invocação;\
**Nível**: Cada carta possui um valor que determina quantos pontos de ação é necessário para coloca-la no campo de batalha.

## Mecânicas de jogo

Como descrito pelo artigo da Wikipédia sobre o tema "Sistemas de interação entre o jogador e o jogo", escolhi alguns elementos para realizar a interação, o jogo de cartas já traz um elemento aleatório adicionando os conceitos de turnos, pontos de ação, posicionamento e movimentação completam as mecânicas que vamos utilizar, segue como cada conceito vai funcionar:

**Turnos**: Cada jogador terão suas fases para escolher e realizar suas ações, intercalando para cada um, o primeiro a agir é sorteado com um cara ou coroa;\
**Aleatório**: Ao começar cada jogador pega 5 (cinco) cartas e em cada turno 1 (uma) carta  do topo da pilha de cartas, a ordem na pilha é aleatória fazendo o jogador a se adaptar para as cartas que tem a disposição;\
**Pontos de Ação**: O jogador recebe 3 (três) pontos de ação no início de seu turno para realizar as invocações e movimentação, cada ponto não gasto no seu turno é acumulado até o limite de 10 pontos;\
**Posicionamento**: No campo de batalha a posição das cartas alteração suas capacidades e vulnerabilidades, as criaturas somente com capacidade de ataques corpo-a-corpo podem atingir inimigos na linha de corpo-a-corpo e na linha de ataques a distância caso não exista na linha corpo-a-corpo e as criaturas com capacidade de ataques a distância são capazes de ataques em qualquer linha, independente do alcance todas podem atacar o invocador, o jogador deve somente colocar as cartas no seu lado no campo de batalha;\
**Movimentação**: Com o gasto de um ponto de ação o jogador pode trocar uma criatura da linha de corpo-a-corpo para a distância no seu lado do campo de batalha. 

As cartas podemos possuir descrições que alteração alguma mecânica, nesse caso a descrição da carta sempre deve prevalecer

## Ciclo de jogo

No início cada jogador deve pegar 5 (cinco) cartas de sua pilha de cartas, jogar cara ou coroa para escolher o jogador que iniciará o turno, onde não poderá realizar nenhum ataque, nos turnos o fluxo abaixo deve ser seguido:

![Um desenho de processo com descrições de cada etapa](/figures/game_loop_1.png "Game Loop")

Em resumo:\
\
**Pré-prepado**: O jogador deve pegar 1 (uma) carta da pilha de cartas e receber seus pontos de ação;\
**Fase de preparo**: Invocações de artefatos e criaturas e movimentações de criaturas com o gasto de pontos de ação definidos pelo nível da carta, e ativação de feitiços;\
**Fase de combate**: As criaturas atacam e se defendem, cada criatura tem a possibilidade de realizar um ataque;\
**Fase de feitiços**: Reservada para invocação de feitiços, com o custo em pontos de ação igual seu nível;\
**Pós-feitiço**: Se o jogador tiver mais de 8 (oito) cartas deve descartar as restantes.

## Cartas de criaturas, invocadores e resolvendo combate

Cada criatura tem valores de **ataque, defesa**, **distância de ataque** e **nível**, alguns podem ter descrições de **efeitos**, esses efeitos podem ser acionados no momento do ataque, defesa, no início da fase de combate ou na invocação

![Uma carta formato de retrato com valores de nível, ataque e defesa e tipo de ataque](/figures/explicacao_card_criaturas.png "Exemplo de carta de criatura")

Cada invocador possuir **pontos de vida**, **pontos de defesa** e eventualmente alguma descrição de **efeitos** de do acionamento

![Uma carta formato de hexágono com pontos de vida e valores de defesa](/figures/explicacao_card_invocador.png "Exemplo de carta de invocador")

Na fase de combate cada criatura pode realizar um ataque contra outra criatura dentro do alcance ou contra um invocador caso não tenha criaturas dispostas para a defesa, ao receber um ataque se a criatura possuir pontos de defesa menores que o valor do ataque a carta deve ir para a pilha de descarte, o invocador ao receber um ataque debita os valores de defesa e debita a diferença dos pontos de vida

## Cartas de Efeitos, artefatos e feitiços

As cartas de efeitos possuem um **nível**, uma **descrição de alvo** e **duração** e uma descrição de explicando suas capacidades, os **artefatos** devem ser invocados e ativados na fase de preparo e **feitiços** invocados na fase de feitiços e ativados na fase de preparado, ambos gastando seu nível em pontos de ação para invocação

As possibilidades de alvo para os efeitos são: \
\
**Campo de batalha**: Todas as posições são afetadas;\
**Posição no campo de batalha**: Podendo ser colocados em qualquer local no campo batalha;\
**Tipo de cartas**: O alvo deve ser uma criatura, artefato ou feitiços dependendo na descrição;\
**Invocador**: Afetando o invocador em si alterando seus pontos de vida ou defesa.

A duração é definida como:\
\
**Instantânea**: As cartas com essa duração são descartadas no momento que seus efeitos são efetivados;\
**Duradora**: Após a ativação ela mantem seu efeito até destruída, ou quando seu alvo for destruído.

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