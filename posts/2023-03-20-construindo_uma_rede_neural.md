---
date: 2023-03-20 11:58:13 -0300
title: Construindo uma rede neural
description: Criação de uma estrutura de rede neural do zero com Python
featuredImage: ./featured/network-1.jpg
coverImage: /figures/network-1.jpg
category: Python
tags:
  - Rede Neural
  - Aprendizado de máquina
  - Machine Learning
published: false
highlight: false
cheatsheet: false
---

Estou planejando uma série de artigos com aplicação de redes neurais, antes melhor explicar os conceitos básicos e suas aplicações, para isso vamos criar nossa redes neural para facilitar na compreensão dos procedimentos e resultados

## Conceitos

Para começar vamos entender o modelo de neurônio que vamos utilizar, e como ele se organiza em estrutura para formar uma rede

### Modelo Perceptron

Modelo matemático que recebe vários valores com os pesos correspondentes, somsando os resultados e ajustando o resultado para 1 ou 0, como na imagem a seguir

<p class="center bold">A estrutura de um neurônio artificial do tipo&nbsp;<em>Perceptron</em>&nbsp;(ou neurônio McCulloch-Pitts)</p>

![Uma esfera grande com símbolo de sigma, esferas à esquerda e setas ligando a grande da esquerda para direita e uma seta para direita ligando a outra esfera](/figures/simulator_perceptron.jpg "Algoritmo Perceptron")

<p class="center">Fonte: adaptado de Silva et al. (2016)<p>

A figura ilustra uma simulação de funcionamento de um neurônio no modelo *Perceptron* com valores de entrada **{x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> ... x<sub>d</sub>}** sendo multiplicados por pesos sinápticos **{w<sub>01</sub>, w<sub>02</sub>, w<sub>03</sub> ... w<sub>0d</sub>}**, respectivamente. 

Esses valores são somados e acrescidos por um valor externo **b<sub>0</sub>**, também um peso, gerando o somatório **v<sub>0</sub>**, aplicado na função **f(.)** para gerar o valor de saída **y<sub>0</sub>**

Sendo **x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> ... x<sub>d</sub>**, **w<sub>01</sub>, w<sub>02</sub>, w<sub>03</sub> ... w<sub>0d</sub>**, **b<sub>0</sub>** e **v<sub>0</sub>** valores entre 0 e 1 e **y<sub>0</sub>** com valor de 0 ou 1

A função **f(.)** é determinada por um valor limiar, dependendo da aplicação, retornando 0 ou 1 

