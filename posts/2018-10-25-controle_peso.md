---
title: Controle da evolução corporal
description: Em processo de emagrecer registrando as medidas de "sucesso"
date: 2018-10-25 20:33:15 -0300
featuredImage: ./featured/balance-1.jpg
coverImage: /figures/balance-1.jpg
category: Python
tags:
  - Visualização
  - Pandas
  - Matplotlib
published: true
cheatsheet: false
---

Sempre tive um barriguinha redonda, na minha guerra constante resolvi usar um pouco de ciência de dados para ajudar em mais uma batalha, me desafiando por 100 dias para alcançar 85Kg  
O projeto completo está no [Repositório GitHub](https://github.com/johnywalves/PyStudies/tree/master/Controle_Peso_100_dias)

### Carregar os dados

Definindo o foco de **100** dias para alcançar os **85Kg** desejados

```python
focoDias = 100
focoPeso = 85
```

Usando o arquivo de dados em **csv** com o seguinte formato

```text
Data,Peso,Imagem,AtividadeFisica,AlimentacaoTipo,AlimentacaoNivel,AlimentacaoCondicao
2018-09-23,96.7,1.jpg,'[{"Tipo":"Corrida", "Distancia":5.43, "Velocidade":9.92}]','["Laticínios", "Frutas"]',Moderada,
2018-09-24,96.1,,'[{"Tipo":"Corrida", "Distancia":5.40, "Velocidade":9.80}]','["Frutas", "Legumes", "Raízes"]',Moderada,
2018-09-25,94.7,,'[{"Tipo":"Musculação", "Foco":"Pernas"}]','["Frutas", "Legumes", "Raízes"]',Baixa,
2018-09-26,94.4,,,'["Frutas", "Raízes"]',Moderada,
```

Carregando os dados as bibliotecas de _pandas_, manipular os dados, e _numpy_, funções matemáticas.  
Lendo e carregando o arquivo convertendo os textos em json, para acumular os históricos de atividades físicas e tipo de alimentação ambos objetos com listagens

```python
import pandas as pd
import numpy as np

def LerJSON(data):
    import json
    if (data == ''):
        return json.loads('[]')
    else:
        return json.loads(data)

df_dados = pd.read_csv('./dados.csv', quotechar='\'', converters={'AtividadeFisica':LerJSON, 'AlimentacaoTipo':LerJSON}, header=0)
```

### Cálculo do limite de peso

Extraindo os dados de contagem e valor máximo das medidas, posteriormente usando extrapolação linear para preencher os dados faltantes

```python
count = df_dados['Peso'].count()
max = df_dados['Peso'].max()
df_dados['Peso'] = df_dados['Peso'].interpolate()
```

Com uma projeção linear de peso máximo para o objetivo

```python
linha_limite = pd.Series(range(0, focoDias))
linha_limite = max - (linha_limite * ((max - focoPeso) / focoDias))
df_dados['Limite'] = linha_limite
```

### Nível de atividades físicas

Para o resultado do fluxo ser negativo é necessário ter saída, aumentar esse fluxo com muita atividade física

```python
def scoreAtividade(data):
    score = 0
    for atividade in data:
        score = score + {
            'Corrida': lambda: atividade['Distancia'] * atividade['Velocidade'],
            'Caminhada': lambda: atividade['Distancia'] * atividade['Velocidade'] * 0.5,
            'Funcional': lambda: 30,
            'Musculação': lambda: 15,
        }.get(atividade['Tipo'], lambda: 0)()
    return score
df_dados['ScoreAtividade'] = df_dados['AtividadeFisica'].apply(scoreAtividade)
df_dados['ScoreAtividade'] = 15 * df_dados['ScoreAtividade']
```

Usando elevação de 2, para impedir que as somas deve possuir um valor igual com os outros

```python
def tipoAtividade(data):
    tipo = 0
    for atividade in data:
        tipo = tipo + {
            'Corrida': lambda: 1,
            'Musculação': lambda: 2,
            'Funcional': lambda: 4
        }.get(atividade['Tipo'], lambda: 0)()
    return tipo
df_dados['Tipo'] = df_dados['AtividadeFisica'].apply(tipoAtividade)
```

### Nível de alimentação

Usando as regras de

```python
def tipoAlimentacao(data):
    tipo = 0
    for alimentacao in data:
        tipo = tipo + {
            'Raízes': lambda: 1,
            'Legumes': lambda: 2,
            'Frutas': lambda: 4,
            'Laticínios': lambda: 8,
            'Farinários': lambda: 16,
            'Proteína Animal': lambda: 32,
            'Açúcar': lambda: 64
        }.get(alimentacao, lambda: 0)()
    return tipo
def nivelAlimentacao(data):
    return {
        'Baixa': lambda: 1,
        'Moderada': lambda: 2,
        'Alta': lambda: 4,
        'Exagerada': lambda: 8,
    }.get(data, lambda: 0)()
alimentacaoTipo = df_dados['AlimentacaoTipo'].apply(tipoAlimentacao)
alimentacaoVolume = df_dados['AlimentacaoNivel'].apply(nivelAlimentacao)
df_dados["ScoreAlimentacao"] = 0.025 * np.sqrt(alimentacaoTipo * alimentacaoVolume)
```

### Número de dias

Adicionando a coluna de Número de dias para facilitar no processo

```python
df_dados["NumeroDias"] = df_dados.index + 1
```

### Geração do gráfico

E finalmente gerando a visualização

```python
import matplotlib.pyplot as plt
plt.plot(df_dados["NumeroDias"], df_dados["Peso"])
plt.plot(df_dados["NumeroDias"], df_dados["Limite"])
plt.scatter(df_dados["NumeroDias"], df_dados["Peso"],
    s=df_dados["ScoreAtividade"], c=df_dados["Tipo"], alpha=0.5)
plt.errorbar(df_dados["NumeroDias"], df_dados["Peso"],
    yerr=df_dados['ScoreAlimentacao'], ecolor="grey", elinewidth=4, alpha=0.75, fmt='none')
plt.xlabel("Dias")
plt.ylabel("Medida")
plt.legend(['Evolução', 'Objetivo'])
plt.savefig('evolution.png', dpi=300)
plt.show()
```

![plot of chunk controle_peso](/figures/controle_peso-1.svg)

### Visualização da Tabela

```python
tabela = df_dados[['Data', 'NumeroDias', 'Peso', 'Limite', 'ScoreAtividade', 'ScoreAlimentacao', 'AlimentacaoCondicao']]
tabela.to_csv('dadosOrganizados.csv')
tabela.head(15)
```
