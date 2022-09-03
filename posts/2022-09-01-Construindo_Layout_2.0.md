---
date: 2022-09-01 21:07:54 -0300
title: Construindo Layout 2.0
description: Reconstruindo o layout desta bela página
category: CSS
featuredImage: ./featured/coffee-1.jpg
coverImage: /figures/coffee-1.jpg
tags:
  - Designer
  - CSS
  - HTML
published: false
---

Um desenvolvedor que tem um trabalho de tempo integral não precisa de um site de portfólio, os recrutadores geralmente usam o LinkedIn para encontrar profissionais, um bom perfil é mais prático, e dentro das empresas costumam ter seu próprio processo interno

Amo desenvolvimento, gosto muito de desenvolver e compartilhar minhas experiências, gerando conhecimento e documentando no processo por isso tenho uma página pessoal

## Contexto

Estava cansado da interface antiga, gerada no curso de Gatsby do [William Justen](https://willianjusten.com.br/)

![Interface do site com listagens três artigos e três projetos](/figures/layout_old.png "Interface antiga")

Resolvi que era hora de abraçar algo mais exótico e menos contido e conciso, seguindo os conselhos [Josh Comeau](https://www.joshwcomeau.com/) descritos no ebook "Building an effective dev portfolio" comecei o meu processo

## Processo

Para começar entendi minha limitação para criar um design atrativo, contratei pelo Workana um designer para dar algumas ideias e suprir essa limitação, o designer [Rodrigo Fialho](https://www.workana.com/freelancer/17653ac19b78d52f0e33c7950cab1bbb) que com a indicação de manter a cor <span style="background-color: var(--highlight); color: var(--white);font-weight:700;padding: 2px 4px;border-radius:4px;">#e0138c</span>, ele gerou a interface a seguir:

![Solução do desafio com a palavra pagos](/figures/layout_design.png "Interface do freelancer")

Ele também recomendou o uso de Parallax para as formas, resolvida pelo o uso da biblioteca [React Scroll Parallax](https://www.npmjs.com/package/react-scroll-parallax)

Citado pelo Josh, a ideia de trazer uma coisa criativa para perfil e trabalhando com o parallax fiz a animação para o scroll descendo, com fotos minhas reagindo

Para produzir os grafismos usei conhecimento prévio sobre o Inkscape, conquistado na produção das tirinhas, e vários tutorias do [Logos By Nick no Youtube](https://www.youtube.com/c/LogosByNick)

![Software Inkscape com o um vetor de triângulo aberto](/figures/layout_inkscape.png "Criando no Inkscape")

Acabei me empolgando com o triângulos mudando as formas mais arredondas para composição de triângulos

![Área de habilidades com background com vários triângulos](/figures/layout_triangles.png "Porfólio com decoração de triângulos")

Apaixonado pelo triângulo e as escolhas de cores <span style="background-color: #e352a8; color: var(--white);font-weight:700;padding: 2px 4px;border-radius:4px;">#e352a8</span>, <span style="background-color: #8857c3; color: var(--white);font-weight:700;padding: 2px 4px;border-radius:4px;">#8857c3</span> e <span style="background-color: #44b5ef; color: var(--white);font-weight:700;padding: 2px 4px;border-radius:4px;">#44b5ef</span> no processo de experimentação apareceu o efeito neon, abrindo a possibilidade de aloprar um pouco mais na área de projetos

### Projetos

Buscando algumas referências encontrei no [Behance do Achraf El Gassab](https://www.behance.net/gallery/109550375/foodly-food-web-page) uma pagina de serviço de comida, com uma organização deliciosa (piada intencional):

![Imagem com vários pratos com fundo com efeito de vidro semi-transparente](/figures/layout_food.png "Layout do site de receita")

Colocando os projetos organizados como um maneira semelhante, infelizmente as páginas fazer mais sentido representadas como retângulos e não formas divertidas, o desfoque (blur) é lindo também, anotar para um futuro uso 😉

Explorando as formas e cores, lembrei um jogo paródia com essa temática, o [Far Cry 3 - Blood Dragon](https://store.steampowered.com/app/233270/Far_Cry_3__Blood_Dragon/) que tem um background lindo, essa beleza aqui

![Área de habilidades com background com vários triângulos](/figures/layout_blood_dragon.png "Background Far Cry 3 Blood Dragon")

Levando em consideração que a página deve funcionar bem com o tema claro e o escuro, adicionei um desfoque e transparência na imagem de fundo

![Horizonte em neon com montanhas ao fundo](/figures/layout_horizont.png "Fundo da página no tema claro e escuro")

Resgatando a experiência [Neon Letters](/web/neonletters.html), para criar um letreiro neon fazendo uma composição de texto branco e várias sombras, no fundo ficou um pouco vazio, voltando ao [Logos By Nick](https://www.youtube.com/c/LogosByNick) encontrei entre os tutoriais como fazer uma séries de linhas com efeitos de fluídos com uso de lápis ondulado com alta suavição e interpolação de caminhos, que harmonizou demais como letreiro

![Luminária com várias linhas no fundo com efeitos de fluidos](/figures/layout_letters.png "Letreiro neon com fundo de fluídos")

### Atualizando Gatsby

Essa parte é mais técnica, pula quem tem interesse somente em design

Fazendo uso da ferramenta [yarn upgrade-interactive](https://classic.yarnpkg.com/lang/en/docs/cli/upgrade-interactive/) selecionei todos as mais novas versões

A versão antiga do site usava 3.1.2 resolvi atualizar para 4.22.0, para evitar erros corrigidos e aproveitar as melhorias do biblioteca, entre as novidades da nova versão são ferramenta de criação de `<head>` sem a necessidade de um biblioteca extra

#### Gatsby Head

Na versão anterior fazia uso da biblioteca [react-helmet](https://github.com/nfl/react-helmet), a novidade é que as tags `link`, `meta`, `style`, `title`, `base`, `script`, e `noscript` quando usadas são inseridas no `<head>` como descrito na documentação (Gatsby Head)(https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/) incorporando as configurações de SEO orientado pela documentação [Adicionando SEO Component](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/)

#### React Version

Após alguns problemas com a geração da versão de produção encontrei um problema com a última versão `react` e `react-dom`, trocando a última versão de `18.2.0` para major versão anterior a `17.0.2`
