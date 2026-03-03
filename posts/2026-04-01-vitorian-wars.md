---
title: Vitorian Wars — Card Game Dieselpunk
description: Uma disputa nacionalista centrada em uma Europa ficcional onde a Grande Guerra nunca terminou, combinando tática de grade, logística diesel e nobreza arcaica
date: 2026-04-01 19:57:08 -0300
featuredImage: ./featured/cards-1.jpg
coverImage: figures/cards-1.jpg
category: TCG
tags:
  - Dieselpunk
  - TCG
  - Propaganda de Guerra
  - Estratégia
cheatsheet: false
published: false
---

Minha paixão por videogames é o que me guiou até o desenvolvimento. Agora, vou canalizar essa energia para criar, do zero, um card game completo! Nesta série, vamos juntos da ideia inicial à primeira versão jogável, com modo single player (contra a CPU), arte e animações simples

## Bem-vindo ao Grande Teatro das Nações

Em Vitorian Wars, você assume o papel de um Comandante em um mundo onde motores diesel e magia de fogo colidem em batalhas épicas. Comande seu exército, gerencie seus recursos e supere seus oponentes neste jogo de cartas tático ambientado em uma estética de propaganda de guerra.

## 1. O Campo de Batalha (Grade 4x5)

O tabuleiro é dividido em uma grade de 4 linhas e 5 colunas:

| Linha | Posição                | Descrição               |
| ----- | ---------------------- | ----------------------- |
| 4     | Retaguarda do Oponente | Estado-Maior inimigo    |
| 3     | Vanguarda do Oponente  | Linha de frente inimiga |
| 2     | Minha Vanguarda        | Sua linha de frente     |
| 1     | Minha Retaguarda       | Seu Estado-Maior        |

**Área de Comando:** Localizada ao lado do tabuleiro, abriga:

- Seu Soberano
- Pilha de Defesa (5 cartas)
- Condição de Campo

![Desenho apresentando a composição do campo de batalha](/figures/card_game_react_battlefield.svg "Campo de batalha")

## 2. Componentes do Jogo

### Cartas de Estado

**Soberano (Comandante):** Seu avatar pessoal. Define:

- Identidade de Cor do seu deck
- Habilidades especiais (Fúria do Soberano)

**Unidades:** Representam suas tropas:

- **Infantaria:** Tropas terrestres
- **Blindados:** Tanques e veículos pesados
- Cada unidade possui: Ataque, Defesa e Nível

**Ordens (Feitiços):** Comandos táticos instantâneos jogados da mão ou ativados via _Burst_.

**Artefatos (Equipamentos):** Cartas permanentes que fortalecem unidades através da mecânica de Link (Emparelhamento).

## 3. Logística e Valor: A Economia Diesel

### Comboio de Suprimentos (Deck de Recursos)

Use um deck de 10 cartas de recurso, com a composição a sua escolha

**Canalizar:** No início de cada turno, coloque a carta do topo do comboio na sua Área de Recursos.

### Tipos de Recurso

Lembre-se sempre de gerenciar seus ícones logísticos

| Ícone | Tipo        | Uso Principal                               |
| ----- | ----------- | ------------------------------------------- |
| [P]   | Pessoal     | Recrutamento e movimentação de tropas       |
| [S]   | Suprimentos | Combustível, munição e ativação de máquinas |

### Ações Logísticas

- **Exaurir (Virar):** Gire a carta 90° para pagar custos
- **Mobilizar:** Exaurir as cartas descrita na carta para posicionar um carta no campo de batalha
- **Reciclar:** Coloque um recurso no fundo do deck para bônus imediatos
- **Burn Out:** Se o deck de recursos acabar e você perde o próximo turno
- **Manutenção:** Unidades de Elite (Nível 5+) exigem exaurir 1 [S] por turno ou são destruídas.

## 4. Palavras-Chave

### Posicionamento e Mobilidade

| Palavra-chave | Efeito                                                 |
| ------------- | ------------------------------------------------------ |
| Brutamonte    | Não pode mudar de linha                                |
| Leve          | Move-se entre linhas sem custo de [P]                  |
| Pesada        | Move-se ao custo de [P] + [S]                          |
| Ligeira       | Não vira após atacar                                   |
| Pioneiro      | Pode atacar no mesmo turno em que foi mobilizada       |
| Ganking       | Pode mover para coluna adjacente para reforçar combate |

### Combate e Defesa

| Palavra-chave      | Efeito                                                     |
| ------------------ | ---------------------------------------------------------- |
| Entrincheirar      | Deve ser atacada antes do Soberano (bloqueio obrigatório)  |
| Munição Perfurante | Dano excedente atinge a Pilha de Defesa inimiga            |
| Carga de Baioneta  | Ataque imediato ao custo de 1 [P] adicional                |
| Blindagem Reativa  | Exaura 1 [S] para dobrar a defesa no combate               |
| Flanqueamento      | -1/-1 ao defensor se você tiver aliado na coluna adjacente |

## 5. Protocolo de Engajamento (Combate)

O combate em Vitorian Wars não é apenas comparar números; é uma sequência de decisões logísticas:

### Passo a Passo do Combate

1. **Declaração de Ofensiva**

   - Escolha uma unidade pronta na sua Vanguarda
   - Declare ataque contra unidade na mesma coluna ou contra o Soberano

2. **Janela de Fogo (Cadeia de Comando)**

   - Ambos os jogadores podem jogar Ordens ou ativar habilidades
   - As ações formam uma pilha (último a jogar, primeiro a resolver)

3. **Barragem de Suporte**

   - Unidades na Retaguarda podem exaurir 1 [S] para somar seu Ataque à unidade na Vanguarda à sua frente

