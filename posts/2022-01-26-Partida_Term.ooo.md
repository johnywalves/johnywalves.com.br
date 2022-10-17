---
title: Como trapacear Term.ooo, ou jogar com um conselheiro
description: Análise de uma partida do Term.ooo com Python e Pandas para recomendar melhores possibilidades
date: 2022-01-26 12:34:26 -0300
featuredImage: ./featured/termooo_slice-1.png
coverImage: /figures/termooo-1.png
category: Python
tags:
  - Strings
  - Term.ooo
published: true
cheatsheet: true
---

O term.ooo é uma versão nacional do Wordle um jogo de adivinhar palavras com algumas indicações de acertos e erros

![6 tentativas para descobrir a palavra certa com dicas de quão perto estamos da solução](/figures/termooo-1.png "Regras Term.ooo")

## Base da IME-USP

Para iniciar a pesquisa vamos carregar a base de dados do Instituto de Matemática e Estatística Universidade de São Paulo (IME-USP)

```python
import pandas as pd

url_palavras = 'https://www.ime.usp.br/~pf/dicios/br-utf8.txt'

palavras = pd.read_csv(url_palavras, header=None)
palavras = palavras[0]
palavras.head()
```

> 0 AC  
> 1 Aarão  
> 2 Abel  
> 3 Abelardo  
> 4 Abissínia  
> Name: 0, dtype: object

Mas o jogo somente funciona com o uso de palavras com 5 letras, por isso vamos filtrar somente elas

```python
termos = palavras[palavras.str.len() == 5]
termos.head()
```

> 1 Aarão  
> 5 Abner  
> 9 Acaia  
> 10 Acker  
> 26 Aires  
> Name: 0, dtype: object

Uma possível abordagem é fazer uso para a primeira tentativa de palavras com o maior ganho de letras corretoas ou exclusão de letras, nessa análise vamos usar as palavras HERÒI e PLUMA, testando todas as vogais e algumas sílabas de três letras como NHA, LHO, DER e PAL, assim temos:

![A palavra herói com Ó em verde e a palavra pluma com P em verde e o A em amrelo](/figures/termooo-2.png "Ganhando letras")

Com essas informações podemos fazer a seguinte construção buscando as palavras na nossa lista

```python
termos[
      # Sabemos que a letra P é incial
      termos.str.startswith('p') &
      # Também que o O está na quarta posição
      (termos.str[3:4] == 'o') &
      # Possuindo a letra A exceto na última posição
      termos.str.contains('a') &
      (termos.str[4:5] != 'a') &
      # Não possuindo as letras H, E, R, I, L, U e M
      (~ termos.str.contains('h')) &
      (~ termos.str.contains('e')) &
      (~ termos.str.contains('r')) &
      (~ termos.str.contains('i')) &
      (~ termos.str.contains('l')) &
      (~ termos.str.contains('u')) &
      (~ termos.str.contains('m'))
    ]
```

> 187719 pagos  
> 188288 panos  
> 188485 papos  
> 190336 patos  
> Name: 0, dtype: object