<svg version="1.1" xmlns="http://www.w3.org/2000/svg" class="center" width="420" height="120" viewBox="0 0 280 80">
    <g fill="var(--texts)" font-size="1rem" font-weight="700">
        <text x="0" y="44"><tspan>y<tspan font-size="0.5rem">0</tspan></tspan></text>
        <text x="25" y="60" font-size="64px"><tspan font-weight="300">{</tspan></text>
        <text x="52" y="35">
            <tspan>0</tspan> <tspan font-weight="300">se</tspan> <tspan>v<tspan font-size="0.5rem">0</tspan></tspan> <tspan font-weight="300">menor ou igual que</tspan> <tspan>liminar</tspan>
        </text>
        <text x="52" y="60">
            <tspan>1<tspan> <tspan font-weight="300">se</tspan> <tspan>v</tspan><tspan font-size="0.5rem">0</tspan> <tspan font-weight="300">maior que</tspan> </tspan>liminar</tspan>
        </text>
    </g>
</svg>

### Multicamadas

Com aplicação do modelo de neurônio com os valores **v<sub>0</sub>** sendo usando para a valor de entrada para outro neurônio

<p class="center bold">Rede Neural com multicamadas de neurônios</p>

<svg version="1.0" xmlns="http://www.w3.org/2000/svg" class="center" width="330" height="419" viewBox="0 0 330 419">
 <defs>
  <marker id="TriangleOutS" overflow="visible" orient="auto">
   <path transform="scale(.2)" d="m5.77 0-8.65 5v-10z" fill-rule="evenodd" stroke="var(--texts)" fill="var(--texts)" stroke-width="1pt"/>
  </marker>
 </defs>
 <g transform="translate(-212.14 -322.45)">
    <g transform="translate(197.51 334.13)">
        <path transform="translate(177.88 90.628)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#ab10d2"/>
        <g fill="none" marker-end="url(#TriangleOutS)" stroke="var(--texts)">
            <path d="m190.28 343.53 85.306-94.784" stroke-width="8"/>
            <path d="m180.8 185.84 85.306 31.882" stroke-width="10"/>
            <path d="m187.69 265.98 80.998-30.159" stroke-width="5"/>
            <path d="m185.11 103.98 90.476 100.82" stroke-width="5"/>
        </g>
        <path transform="translate(64.551 218.28)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#047391"/>
        <path transform="translate(64.551 48.485)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#047391"/>
        <path transform="translate(64.551 133.38)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#047391"/>
        <path transform="translate(64.551 -36.41)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#047391"/>
        <g fill="none" marker-end="url(#TriangleOutS)" stroke="var(--texts)">
            <path d="m70.503 297.86 87.891-93.923" stroke-width="5"/>
            <path d="m71.364 300.44 79.274-23.265" stroke-width="8"/>
            <path d="m73.088 163.44 85.306 83.583" stroke-width="8"/>
            <path d="m69.641 154.82 84.444-45.669" stroke-width="10"/>
            <path d="m71.364 157.41 81.859 21.542" stroke-width="10"/>
            <path d="m69.641 299.58 84.444 43.945" stroke-width="10"/>
        </g>
        <path transform="translate(-49.083 162.22)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#00a33d"/>   
        <path transform="translate(-49.083 19.95)" d="m143.96 136.45c5e-3 15.872-12.86 28.742-28.733 28.742-15.872 0-28.738-12.87-28.733-28.742-0.0051-15.872 12.86-28.742 28.733-28.742 15.872 0 28.738 12.87 28.733 28.742z" fill="#00a33d"/>
    </g>
    <g fill="var(--texts)" font-family="Calibri" font-size="24px" stroke-linecap="square" stroke-linejoin="round" stroke-width="4" text-anchor="middle">
        <text x="270" y="365" text-align="center" style="line-height:0%"><tspan style="line-height:1.25"><tspan>camada</tspan></tspan><tspan x="270" y="395" style="line-height:1.25"><tspan>de entrada</tspan></tspan></text>
        <text x="375" y="365" text-align="center" style="line-height:0%"><tspan style="line-height:1.25"><tspan>camada</tspan></tspan><tspan x="375" y="395" style="line-height:1.25"><tspan>oculta</tspan></tspan></text>
        <text x="490" y="365" text-align="center" style="line-height:0%"><tspan style="line-height:1.25"><tspan>camada</tspan></tspan><tspan x="490" y="395" style="line-height:1.25"><tspan>de saída</tspan></tspan></text>
    </g>
 </g>
</svg>

<p class="center">Fonte: adaptado de Wikipédia<p>

Cada camada tem uma identificação: 

* **camada de entrada** (*input layer*): Valores iniciais, vindo pela entrada de dados, pode ser coordenadas, estrutura de uma imagem entre outros;
* **camada oculta** (*hidden layer*): As camadas com os neurônios que não são os de entrada e saída;
* **camada de saída** (*output layer*): Saída de valores, que podem ter um ou mais saídas todas sendo 0 ou 1.

## Implementação

Agora com os conceitos em mão para para aplicação, vamos usar somente uma camada oculta, primeiro vamos entender como vamos usar a matemática

### Matemática 

No exemplo vamos usar uma rede com três (3) na camada de entrada, cinco (5) na camada oculta e dois (2) na camada de saída:

Na **camada de entrada** (*layer_input*) como parâmetro uma matriz com a quantidade de entradas (3), exemplo:

```python
A = [0.1, 0.2, 0.3]
```

Como **pesos da camada de entrada** (*weight_input*) deve ser uma matriz de dimensão de quantidade de entradas (3) e quantidade de ocultas (5), exemplo: 

```python
B = [
        [0.11, 0.12, 0.13, 0.14, 0.15],
        [0.21, 0.22, 0.23, 0.24, 0.25], 
        [0.31, 0.32, 0.33, 0.34, 0.35]
]
```

Para calcular a saída **pesos da camada oculta** (*weight_hidden*) com uma matriz com dimensão de com quantidade de ocultas (5) e quantidade de saída (2), exemplo:

```python
C = [
        [0.11, 0.12],
        [0.21, 0.22], 
        [0.31, 0.32],
        [0.41, 0.42],
        [0.51, 0.52]
]
```

Calculando a primeira passagem, da entrada para oculta temos, fazendo isso com **multiplcação de matrizes** temos

> Lembrando do índice na maioria das linguagens de programação começa com 0, ou seja **A[0][1]** é igual a **a<sub>1, 2<sub>**

Aplicando a multicação sobre o `A * B` temos estruturado

```python
X = [
    A[0] * B[0][0]  +  A[1] * B[1][0]  +  A[2] * B[2][0],
    A[0] * B[0][1]  +  A[1] * B[1][1]  +  A[2] * B[2][1],
    A[0] * B[0][2]  +  A[1] * B[1][2]  +  A[2] * B[2][2],
    A[0] * B[0][3]  +  A[1] * B[1][3]  +  A[2] * B[2][3],
    A[0] * B[0][4]  +  A[1] * B[1][4]  +  A[2] * B[2][4]
]
```

Para aplicar essa fórmula, vamos usar a biblioteca NumPy, para saber como instalar temos [um artigo sobre pacotes em Python](/ambiente-python/)  

A função `.dot` realiza um produto de duas matrizes 

```python
import numpy as np

X = np.dot(A, B)
```

Assim temos o resultado `[0.146, 0.152, 0.158, 0.164, 0.17]` em X com os valores da camada oculta 

Para apurar os resultados finais temos X valores da camada oculta seguindo a sequência lógica

```python
Y = np.dot(X, C)
```

Para nosso resultado final temos `[0.2509, 0.2588]` que dependendo do nosso valor de limiar para cada saída, podemos resultar cada um como 0 ou 1 

### Finalmente 

Aplicando a função de classificação com os valores limiares

```python
classifier = lambda idx, item: 0 if item <= thresholds[idx] else 1
```

Organizando o que temos agora

```python
import numpy as np

def neural_network(layer_input, weight_input, weight_hidden, thresholds):
    layer_hidden = np.dot(layer_input, weight_input)
    layer_output = np.dot(layer_hidden, weight_hidden)

    enumerated = enumerate(layer_output)
    classifier = lambda idx, item: 0 if item <= thresholds[idx] else 1

    return [classifier(i, e) for i, e in enumerated]
```

Só isso? É... só isso! 

## Referências

[Tweet from Santiago](https://twitter.com/svpino/status/1582703127651721217)

[Deep Learning Book - O Perceptron](https://www.deeplearningbook.com.br/o-perceptron-parte-1/)

[But what is a neural network? | Chapter 1, Deep learning](https://www.youtube.com/watch?v=aircAruvnKk&t=2s&ab_channel=3Blue1Brown)

[NumPy - numpy.dot](https://numpy.org/doc/stable/reference/generated/numpy.dot.html)