4. **Resolução de Danos**

   - Danos calculados simultaneamente
   - Ataque > Defesa = destruição
   - Empate = Destruição Mútua

5. **Reação de Burst (se atacar Soberano)**

   - Revele a carta do topo da Pilha de Defesa
   - Se tiver Burst, ative gratuitamente

## 6. Flanqueamento: Tática Avançada

### Condição de Ativação

Ao declarar um ataque contra uma unidade, você possui outra unidade aliada em uma coluna **adjacente** (esquerda ou direita).

### Efeito

A unidade defensora sofre **-1/-1** (perde 1 de Ataque e 1 de Defesa) durante o combate.

### Estratégia

- Essencial para derrotar unidades com **Entrincheirar**
- Funciona perfeitamente com unidades **Ganking**
- Incentiva distribuição estratégica pelo tabuleiro (evite concentrar tropas)

### Exemplo

- Seu **Tanque Sultan-MK IV** (Coluna 3) ataca
- Sua **Infantaria de Trincheira** (Coluna 2) está adjacente
- O defensor inimigo recebe -1/-1, facilitando a destruição

## 7. Estrutura do Deck

### Composição

| Componente             | Quantidade                          |
| ---------------------- | ----------------------------------- |
| Soberano               | 1 carta (define cor/identidade)     |
| Deck de Manobra        | 50 cartas (máx. 4 cópias por carta) |
| Pilha de Defesa        | 5 cartas do topo (aleatórias)       |
| Comboio de Suprimentos | 10 cartas de recurso                |

### Mulligan

- Apenas **uma** remobilização permitida
- Coloque a mão atual no fundo do deck
- Compre 5 novas cartas

## 7. Cores do Comandante e Deck

O sistema de cores em Vitorian Wars é fundamental para a identidade das nações dieselpunk e define os arquétipos estratégicos de cada deck. Inspirado no conceito de "Identidade de Cor" de Magic: The Gathering, as cores são vinculadas ao Soberano (Comandante), que limita quais cartas podem ser incluídas no deck.

**Limitação de Construção**: Um deck deve ser construído usando apenas as cores da identidade do seu Soberano, exceto as cores adicionais.

### 1. Vermelho Escarlate (O Sultanato de Aço)

- **Temática**: Poder industrial, chaminés de fábricas e ofensiva imparável.
- **Arquétipo**: Ofensiva de Massa e Ruptura.
- **Estratégia**: Foca em unidades com Carga de Baioneta (atacam no turno em que entram) e Munição Perfurante, que causa dano direto à Pilha de Defesa do Soberano inimigo ao destruir defensores.
- **Mecânica Chave**: Alta dependência de recursos de Suprimentos [S] para alimentar motores a diesel e canhões pesados.

### 2. Azul Imperial (A Federação dos Céus)

- **Temática**: Aristocracia aérea, superioridade tecnológica e magos de voo.
- **Arquétipo**: Mobilidade Aérea e Precisão.
- **Estratégia**: Utiliza as palavras-chave Leve e Ligeira, permitindo que as unidades mudem de linha na grade 4x5 sem custo e ataquem sem se desativar.
- **Mecânica Chave**: Uso de Observadores Aéreos para realizar ataques de Longo Alcance diretamente ao Soberano, ignorando defensores de curto alcance.

### 3. Branco Marfim (O Domínio da Ordem Sagrada)

- **Temática**: Nacionalismo religioso, pureza do Estado e defesa da capital.
- **Arquétipo**: Defesa Estática e Fortificação.
- **Estratégia**: Centrada em unidades com Entrincheirar (bloqueadores obrigatórios) e Blindagem Reativa, que aumenta a defesa durante um Engajamento.
- **Mecânica Chave**: Possui as melhores Ordens de Burst na Pilha de Defesa, ativando proteções gratuitas quando o Soberano é atacado.

### 4. Verde Musgo (A Legião dos Rajs)

- **Temática**: Resiliência das colônias e guerra de exaustão.
- **Arquétipo**: Logística e Unidades de Elite.
- **Estratégia**: Focada em unidades Pesadas e Brutamontes com altos valores de defesa que dominam o campo de batalha por longos períodos.
- **Mecânica Chave**: Utiliza o Racionamento para Reciclar recursos de Pessoal [P] e Suprimentos do descarte de volta para o deck logístico, evitando o Burn Out.

### Cores Adicionais

- **Dourado (A Guarda Real)**: Cartas raras ou de elite que podem exigir cores ou custos logísticos elevados.
- **Cinza (Mão de Obra Neutra)**: Milícias e equipamentos básicos sem identidade nacional forte, utilizáveis em qualquer deck.

## 9. Fúria do Soberano (Mecânica de Clímax)

Para cada carta removida da sua Pilha de Defesa, coloque um marcador no seu Soberano, ele vai possuir uma das habilidades de Fúria:

- **+1 de Ataque** em resoluções de combate
- **Redução de custos** reduz custos de habilidades em 1 [P] para cada carta removida

Quanto mais pressionado, mais perigoso seu Comandante se torna!

## Dicas para Iniciantes

1. **Gerencie seus recursos:** Fique de olho no Comboio de Suprimentos para evitar Burn Out
2. **Use o Flanqueamento:** É a chave para quebrar defesas fortes
3. **Distribua suas tropas:** Não concentre tudo na mesma coluna
4. **Proteja sua Pilha de Defesa:** Quanto mais cartas removidas, mais vulnerável seu Soberano
5. **Combine Ganking + Flanqueamento:** Prepare ataques-surpresa em um único turno

**Prepare suas tropas, Comandante. O teatro da guerra espera!**

![Um desenho de processo com descrições de cada etapa](/figures/card_game_react_flow.svg "Game Loop")
