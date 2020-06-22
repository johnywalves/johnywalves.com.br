---
title: Gradient Boosting Regressor com scikit-learn
description: Resumão para aplicação de Gradient Boosting Regressor para fonte de dados Pandas
date: 2020-06-14 12:08:58 -0300
featuredImage: ./featured/graphics-1.jpg
coverImage: /figures/graphics-1.jpg
category: Py
tags:
  - Python
  - ML
  - Regressor
---

Vamos usar **houses_to_rent_v2.csv** da página [Kaggle - Dataset houses to rent in diferents cities in Brazil](https://www.kaggle.com/rubenssjr/brasilian-houses-to-rent)

## Instalação

Instalação das bibliotecas **pandas** para manipular as fontes de dados e bibliotecas de gráficos **matplotlib** e **seaborn**

```bash
pip install pandas matplotlib seaborn
```

Instalar os pacotes de machine learning **sklearn** e as ferramentas de otimização **scikit-optimize** fazendo uso do pelo PyPi com o comando

```bash
pip install sklearn scikit-optimize
```

## Preparação das fontes de dados

```python
# Bibliotecas de manipulação de fontes de dados e matemática
import pandas as pd
import numpy as np

# Bibliotecas de geração de gráficos
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib.pyplot import figure

# Bibliotecas de Machine Learning
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.metrics import mean_squared_error
```

```python
df = pd.read_csv("./houses_to_rent_v2.csv")

print(df.shape)
df.head(3)
```

(10692, 13)

| | **city** | **area** | **rooms** | **bathroom** | **parking spaces** | **floor** | **animal** | **furniture** | **hoa (R$)** | **rent amount (R$)** | **property tax (R$)** | **fire insurance (R$)** | **total (R$)** |
|:---:|---|---:|---:|---:|---:|---:|---|---|---:|---:|---:|---:|---:|
| 0 | São Paulo | 70 | 2 | 1 | 1 | 7 | acept | furnished | 2065 | 3300 | 211 | 42 | 5618 |
| 1 | São Paulo | 320 | 4 | 4 | 0 | 20 | acept | not furnished | 1200 | 4960 | 1750 | 63 | 7973 |
| 2 | Porto Alegre | 80 | 1 | 1 | 1 | 6 | acept | not furnished | 1000 | 2800 | 0 | 41 | 3841 |

```python
dropped = df.drop(["hoa (R$)", "rent amount (R$)", "property tax (R$)", "fire insurance (R$)"], axis=1)
dropped.dtypes
```

city              object
area               int64
rooms              int64
bathroom           int64
parking spaces     int64
floor             object
animal            object
furniture         object
total (R$)         int64
dtype: object

```python
cleared = dropped[dropped["total (R$)"] < 50000]
```

```python
adjusted = pd.get_dummies(cleared)

print(adjusted.shape)
```

(10685, 49)

```python
x = adjusted.drop(["total (R$)"], axis=1)
y = adjusted["total (R$)"]

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=42)

x_train = x_train.to_numpy()
x_test = x_test.to_numpy()
y_train = y_train.to_numpy()
y_test = y_test.to_numpy()

print("Atributos: Treino", x_train.shape, "Teste", x_test.shape)
print("Valores: Treino", y_train.shape, "Teste", y_test.shape)
```

Atributos: Treino (7479, 48) Teste (3206, 48)
Valores: Treino (7479,) Teste (3206,)

## Gerar predição de valores

```python
gbr = GradientBoostingRegressor(criterion="mse", random_state=42)
gbr.fit(x_train, y_train)

y_predict = gbr.predict(x_test)
mean_squared_error(y_predict, y_test)
```

5890320.544877565

```python
plt.figure(figsize=(18, 9))

sns.scatterplot(x=y_test, y=y_predict)
sns.scatterplot(x=y_test, y=y_test)

plt.savefig("gbr_scatter.svg", formatstr="svg")
plt.show()
```

![GBR Scatter](/figures/gbr_scatter.svg)

## Otimização dos parametros

```python
from skopt import gp_minimize
from skopt.utils import use_named_args

def fitness(params):
    learning_rate = params[0]
    n_estimators = params[1]
    min_samples_split = params[2]
    min_samples_leaf = params[3]

    model_gbr = GradientBoostingRegressor(learning_rate=learning_rate, 
                                        n_estimators=n_estimators,
                                        min_samples_split=min_samples_split.astype(int), 
                                        min_samples_leaf=min_samples_leaf.astype(int), 
                                        random_state=42)

    model_gbr.fit(x_train, y_train)
    gbr_predict = model_gbr.predict(x_test)
    return mean_squared_error(y_test, gbr_predict)

space = [(1e-2, 1e-1), # learning_rate
         (1, 1000), # n_estimators
         (2, 100), # min_samples_split
         (1, 100)] # min_samples_leaf, # subsample, # max_features

resultado_gp = gp_minimize(fitness, space, random_state=42, n_calls=20, n_random_starts=10, verbose=1)

print(resultado_gp.x)
print(resultado_gp.fun)
```

## Referências

[How to Automate Hyperparameter Optimization](https://www.kdnuggets.com/2019/06/automate-hyperparameter-optimization.html)  
[scikit-learn: sklearn.ensemble.GradientBoostingRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html)  