Vendo no dicionário as palavras que achamos, vamos que as palavras além de plurais possuem significado por elas: [Pagos](https://www.dicio.com.br/pagos/), [Patos](https://www.dicio.com.br/patos/) e [Panos](https://www.dicio.com.br/panos/)

Mas [Papos](https://www.dicio.com.br/pesquisa.php?q=papos) somente existindo com o plural de papo

## Usando a base dados do jogo

Usando o código fonte em https://term.ooo/termo.js extraído em 26 de janeiro de 2022

```python
 verbetes = ["termo", "suíte", "ávido", "festa", "bebia", "honra", "ouvir", "pesco", "fungo", "pagam", "ginga", "pinta", "poder", "útero", "pilha", "sarar", "fruta", "piano", "notar", "musgo", "tensa", "melão", "feliz", "miojo", "pagos", "puros", "texto", "mamãe", "ameno", "dutos", "chuva", "mimos", "sinos", "coral", "multi", "forte", "tonta", "creta", "temor", "entes", "cabal", "ligar", "rolar", "navio", "vossa", "limbo", "calvo", "onças", "fedor", "balde", "aquém", "oxalá", "patos", "talco", "lábia", "crime", "grade", "carta", "flora", "fatal", "bifes", "comum", "pecar", "feroz", "vírus", "armar", "átrio", "couro", "êxito", "ecoar", "penca", "balão", "ateus", "fadas", "bahia", "vovós", "falir", "tecer", "arena", "capão", "justo", "meras", "tiara", "árido", "ruiva", "celas", "múmia", "lixão", "moças", "fogão", "dupla", "touca", "nosso", "sogro", "ósseo", "treta", "manhã", "cárie", "brejo", "grãos", "acima", "bolso", "sítio", "dólar", "unção", "aéreo", "peixe", "alpes", "golfo", "bunda", "conde", "meses", "perua", "raças", "suíno", "molas", "corar", "águia", "rumor", "crato", "senão", "risos", "artes", "reluz", "milha", "chato", "praga", "então", "cloro", "mexer", "beato", "combo", "lugar", "nuvem", "plebe", "lindo", "bispo", "idosa", "funil", "supor", "vital", "trigo", "rapaz", "caldo", "bocas", "nesse", "manto", "males", "renal", "minis", "caber", "menor", "seiva", "palco", "bodes", "palmo", "poeta", "mágoa", "ideia", "temer", "bolsa", "ruivo", "forno", "sismo", "exata", "razão", "radar", "pegar", "blusa", "hinos", "baita", "silos", "tricô", "chata", "vasta", "rugir", "motor", "taças", "orgia", "aspas", "total", "ardor", "prole", "tarja", "ninho", "credo", "pente", "falar", "canoa", "prato", "clave", "opaco", "anjos", "velho", "vetos", "grana", "vazia", "rumos", "altos", "mútua", "missa", "pardo", "leões", "muros", "altas", "sachê", "urano", "vigor", "tonto", "bruxa", "bacon", "órgão", "bioma", "miúdo", "reter", "agora", "fosco", "áudio", "carpa", "cacho", "fardo", "povos", "delas", "denso", "perna", "basco", "guria", "pluma", "final", "ditos", "ícone", "jaula", "duros", "pônei", "orixá", "âmago", "canos", "barão", "pomba", "ficar", "sério", "moura", "cafés", "fetos", "fênix", "nicho", "fraca", "catar", "dicas", "morno", "claro", "posar", "acesa", "dublê", "levar", "corda", "covas", "trena", "socos", "invés", "achar", "barca", "peste", "batom", "dever", "crase", "pagão", "todos", "teles", "picos", "cação", "pulga", "hidro", "bruxo", "exame", "babar", "opção", "tédio", "secar", "rival", "aguda", "tiros", "figos", "tênis", "curar", "moeda", "bater", "cubos", "verme", "ostra", "leais", "terém", "mundo", "sábio", "refil", "nomes", "belos", "parda", "nossa", "tanga", "unida", "caqui", "incas", "colar", "devir", "girar", "rimar", "panda", "laico", "sueca", "mercê", "laços", "ritos", "verde", "pesar", "nadar", "fuzuê", "manos", "obter", "mulas", "povão", "dedão", "moída", "disso", "longa", "autos", "surda", "pinos", "sarja", "poema", "ponte", "galão", "musas", "ânimo", "globo", "leito", "caçar", "ileso", "malas", "pagar", "surfe", "polvo", "vasto", "nariz", "daqui", "lombo", "lisas", "ambos", "vinda", "pipas", "couve", "toada", "benta", "árabe", "sabão", "porém", "veloz", "tábua", "seita", "grato", "falsa", "doces", "fogos", "lenta", "veias", "arcar", "danos", "arame", "poços", "união", "hiena", "tipos", "sacro", "pátio", "tripa", "menos", "tosco", "cargo", "tanto", "igual", "eixos", "sadia", "ápice", "expor", "ponta", "bonés", "farol", "rolos", "astro", "tapar", "fisco", "meter", "cesta", "calmo", "pesto", "áries", "rudes", "fiada", "feias", "óxido", "gesso", "ordem", "birra", "corvo", "dores", "docas", "pacas", "fetal", "cisne", "lapso", "exato", "penal", "pompa", "âmbar", "ossos", "jatos", "prazo", "ambas", "finas", "régua", "micos", "parco", "capaz", "pouco", "anais", "lápis", "vosso", "pilão", "linda", "canil", "infra", "ditar", "pudor", "mesmo", "lenço", "enfim", "ânsia", "morar", "sapos", "fones", "axila", "áureo", "greve", "seios", "ácido", "condo", "rolim", "divas", "sótão", "banda", "fatos", "corno", "áreas", "dente", "poros", "cinto", "santa", "visor", "casca", "ferir", "fonte", "mania", "urnas", "cacau", "cruas", "calva", "cento", "jarra", "sutil", "magos", "gênio", "sexta", "páreo", "reais", "mansa", "extra", "virar", "totem", "graxa", "capuz", "morna", "pudim", "andar", "genro", "médio", "prosa", "gases", "trono", "medos", "lente", "hotel", "jogos", "gatos", "coxas", "óleos", "polos", "aptos", "massa", "dosar", "macio", "agudo", "focar", "seção", "bloco", "intra", "atrás", "turma", "ômega", "tropa", "jarro", "motel", "galês", "focos", "penta", "fusão", "vogal", "alemã", "reína", "chefe", "verba", "campo", "ainda", "noite", "máfia", "cruel", "úmido", "assar", "quiçá", "pizza", "óvulo", "chãos", "presa", "placa", "telas", "gordo", "aliás", "quina", "estes", "pista", "leiga", "latão", "gatas", "mares", "nudez", "aliar", "areia", "fugir", "surdo", "ibero", "untar", "bolos", "pólen", "obeso", "cosmo", "preto", "pádua", "vagos", "luvas", "sarro", "gripe", "tiago", "ruína", "geral", "lages", "skate", "tórax", "liceu", "lemes", "euros", "banal", "corré", "maior", "lomba", "moção", "tênue", "pouca", "sogra", "finos", "fluxo", "líder", "cisão", "logar", "dessa", "latas", "bazar", "limão", "duque", "belas", "seara", "cocos", "secos", "cólon", "monge", "gelar", "babás", "ações", "sacos", "caros", "média", "lagos", "torto", "suave", "baque", "alçar", "bambu", "ricas", "nesta", "ótico", "noção", "tutor", "caicó", "pires", "folia", "fumar", "praia", "sírio", "corja", "anões", "toldo", "dunas", "norte", "bingo", "retro", "naves", "matos", "muito", "acaso", "viril", "vagar", "costa", "esqui", "bucho", "dogma", "burra", "optar", "desta", "árdua", "acida", "rezar", "mamar", "fuçar", "aluna", "dados", "saída", "corsa", "vodka", "vazar", "pequi", "cervo", "negar", "picar", "furor", "carma", "ótima", "ídolo", "juízo", "filho", "gambá", "perto", "gozar", "feudo", "sueco", "salas", "estas", "tíbia", "fútil", "lisos", "brasa", "facão", "sumir", "sócio", "bando", "ético", "grego", "pelos", "signo", "https", "votos", "vulto", "lótus", "pampa", "lerdo", "louça", "times", "gaita", "gosma", "tarso", "telha", "móbil", "cambe", "visão", "moela", "hífen", "murro", "sigma", "celta", "goela", "opaca", "modos", "reger", "longe", "ópera", "bamba", "cesto", "gêmeo", "zonas", "gibis", "vídeo", "carga", "lonas", "vanda", "julho", "ondas", "anual", "longo", "roupa", "treco", "bucal", "memes", "aroma", "citar", "vulgo", "bobas", "revés", "bares", "lidar", "aveia", "novos", "bravo", "greco", "mirar", "modas", "nasal", "cedro", "camas", "atlas", "anzol", "comer", "calar", "linho", "sadio", "avaré", "roçar", "major", "átila", "tubos", "bolha", "arcos", "selva", "fados", "sagaz", "natas", "puxar", "olhos", "meias", "velha", "angra", "papos", "duplo", "fixar", "garra", "ímpio", "algum", "setor", "japão", "pisos", "copel", "sauna", "salsa", "aonde", "fúria", "densa", "besta", "tribo", "loura", "socar", "índio", "preço", "crise", "teses", "sarda", "clara", "legal", "frase", "ceder", "latam", "amaro", "loção", "poças", "praça", "turco", "boato", "olhar", "valor", "vácuo", "casar", "geada", "sódio", "dotar", "cavar", "quais", "opala", "elite", "banjo", "becos", "ultra", "vivos", "truco", "terno", "posse", "bonde", "robôs", "cetro", "frios", "pneus", "valer", "zerar", "pedir", "matar", "leite", "mista", "bardo", "porre", "lince", "duche", "gesto", "morta", "vazão", "titia", "única", "dueto", "gávea", "pomar", "vocal", "época", "busto", "calor", "sutis", "faixa", "prata", "pavor", "prado", "pezão", "genes", "lúpus", "afins", "psico", "cacos", "ótica", "culto", "jovem", "nitro", "ideal", "negro", "lunar", "balsa", "norma", "zelar", "lutar", "ducha", "nisso", "sampa", "ciclo", "rosca", "diodo", "frota", "moral", "fibra", "adeus", "pedra", "culta", "turno", "pobre", "júlia", "poção", "favas", "solar", "podar", "peões", "idade", "clipe", "pausa", "avelã", "naipe", "piada", "sucos", "trufa", "parar", "cabos", "subir", "bulbo", "pilar", "ébano", "fauna", "mamão", "rotas", "adaga", "dorso", "átomo", "repor", "parvo", "canja", "urubu", "vodca", "clico", "pedal", "sorte", "tecno", "sinal", "boate", "ursos", "coisa", "botão", "rombo", "moita", "fases", "raros", "censo", "polar", "perda", "remos", "trens", "tenor", "viral", "angus", "cupom", "tosca", "cheia", "terra", "menta", "brava", "judeu", "hiato", "raiva", "épica", "casos", "grega", "meiga", "pegos", "gíria", "rosas", "lares", "cinco", "zeros", "vezes", "desde", "larva", "vetor", "clube", "beata", "minha", "congo", "trair", "laudo", "mapas", "fosso", "zebra", "tolos", "banir", "tátil", "mimar", "ricos", "setas", "essas", "hélio", "cabra", "móvel", "sedas", "motos", "irmãs", "jurar", "lobos", "manga", "nobel", "persa", "pirão", "licor", "gerir", "linha", "algoz", "abade", "pombo", "zinco", "faraó", "copos", "cinta", "gorro", "rodar", "tigre", "doada", "táxis", "ímpar", "palha", "dócil", "quase", "sushi", "mover", "graça", "mogno", "papel", "porca", "ética", "cheio", "bolão", "féria", "carro", "farsa", "redor", "doido", "vigas", "quota", "rampa", "oeste", "facas", "diabo", "balas", "vozes", "valas", "tango", "pesos", "oásis", "rímel", "haras", "neles", "foice", "lilás", "gente", "junho", "tirar", "puxão", "parir", "circo", "ampla", "lídia", "lebre", "óscar", "mesma", "nisto", "haste", "sopas", "donos", "vilas", "rabos", "pirar", "rádio", "farra", "senso", "nunca", "célia", "certo", "veado", "acolá", "baias", "mirim", "vinil", "souza", "senha", "luxos", "cisto", "farpa", "estar", "fofos", "haver", "avião", "natal", "rigor", "buquê", "sonar", "álbum", "lixos", "atriz", "verbo", "coifa", "homem", "germe", "lábio", "nessa", "parma", "clima", "misto", "bocal", "bacia", "micro", "vagão", "nulos", "topar", "abono", "burro", "inata", "braço", "tempo", "gerar", "canal", "gêmea", "choça", "ritmo", "ótimo", "lados", "ralar", "débil", "atual", "capim", "muita", "alhos", "votar", "tenso", "hiper", "fórum", "fator", "galho", "lixar", "ramos", "areal", "intro", "febre", "ávida", "loiro", "turca", "jejum", "alado", "ousar", "amplo", "fugas", "impor", "museu", "manso", "delta", "idoso", "juíza", "amoré", "nozes", "fiapo", "cujos", "abrir", "tripé", "elena", "sexto", "retas", "civil", "feira", "servo", "névoa", "patas", "jogar", "sanha", "giros", "esses", "doida", "senda", "bicos", "rever", "folha", "palma", "sarau", "guará", "filha", "cível", "vênus", "fugaz", "óbvio", "sacra", "focal", "mosca", "touro", "punir", "barba", "rocha", "casco", "panos", "açude", "terço", "roxas", "gotas", "clica", "favor", "usual", "óssea", "rubro", "rosto", "nevar", "dardo", "brega", "prece", "regar", "frias", "rolha", "nepal", "trenó", "casta", "garça", "torpe", "fixos", "jegue", "rotor", "frade", "pulos", "macro", "hábil", "rouca", "caule", "guiar", "horto", "jules", "ilesa", "lidos", "rojão", "somar", "mitos", "cílio", "ninar", "achém", "santo", "assim", "netos", "caspa", "ninja", "cegos", "fácil", "altar", "algas", "caras", "farda", "sunga", "lobão", "cupim", "horta", "vespa", "lorde", "deusa", "vacas", "amena", "relva", "vidas", "abril", "super", "criar", "nível", "sócia", "grupo", "adega", "voraz", "vasos", "usina", "ratos", "terça", "cueca", "brisa", "feita", "vetar", "pódio", "fossa", "coeso", "anéis", "lírio", "tinto", "vôlei", "serva", "mútuo", "trapo", "metro", "nobre", "ombro", "úmida", "olhão", "antas", "fraga", "louco", "placê", "gueto", "punho", "amora", "redes", "cofre", "síria", "vária", "trama", "lajes", "ágeis", "ganso", "túlio", "óvnis", "latim", "obras", "golpe", "rente", "vício", "russo", "vazio", "antão", "galos", "civis", "islão", "nação", "bodas", "bicho", "sabiá", "ágape", "salmo", "podre", "alvos", "loira", "gusta", "cetim", "unhas", "fobia", "salão", "praxe", "bruta", "lenha", "clero", "jeito", "potes", "tumba", "viana", "ninfa", "ruins", "itens", "sarna", "tomar", "macia", "sabor", "caída", "leque", "justa", "tocha", "lazer", "feixe", "selos", "etapa", "único", "dúzia", "pavão", "sigla", "durar", "pirei", "fazer", "guião", "truta", "línea", "tinta", "graus", "pavio", "horda", "torta", "deter", "abada", "clone", "tufão", "polpa", "trupe", "malta", "irado", "selar", "boina", "atuar", "corpo", "magia", "maçãs", "pinho", "preta", "fosca", "motas", "gruta", "bossa", "magro", "lento", "aptas", "lousa", "falso", "tosar", "aluno", "souto", "padre", "pazes", "metal", "assis", "meios", "lenda", "calos", "bônus", "crepe", "antes", "milho", "lulas", "símio", "drama", "puras", "chave", "grama", "raras", "mesas", "harpa", "treze", "fraco", "epóxi", "gorda", "magra", "leigo", "hindu", "adiar", "caixa", "vocês", "magna", "fofas", "cones", "varal", "miúda", "úteis", "bocão", "teias", "russa", "lúmen", "recém", "fêmea", "errar", "frear", "macho", "série", "viver", "damas", "rasos", "fêmur", "feios", "sutiã", "bumba", "árduo", "sujar", "golfe", "ração", "trios", "cinza", "barco", "rasto", "malte", "marte", "almas", "arder", "naval", "tabus", "vinte", "nervo", "reler", "xampu", "lotar", "reles", "erros", "aceda", "ponto", "frevo", "ervas", "copas", "pisar", "fruto", "alter", "beber", "trevo", "lesão", "grata", "certa", "botar", "tocar", "sujos", "amada", "cerne", "valsa", "mudos", "áurea", "herói", "ciúme", "juros", "marra", "rasas", "grado", "dedos", "mambo", "bruto", "reúso", "dieta", "telão", "depor", "tacos", "turnê", "solos", "tenra", "minor", "litro", "domar", "míope", "gafes", "polir", "dizer", "mídia", "autor", "bucha", "remar", "ávila", "serpa", "miolo", "letal", "plena", "fluir", "viado", "sedes", "calma", "cenas", "medir", "zíper", "selim", "iscas", "pleno", "outra", "lição", "pulha", "mural", "feras", "todas", "aérea", "tetra", "índex", "outro", "ofurô", "irmão", "coçar", "furar", "porco", "advir", "breve", "êxodo", "vilão", "letra", "vapor", "libra", "amido", "imune", "pular", "lagoa", "bomba", "tengo", "horas", "casal", "índia", "sacar", "meros", "túnel", "cubas", "rural", "mudar", "chapa", "usada", "atroz", "arroz", "bobos", "etnia", "neném", "torga", "órfão", "calda", "moços", "chalé", "furos", "ontem", "cópia", "raiar", "novas", "cauda", "meigo", "vinho", "joias", "lavar", "bufão", "aulas", "lojas", "safra", "odiar", "tchau", "mecha", "carne", "prumo", "fotos", "junco", "épico", "tesão", "refém", "manta", "raios", "humor", "sanar", "dique", "berço", "flúor", "brito", "sósia", "local", "gemer", "saber", "elfos", "visar"]
 verbetes[0:5]
```

> ['termo', 'suíte', 'ávido', 'festa', 'bebia']

Aplicando as mesmas regras de anteriormente

```python
filtrado = filter(lambda verbete:
       # Sabemos que a letra P é incial
       (verbete[0:1] == 'p') and
       # Também que o O está na quarta posição
       (verbete[3:4] == 'o') and
       # Possuindo a letra A exceto na última posição
       verbete.find('a') != -1 and
       (verbete[4:5] != 'a') and
       # Não possuindo as letras H, E, R, I, L, U e M
       (verbete.find('h') == -1) and
       (verbete.find('e') == -1) and
       (verbete.find('r') == -1) and
       (verbete.find('i') == -1) and
       (verbete.find('l') == -1) and
       (verbete.find('u') == -1) and
       (verbete.find('m') == -1),
       verbetes)
list(filtrado)
```

> ['pagos', 'patos', 'papos', 'panos']

Ops! Tivemos mesmos resultados, vamos usar essas palavras

![Solução do desafio com a palavra pagos](/figures/termooo-3.png "Resolução do desafio")

Agora vamos comparar as listas de temos

```python
print(len(termos))
print(len(verbetes))
```

> 6026  
> 1597

A listagem oficial é um quarto da listagem do IME-USP, que possui nomes próprios e outras flexibilização de palavras

Podemos usar a base de dados do jogo para buscar a palavra ideal de inicío e ter o maior número de ganho possível, mas vamos deixar para a próxima :)
