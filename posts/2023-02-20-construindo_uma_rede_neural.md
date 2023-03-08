---
date: 2023-02-20 11:58:13 -0300
title: Construindo uma rede neural
description: Criação de uma estrutura de rede neural do zero
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

Estou planejando uma série de artigos com aplicação de redes neurais, imaginando que seria interessante criar a estrutura para facilitar na compreensão dos resultados e como proceder

## Conceitos

Para começar entender o que é um modelo de neurônio, como formar uma rede e o processo de evolução

### Modelo Perceptron

Algoritmo de aprendizado de máquina para processo supervisionado de classificação binária

<p class="center bold">A estrutura de um neurônio artificial do tipo <em>Perceptron</em> (ou neurônio McCulloch-Pitts)</p>

![Uma esfera grande com símbolo de sigma, esferas à esquerda e setas ligando a grande da esquerda para direita e uma seta para direita ligando a outra esfera](/figures/simulator_perceptron.jpg "Algoritmo Perceptron")

<p class="center">Fonte: adaptado de Silva et al. (2016)<p>

A figura ilustra uma simulação de funcionamento de um neurônio no modelo *Perceptron* com valores de entrada **{x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> ... x<sub>d</sub>}** sendo multiplicados por pesos sinápticos **{w<sub>01</sub>, w<sub>02</sub>, w<sub>03</sub> ... w<sub>0d</sub>}**, respectivamente. 

Esses valores são somados e acrescidos por um valor externo (**b<sub>0</sub>**), também um peso, gerando o somatório (**v<sub>0</sub>**), aplicado na função **f(.)** para gerar o valor de saída (**y<sub>0</sub>**)

Sendo:

**{x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> ... x<sub>d</sub>}**, **{w<sub>01</sub>, w<sub>02</sub>, w<sub>03</sub> ... w<sub>0d</sub>}** e **b<sub>0</sub>** valores entre 0 e 1;

**f(.)** um classificador binário definindo se o resultado é retorno 0 ou 1.

### Multicamadas

A aplicação do algoritmo de Perceptron em camadas conectado com as suas saídas para entrada de 

<p class="center bold">Rede Neural com <em>Perceptron</em> de multicamadas</p>

![](/figures/simulator_neural_network.svg "Rede Neural com uma camada oculta")

<p class="center">Fonte: adaptado de Wikipédia<p>

### Aprendizado 

Bvackpropagation

## Implementação

Usando como a base o [tweet do @svpino](https://twitter.com/svpino/status/1582703127651721217) temos o código adaptado abaixo 

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def neural_network(layer_input, y):
    learning_rate = 0.1
    weight_input = np.random.rand(2, 4)
    weight_hidden = np.random.rand(4, 1)

    for epoch in range(10000):
        layer_hidden = sigmoid(np.dot(layer_input, weight_input))
        layer_output = sigmoid(np.dot(layer_hidden, weight_hidden))

        error = (y - layer_output)

        delta2 = 2 * error * (layer_output * (1 - layer_output))
        delta1 = delta2.dot(weight_hidden.T) * (layer_hidden * (1 - layer_hidden))

        weight_input += learning_rate * layer_input.T.dot(delta1)
        weight_hidden += learning_rate * layer_hidden.T.dot(delta2)

    return np.round(layer_output).flatten()

layer_input = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])

print("OR", neural_network(layer_input, np.array([[0, 1, 1, 1]]).T))
print("AND", neural_network(layer_input, np.array([[0, 0, 0, 1]]).T))
print("XOR", neural_network(layer_input, np.array([[0, 1, 1, 0]]).T))
print("NAND", neural_network(layer_input, np.array([[1, 1, 1, 0]]).T))
print("NOR", neural_network(layer_input, np.array([[1, 0, 0, 0]]).T))
```

Dentro deste exemplo


## Referências

[Tweet from Santiago](https://twitter.com/svpino/status/1582703127651721217)

[But what is a neural network? | Chapter 1, Deep learning](https://www.youtube.com/watch?v=aircAruvnKk&t=2s&ab_channel=3Blue1Brown)


