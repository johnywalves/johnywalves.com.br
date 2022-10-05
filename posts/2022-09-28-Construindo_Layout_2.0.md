---
title: Construindo o layout 2.0, refazendo esta página
description: Documentando o processo e descobertas na reconstrução o layout desta bela página
date: 2022-09-28 21:07:54 -0300
featuredImage: ./featured/coffee-1.jpg
coverImage: /figures/coffee-1.jpg
category: CSS
tags:
  - Designer
  - Cores
  - Ambiente
published: true
cheatsheet: false
---

Um desenvolvedor que tem um trabalho de tempo integral não precisa de um portfólio, os recrutadores geralmente usam o LinkedIn para encontrar profissionais, um bom perfil lá é mais prático, e dentro das empresas costumam ter seu próprio processo interno

Amo desenvolvimento, gosto muito de aprender e experimentar coisas novas, documentando parte desse processo para consulta futura e compartilhar o aprendizado, isso tenho uma página pessoal

## Contexto

Estava cansado da interface antiga, gerada no curso de Gatsby do [William Justen](https://willianjusten.com.br/)

![Interface do site com listagens três artigos e três projetos](/figures/layout_old.jpg "Interface antiga")

Resolvi que era hora de abraçar algo mais exótico e menos contido e conciso, seguindo alguns conselhos do [Josh Comeau](https://www.joshwcomeau.com/) descritos no ebook "Building an effective dev portfolio" comecei o meu processo

## Início

Para começar entendi minha limitação para criar um design atrativo, contratei pelo Workana um designer para dar algumas ideias e suprir essa limitação, o designer [Rodrigo Fialho](https://www.workana.com/freelancer/17653ac19b78d52f0e33c7950cab1bbb) que com a indicação de manter a cor <span style="background-color: var(--highlight);" class="text-color">#e0138c</span>, ele gerou a interface a seguir:

![Solução do desafio com a palavra pagos](/figures/layout_design.png "Interface do freelancer")

Ele também recomendou o uso de Parallax para as formas, resolvida pelo o uso da biblioteca [React Scroll Parallax](https://www.npmjs.com/package/react-scroll-parallax)

Recomendado pelo Josh, trazer uma coisa criativa para perfil, trabalhei com o _scroll_ da tela fiz uma animação reagindo a barra descendo

![Homem em tons de cinza olhando para cima](/figures/layout_react.jpg "Reagindo a barra descendo")

Para produzir os grafismos usei conhecimento prévio sobre o Inkscape, conquistado na produção das tirinhas, e vários tutorias do [Logos By Nick no Youtube](https://www.youtube.com/c/LogosByNick)

![Software Inkscape com o um vetor de triângulo aberto](/figures/layout_inkscape.png "Criando no Inkscape")

Acabei me empolgando com os triângulos mudando as formas mais arredondas para composição de triângulos

![Área de habilidades com background com vários triângulos](/figures/layout_triangles.jpg "Porfólio com decoração de triângulos")

Apaixonado pelos triângulos e as cores recomendadas <span style="background-color: #e0138c;" class="text-color">#e0138c</span>, <span style="background-color: #8857c3;" class="text-color">#8857c3</span> e <span style="background-color: #44b5ef;" class="text-color light">#44b5ef</span>, no processo de experimentação apareceu o efeito neon, abrindo a possibilidade de aloprar um pouco mais na área de projetos

## Projetos

Buscando algumas referências encontrei no [Behance do Achraf El Gassab](https://www.behance.net/gallery/109550375/foodly-food-web-page) um desenho para uma página de serviço de alimentação, com uma organização deliciosa (piada intencional):

![Imagem com vários pratos com fundo com efeito de vidro semi-transparente](/figures/layout_food.jpg "Layout do site de receita")

Me inspirando, organizei os projetos de uma maneira semelhante, infelizmente as páginas fazem mais sentido serem representadas com retângulos, diferente dos pratos, o efeito de desfoque (_blur_) simulando vidro é lindo, anotar para um futuro uso 😉

Explorando as formas e cores, lembrei um jogo que paródia essa temática, o [Far Cry 3 - Blood Dragon](https://store.steampowered.com/app/233270/Far_Cry_3__Blood_Dragon/) que tem um background lindo, essa beleza aqui:

![Área de habilidades com background com vários triângulos](/figures/layout_blood_dragon.jpg "Background Far Cry 3 Blood Dragon")

Levando em consideração que a página deve funcionar bem com o tema claro e o escuro, adicionei um desfoque e transparência na imagem de fundo com esse resultado:

![Horizonte em neon com montanhas ao fundo](/figures/layout_horizont.jpg "Fundo da página no tema claro e escuro")

Resgatando a experiência [Neon Letters](/web/neonletters.html), para criar um letreiro neon, com a composição de texto branco e várias sombras, criei o descrição da página. No fundo ficou um pouco vazio, voltando ao [Logos By Nick](https://www.youtube.com/c/LogosByNick) encontrei nos tutoriais como fazer uma séries de linhas para dar efeito de fluídos, com uso de lápis ondulado com alta suavição e interpolação de caminhos (_paths_), que harmonizou demais com o letreiro

![Luminária com várias linhas no fundo com efeitos de fluidos](/figures/layout_letters.jpg "Letreiro neon com fundo de fluídos")

## Atualizando Gatsby

_Essa parte é mais técnica, para quem tem somente interesse em design pode pular para **Listagem de Artigos e Tirinhas** sem prejuízo_

Fazendo uso da ferramenta [yarn upgrade-interactive](https://classic.yarnpkg.com/lang/en/docs/cli/upgrade-interactive/) selecionei todos as mais novas versões, isso pode dar muito problema só faça quando estiver disposto a lidar com eles

A versão antiga do site usava `3.1.2` resolvi atualizar para `4.22.0`, versão mais nova, entre as novidades da nova versão, é a ferramenta de criação de `<head>` sem a necessidade de uma biblioteca como o `gastby-helmet` anteriormente usada

### Gatsby Head

Na versão anterior fazia uso da biblioteca [react-helmet](https://github.com/nfl/react-helmet), a novidade é que as tags `link`, `meta`, `style`, `title`, `base`, `script`, e `noscript` quando usadas são inseridas no `<head>` como descrito na documentação [Gatsby Head](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/)

Incorporando as configurações de SEO orientado pela documentação [Adicionando SEO Component](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/) para melhorar os resultados de pesquisa no Google Search e gerar os cards com _thumbnail_ e descrição quando compartilhado o link

![Homem em tons de cinza abaixado olhando para frente](/figures/layout_thumbnail.jpg "Reagindo a barra descendo")

Realizado com sucesso para todas as redes sociais testada, exceto no Whatsapp, futuramento resolvo essa situação ou se souber o que falta comente por favor ou entre em contato por alguma rede social

### React Version

Após alguns problemas com a geração da versão de produção, encontrei um conflito com a última versão do `react` e do `react-dom`, resolvido dando um _downgrade_ a última versão `18.2.0` para última _major_ anterior a `17.0.2`

## Google Lighthouse

O relatório do Google Lighthouse apontou alguns problemas como acessibilidade, resolvida nos ajustes:

- Aumento do tamanho de fontes e contraste entre as letras e o fundo;
- Adição para descrição no atributo `alt` para as imagens, com a descrição das imagens;
- Adição da informação `arial-label` com a descrição dos links que somente possuem imagens.

Para boas práticas foi necessários os ajustes

- Respeitar a ordem de para os cabeçalhos `h1`, `h2`, `h3`, `h4` e `h5`;
- Nas listagens `ul` os filhos precisam ser itens `li`, alguns links estavam encapsulando os itens.

Para o SEO ainda alguns metadados foram aplicados, com base no artigo [HTML Started](/html-started/)

Depois dessas aplicações consegui o resultado esperado, 100 pontos em todos os requisitos

![Luminária com várias linhas no fundo com efeitos de fluidos](/figures/layout_lighthouse.png "Letreiro neon com fundo de fluídos")

Ver esses confetes dá uma alegria no coração

## Listagem de Artigos e Tirinhas

A versão antiga da listagem de artigos tinha um certo charme por ser simples, as imagens dos artigos e a listagem com tags dos artigos passa uma mensagem clara

![Lista de artigos com barra lateral com foto pequena e links](/figures/layout_old_list.jpg "Lista antiga de artigos")

Mantendo a simplicidade da listagem dos artigos e trazendo sobreposição de cinza com magenta, característica dessa nova interface, adicionei um filtro de escala de cinza para as imagens, fazendo elas ganharam cores saturadas quando o mouse passa por cima e as tags para passar mais uma experiência de etiqueta, coloquei um buraco e com anel de metal para passar a linha

Adicionei também uma imagem minha com uma animação de sério e sorrindo, com um fundo triângulo para ter o efeito moderno da página inicial

Mas a melhor parte foi a adição dos links das categorias para ajudar no momento da exploração dos artigos do lado direito

![Lista de artigos com barra no topo com links e uma foto grande dentro de um triângulo](/figures/layout_new_list.jpg "Lista nova de artigos")

Para mim na página de tirinhas, não fazia sentido usar uma imagen minha juntos com os personagens, então criei uma versão minha dentro do mesmo modelo deles

![Personagem de tirinha sorrindo com barba e camiseta cor vinho](/figures/layout_character.png "Personagem de tirinhas sorrindo")

## Rodapé

Na versão antiga havia duas barras laterais, que na versão mobile se convertiam em cabeçalho e rodapé, elas eram bem simples com os links das páginas e redes sociais, para a nova versão aproveitei as lições aprendidas, sobre GIMP, efeito neon e alguns filtros para criar essa imagem linda, usar uma jaqueta de couro faria mais sentido para a imagem...

![Foto de alguém em semi perfil com gola levantada com óculos escuros](/figures/layout_rodape.jpg "Imagem do rodapé")

Para completar adicionei os links das redes sociais e os links dos RSS

## Conclusão

O exercício foi muito divertido, exceto a parte de fazer a responsividade das páginas e vários testes, exercitei bastante minhas habilidades de HTML, CSS e softwares de edição de imagens (GIMP) e vetores (Inkscape) e ganhei mais experiência com Gatsby e GraphQL.
