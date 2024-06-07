---
date: 2023-07-17 10:39:02 -0300
title: Entendendo tags e gerando formas em SVG
description: Geração de desenhos e formas simples em SVG (Gráficos Vetoriais)
featuredImage: ./featured/blocks-1.jpg
coverImage: /figures/blocks-1.jpg
category: Web
tags:
  - Desenho
  - Gráficos
  - SVG
extras:
  - d3.v7.8.4.min.js
  - graphic-shapes.js
published: true
cheatsheet: false
---

Tenho uma verdadeira paixão por SVG, pela sua simplicidade e pela aplicação dos conceitos matemáticos. Para estudar e aplicar técnicas, desenvolvi um projeto completo chamado ["Criador de Personagens e Tirinhas"](https://comics.johnywalves.com.br/)

Permita-me compartilhar um pouco mais sobre essa paixão pela aplicação de conceitos simples no SVG

## Tamanho, Proporção e Escala

A tag do `svg` tem três atributos importantes para controlar o tamanho e escala:

- `viewBox` é a posição e dimensão da tela de desenho representando os valores mínimos `x` e `y` e as dimensões de `largura` e `altura`, formando o modelo `min-x min-y largura altura`
- `width` e `height`: respectivamente largura e altura, ambas usadas para representar a dimensões da imagem na página, a escala é controlada pela relação entre as dimensões da **viewBox** e do elemento na página

SVG de exemplo com escala de 4 vezes com início (0, 0), tela (100, 100) e dimensão do elemento (400, 400):

```xml
<svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
</svg>
```

Todos os elementos são escalados para encaixar na nova proporção

## Posicionamento

O posicionamento é um par de valores `(x, y)` com **x** da esquerda para direita e **y** de cima para baixo, començando no canto esquerdo superior representado pelo `min-x min-y` da **viewBox**, no exemplo abaixo `(0, 0)` com outros pontos de interesse

<p class="center bold">Grade de posicionamentos de 100 por 100 (com 400x400 pixels)</p>

<div id="d3_grid" class="d3_graph" style="margin:0 auto 2rem;">
  <div id="loading_graphic"></div>
</div>

Detalhe para a posição final também é definida pelo tamanho do **viewBox**

## Preenchimento e Contorno

As formas de retângulo, círculo e elipse possuem área interna e a polilinha e caminho dependendo da forma podem incluir uma área interna, essa área é preenchidos pela cor definida no `fill`, com o valor `none` podemos forçar transparência

No desenho os contornos são definidos pelo:

- **stoke**: Cor do contorno;
- **stoke-width**: Medida da "grossura" do contorno, detalhe que o centro do contorno sempre será a margem do desenho;

<div id="d3_fill_stroke" class="d3_graph" style="margin:0 auto 2rem;">
  <div id="loading_graphic"></div>
</div>

A primeira imagem com preenchimento sem contorno, segunda com contorno e sem preenchimento e o terceiro com ambos configurados

## Formas

A tag `<svg>` possue, entre outras, tags filhas para desenhar algumas formas simples

### Retângulo

Com a tag `<rect>` para desenhar um retângulo devemos informar a posição inicial em `x` e `y` e o tamanho `width` e `height`, definindo a largura e altura respectivamente, definido no eixo **x** e **y** também respectivamente

```xml
<rect x="5" y="5" width="95" height="85" fill="f6f6f640" />
```

<p class="center bold">Retângulo tamanho 95x85 pixels na posição (5, 5)</p>

<div id="d3_rect" class="d3_graph" style="margin:0 auto;">
  <div id="loading_graphic"></div>
</div>

### Círculo

Na tag `circle` escolhemos um posição central atributos `cx` e `cy`, para a posição `x` e `y`, e um raio pelo atributo `r` definindo um desenho completo de um círculo

```xml
<circle cx="50" cy="50" r="45" fill="f6f6f640" />
```

<p class="center bold">Círculo com centro (50, 50) e raio 45 pixels</p>

<div id="d3_circle" class="d3_graph" style="margin:0 auto;">
  <div id="loading_graphic"></div>
</div>

### Elipse

Diferente do círculo a tag `ellipse` possuem dois raio, além do centro `cx` e `cy`, temos também `rx` e `ry` que não medidas dentro do eixo **x** e **y** respectivamente

```xml
<ellipse cx="50" cy="50" rx="45" ry="30" fill="f6f6f640" />
```

<p class="center bold">Elipse com centro (50, 50) e raio horizontal 45 pixels e raio vertical 30 pixels</p>

<div id="d3_ellipse" class="d3_graph" style="margin:0 auto;">
  <div id="loading_graphic"></div>
</div>

### Linha

Como diz o segundo axioma da geometria euclidiana plana "dois pontos distintos determinam uma única reta", na tag `line` informamos as coordenadas destes dois pontos o primeiro como `x1` e `y1` e segundo como `x2` e `y2`, uma reta não possuem um preenchimento então suas características são definidas pelo contorno

```xml
<line x1="5" y1="5" x2="90" y2="90" stroke="#e0138c" stroke-width="3" />
```

<p class="center bold">Linha com início (5, 5) e término (90, 90)</p>

<div id="d3_line" class="d3_graph" style="margin:0 auto;">
  <div id="loading_graphic"></div>
</div>

### Polilinha

Na tag `polyline` formamos uma série sequencial de linhas, onde o preenchimento é a área interna formado pelas linhas e uma linha reta entre o primeiro e último ponto

```xml
<polyline points="0,0 40,20 40,75 75,40 100,100" stroke="#e0138c" fill="f6f6f640"  stroke-width="3" />
```

<p class="center bold">Polinha com posições (0, 0), (40, 20), (40, 75), (75, 40) e (100, 100)</p>

<div id="d3_polyline" class="d3_graph" style="margin:0 auto;">
  <div id="loading_graphic"></div>
</div>

### Caminho

Ah! Por último a tag `path` que no seu atribulo `d` de definição de conjunto de comandos pode desenhar tecnicamente qualquer coisa

Os comandos funcionam por uma letra e um conjunto de números, por exemplo com o comando `M 50,0` estamos solicitando que o pincel "mova para" a posição (50, 0) e o comando `L 62,40` damos a instrução de "linha para" a posição (62, 40) dando sequência podemos gerar o código

```xml
<path
  d="M 50,0
    L 62,40
    L 100,40
    L 66,62
    L 80,100
    L 50,76
    L 20,100
    L 32,62
    L 0,40
    L 40,40
    Z"
  fill="f6f6f640"
/>
```

<p class="center bold">Caminho formando uma estrela de 5 pontas</p>

<div id="d3_path" class="d3_graph" style="margin:0 auto 2rem;">
  <div id="loading_graphic"></div>
</div>

Detalhamento de outros comandos podem ser encontrados em [mdn web docs - Paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) ferramentas como [Inkscape](https://inkscape.org/pt-br) são ótimas na manipulação desses atributos
