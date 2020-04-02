---
date: 2019-06-20 19:35:00 -0300
title: Classificação de Texto com NLTK
description: Lorem lipsunm
category: Python
tags: ["Linguagem Natural", "Machine Learning", Python]
coverImage: /assets/img/python-1.jpg
published: false
---

```python
import nltk
import json
#nltk.download()
#nltk.download('rslp')
#nltk.download('stopwords')
```

```python
stopwordsnltk = nltk.corpus.stopwords.words('portuguese')
stopwordsnltk.append('vou')
stopwordsnltk.append('tão')
```

```python
def aplicastemmer(texto):
    stemmer = nltk.stem.RSLPStemmer()
    frasesstemming = []
    for(palavras, emocao) in texto:
        comstemming = [str(stemmer.stem(p)) for p in palavras.split() if p not in stopwordsnltk]
        frasesstemming.append((comstemming, emocao))
    return frasesstemming

frasescomstemmerTreinamento = aplicastemmer(basetreinamento)
frasescomstemmerTeste = aplicastemmer(baseteste)
#print(frasescomstemmer)

def buscaPalavras(frases):
    todasPalavras = []
    for(palavras, emocao) in frases:
        todasPalavras.extend(palavras)
    return todasPalavras

palavrasTreinamento = buscaPalavras(frasescomstemmerTreinamento)
palavrasTeste = buscaPalavras(frasescomstemmerTeste)

def buscaPalavrasUnicas(frequencia):
    palavras = nltk.FreqDist(frequencia)
    freq = palavras.keys()
    return freq

palavrasUnicasTreinamento = buscaPalavrasUnicas(palavrasTreinamento)
palavrasUnicasTeste = buscaPalavrasUnicas(palavrasTeste)

def extratorPalavrasTreinamento(documento):
    doc = set(documento)
    caracteristicas = {}
    for palavras in palavrasUnicasTreinamento:
        caracteristicas['%s' % palavras] = (palavras in doc)
    return caracteristicas

def extratorPalavrasTeste(documento):
    doc = set(documento)
    caracteristicas = {}
    for palavras in palavrasUnicasTreinamento:
        caracteristicas['%s' % palavras] = (palavras in doc)
    return caracteristicas

baseCompletaTreinamento = nltk.classify.apply_features(extratorPalavrasTreinamento, frasescomstemmerTreinamento)
baseCompletaTeste = nltk.classify.apply_features(extratorPalavrasTeste, frasescomstemmerTeste)

classificador = nltk.NaiveBayesClassifier.train(baseCompletaTreinamento)

teste = "A noite está escuro"
testeStemming = []
#deixando somente radicais
stemmer = nltk.stem.RSLPStemmer()
for(palavrasTreinamento) in teste.split():
    comStemming = [p for p in palavrasTreinamento.split()]
    testeStemming.append(str(stemmer.stem(comStemming[0])))

novo = extratorPalavrasTeste(testeStemming)
classnovo = classificador.classify(novo)

distribuicao = classificador.prob_classify(novo)
for classe in distribuicao.samples():
    print('%s : %f' % (classe, distribuicao.prob(classe)))
```
