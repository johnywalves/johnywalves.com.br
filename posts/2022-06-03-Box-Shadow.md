---
title: Box Shadow
description: Um estudo sobre uso de sombras em CSS
date: 2022-06-06 13:36:42 -0300
featuredImage: ./featured/desert-1.jpg
coverImage: /figures/desert-1.jpg
category: CSS
tags:
  - Designer
  - HTML
  - Animação
extras:
  - box-shadow.css
---

Interação com a luz é a maneira como vemos as coisas, nessa interação com a luz é comum a geração de sombras sobre os objetos, o uso de sombras em interfaces Web trás uma sensação de volume e elevação

## Conceito

A propriedade `box-shadow` do CSS projeta uma cópia do elemento com uma cor única

```css
box-shadow: <deslocamento-horizontal> <deslocamento-vertical> <raio de desfoque>
  <raio de espalhamento> <cor>;
```

Detalhamento dos atributos

- **deslocamento horizontal**: Quando a sombra está projetada para **direita** quando positivo e esquerda para valores negativas;
- **deslocamento vertical**: Quando a sombra está projetada para **baixa** quando positivo e cima para valores negativas;
- **raio de desfoque**: Quando a sombra possui desfoque devido a difusão da luz, a irregularidade de inscidência dela;
- **raio de espalhamento** (opcional): Tamanho adicional para a sombra, somando medida apartir do centro ou reduzindo da borda quando negativo, uma boa indicação de ângulo da luz sobre o objeto;
- **cor**: Cor da sombra, lembrado a possiblidade de controlar opacidade pela cor.

## Incidência de luz

Podemos usar para projetar uma sombra e indicar luz

<div style="padding:20px 0;display:flex;justify-content:space-evenly;" >
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div class="card-box-shadow card-box-shadow-env"></div>
    <p style="text-align:center;margin-top:20px;">Ambiente</p>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div class="card-box-shadow card-box-shadow-key"></div>
    <p style="text-align:center;margin-top:20px;">Chave</p>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div class="card-box-shadow card-box-shadow-combined"></div>
    <p style="text-align:center;margin-top:20px;">Combinação</p>
  </div>
</div>

### Luz Ambiente

É a luz vindo sem direcionamento de todos os ângulos criando uma sombra difusa, fazemos ela sem colocar deslocamento

```css
box-shadow: 0 0 8px 1px #000003f;
```

### Luz Chave

Uma luz chave é direcionada, com deslocamento na direção oposta da luz, no caso vindo de cima e do lado direito para fazer essa vamos colocar o deslocamento da direita (4px) e para baixo (4px)

```css
box-shadow: 4px 4px 8px 1px #000003f;
```

Exemplos da direção das luzes

<div style="padding:20px 0;display:flex;justify-content:space-evenly;" >
  <div>
    <div style="width:80px;height:80px;margin:0 auto;border-radius:8px;box-shadow:-4px 4px 8px 2px var(--shadow-colors)"></div>
    <p style="text-align:center;margin-top:20px;">Topo-Direita</p>
  </div>
  <div>
    <div style="width:80px;height:80px;margin:0 auto;border-radius:8px;box-shadow:4px 4px 8px 2px var(--shadow-colors)"></div>
    <p style="text-align:center;margin-top:20px;">Topo-Esquerda</p>
  </div>
  <div>
    <div style="width:80px;height:80px;margin:0 auto;border-radius:8px;box-shadow:4px -4px 8px 2px var(--shadow-colors)"></div>
    <p style="text-align:center;margin-top:20px;">Baixo-Direita</p>
  </div>
  <div>
    <div style="width:80px;height:80px;margin:0 auto;border-radius:8px;box-shadow:-4px -4px 8px 2px var(--shadow-colors)"></div>
    <p style="text-align:center;margin-top:20px;">Baixo-Esquerda</p>
  </div>
</div>

Várias fontes de luzes

<div style="padding:20px 0 0;display:flex;justify-content:center" >
  <div>
    <div style="width:80px;height:80px;margin:0 auto;border-radius:8px;border:2px var(--shadow-colors) solid;box-shadow: -45px -8px 4px 1px var(--shadow-colors), 45px -8px 4px 1px var(--shadow-colors);"></div>
    <p style="text-align:center;margin-top:20px;">Baixo-Direita e Baixo-Esquerda</p>
  </div>
