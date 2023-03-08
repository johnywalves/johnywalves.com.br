---
date: 2023-02-20 11:58:13 -0300
title: Simulador da humanidade
description: Uso de rede neural e visualização de dados para simulação da vivência humana
featuredImage: ./featured/savannah-1.jpg
coverImage: /figures/savannah-1.jpg
category: Python
tags:
  - Rede Neural
  - Simulação
published: false
highlight: false
cheatsheet: false
---

Navegando pela internet encontrei alguns vídeos do jogo [WorldBox](https://www.superworldbox.com/), comecei a fazer minha mente maluca funcionar e lembrei do [tweet do @svpino](https://twitter.com/svpino/status/1582703127651721217) sobre como criar uma rede neural simples

Por que não fazer um simulador de humanidade? 

## Definição

Pensando na ideia do básico e focando na primeira entrega e na prova de conceito

### Ser humano 

Pensando no ser humano de forma axiomática 

> Criatura social com necessidades materiais

Considerando esse axioma para começar vamos fazer algumas ponderações

**Criatura**

* Possui um ciclo de vida, com caracteristicas para fase, após o nascimento nos desenvolvemos dentro do ciclo de vida, vamos simplificar por anos;
  * Infância (0 - 20): desenvolvimento da capacidade intelectual, muscular e reprodutiva;
  * Adulto (20 - 60): 
  * Idoso (60 - 80):
* Cada ação demanda o uso de energia;
* Tem o ímpeto de ser reproduzir e garantir a maior quantidade de decentes vivos;
* Lembrança do que acontece com ele e no seu ambiente.

**Social**

* Capacidade de comunicação;
* Criação de afinidades entre si;

**Necessidade material**

* Ele precisa ingerir alimentos para sobreviver e garantir energia;
* Fazer uso de recursos para garantir sua segurança física.

Falando em termos sistemicos

## Mundo

Para a simulação pensando de forma simples **disposição de recursos finitos** 

## Rede Neural

Voltando para o [tweet do @svpino](https://twitter.com/svpino/status/1582703127651721217) temos o código abaixo

```python
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def neural_network(X, y):
    learning_rate = 0.1
    W1 = np.random.rand(2, 4)
    W2 = np.random.rand(4, 1)

    for epoch in range(10000):  
        layer1 = sigmoid(np.dot(X, W1))
        output = sigmoid(np.dot(layer1, W2))

        error = (y - output)

        delta2 = 2 * error * (output * (1 - output))
        delta1 = delta2.dot(W2.T) * (layer1 * (1 - layer1))

        W2 += learning_rate * layer1.T.dot(delta2)
        W1 += learning_rate * X.T.dot(delta1)

    return np.round(output).flatten()

X = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])

print("OR", neural_network(X, np.array([[0, 1, 1, 1]]).T))
print("AND", neural_network(X, np.array([[0, 0, 0, 1]]).T))
print("XOR", neural_network(X, np.array([[0, 1, 1, 0]]).T))
print("NAND", neural_network(X, np.array([[1, 1, 1, 0]]).T))
print("NOR", neural_network(X, np.array([[1, 0, 0, 0]]).T))
```

Vamos entender tudo em partes

O algoritmo Perceptron, ou neurônio McCulloch-Pitts, representando pela imagem

![](/figures/simulator_neural_perceptron.jpg "Modelo Perceptron")

## Visão sistêmica

### Variáveis 

Para o ser humano vamos considerar as seguintes variáveis de 0 a 100% para todos

#### Saúde

#### Energia

Capacidade corporal de executar atividades ou manter as funções vitais

##### Ganho

Recuperação de energia deve a

* Através de alimentação

##### Perda


### Ações

* Mover;
* Comer;
* Dormir;
* Acordar.