</div>

### Luz Combinada

Junção das luzes ambientes e luz chave, adicionando as duas sombras como uma lista separado por vírgula

```css
box-shadow: 0 0 8px 1px #000003f, 4px 4px 8px 1px #000003f;
```

## Luz de fundo

Um objeto com uma fonte de luz uniforme vindo de trás, como uma sanca no teto

<div style="padding:20px;display:flex;justify-content:center;" >
    <div style="width:160px;height:160px;border-radius:8px;box-shadow: 0 0 8px 4px var(--highlight)"></div>
</div>

Usamos uma sombra sem deslocamentos com desfoque e espalhamento

```css
box-shadow: 0 0 8px 4px #e0138c;
```

## Iluminação interna

Com as luzes vindo de forma regular internamente das margens

<div style="padding:20px;display:flex;justify-content:center;" >
    <div style="width:160px;height:160px;border-radius:8px;box-shadow: inset 0 0 8px 4px var(--highlight)"></div>
</div>

Basta incluir o `inset` para frente dos atributos

```css
box-shadow: inset 0 0 8px 4px #e0138c;
```

## Objetos espelhos

As sombras podem ser usadas para desenhar novos objetos com o mesmo formato

<div style="padding:20px;display:flex;justify-content:center;" >
    <div style="width:80px;height:80px;border:2px var(--shadow-colors) solid;border-radius:8px;box-shadow: -120px 0 0 10px var(--highlight), 100px 0 0 -10px var(--highlight)"></div>
</div>

<div style="padding:20px;display:flex;justify-content:center;" >
    <div style="width:80px;height:80px;border:2px var(--shadow-colors) solid;border-radius:50%;box-shadow: -120px 0 0 10px var(--highlight), 100px 0 0 -10px var(--highlight)"></div>
</div>

Podemos fazer o espalhamento um como positivo para aumentar e outro como negativo para reduzir o tamanho da sombra

```css
box-shadow: -120px 0 0 10px #e0138c, 100px 0 0 -10px #e0138c;
```

## Efeito de elevação com mouse

Para mudança de elevação podemos aumentar o desfoque da luz ambiente e deslocamento e desfoque para a luz chave, como no exemplo ao passar o mouse

<div style="padding:20px;display:flex;flex-direction:column;justify-content:center;">
  <div class="card-box-shadow card-box-shadow-interactive"></div>
  <p style="text-align:center;margin-top:40px;">Passe o mouse</p>
</div>

Elemento HTML com a classe `card-box-shadow`

```html
<div class="card-box-shadow"></div>
```

Estilo com `transition` de 300ms `hover` para um efeito suave passando a impressão que está subindo

```css
.card-box-shadow {
  width: 160px;
  height: 160px;
  border-radius: 8px;
  box-shadow: 0 0 8px 1px #000003f, 8px 8px 16px 2px #000003f;
  transition: box-shadow 0.3s;
}

.card-box-shadow:hover {
  box-shadow: 0 0 16px 2px #000003f, 16px 16px 32px 4px #000003f;
}
```

## Pequeno exemplo

Uma pequena chama com sombras, ou luzes :)

<div style="padding:120px 0 20px;display:flex;flex-direction:column;justify-content:center;align-items:center;">
  <div style="width:50px;height:50px;border-radius:15% 75% 50% 75%;background:#ffb726;transform:rotate(45deg);box-shadow:-10px -10px 0 15px #ff7d17, -20px -20px 0 30px #ff6236, -30px -30px 10px 45px #ff62343f;"></div>
</div>

Segue o CSS

```css
.fire {
  width: 50px;
  height: 50px;
  background: #ffb726;
  border-radius: 15% 75% 50% 75%;
  transform: rotate(45deg);
  box-shadow: -10px -10px 0 15px #ff7d17, -20px -20px 0 30px #ff6236,
    -30px -30px 10px 45px #ff62343f;
}
```

## Referências

[W3Schools - Box Shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.asp)  
[Material Designer - Light and shadows](https://material.io/design/environment/light-shadows.html)
