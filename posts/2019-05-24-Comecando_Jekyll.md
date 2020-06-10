---
date: 2019-05-24 19:52:13 -0300
title: Começando com Jekyll
description: Geração de páginas estáticas com Jekyll e Markdown
category: Jekyll
tags: [Web, CMS, Jekyll]
featuredImage: ./featured/jekyll-1.jpg
coverImage: /figures/jekyll-1.jpg
---

Internet, como Isaac Asimov descreveu antes da sua criação, uma grande biblioteca onde todos poderar CMS, Sistema de gerenciamento de conteúdo,

## Instalação

Instalar Ruby + DevKit  
Verificar instalação Ruby `ruby -v` e instalação Gem `gem -v`  
Fazendo uso do Gem para install as bibliotecas do Ruby

```bash
gem install jekyll bundler
```

## Inicialização de projeto

Geração do arquivo de Gemfile, com as informações de execução em Ruby

```bash
bundle init
```

Adicionado no final do arquivo Gemfile

```bash
gem "jekyll"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?
```

## Execução e publicação

Executar o comando abaixo para disponibilizar o arquivo no caminho [http://localhost:4000](http://localhost:4000)

```shell
bundle exec jekyll serve
```

Para gerar os arquivos estáticos para publicação do projeto em produção

```shell
bundle exec jekyll build
```

## Estrutura

Arquivo `_config.yml` deve ser gerado na raiz do projeto, contém as configurações do projeto, como no exemplo:

```yml
title: Título do Projeto
permalink: ":slug"
exclude: ["node_modules", "gulpfile.js", "package.json", "yarn.lock"]
```

Ele apresenta `title` o título do projeto, `permalink` o endereço dos projetos e `exclude` uma listagem dos arquivos que serão ignorados na compilação do projeto  
Qualquer variável pode ser declarada nessa parte e acessada  

* **_posts**: Arquivos em markdown (MD) com os conteúdos dos posts
* **_layouts**: Arquivos em HTML com a estrutura das visualizações dos layouts com o conteúdo no trecho `{{ content }}` ou `{{ content | markdownify }}`
* **_includes**: Arquivos em HTML que podem ser usado para adicionar os trechos de código nas páginas, como no exemplo para adicionar footer.html: `{% include footer.html %}`

## Variáveis

Declaração de valores deve ocorrer no `_config.yml` ou no **Front Matter** das páginas

### Front Matter

As páginas devem possuir no topo o front matter com as informações da página, podendo ser usados para compor das páginas

```yml
---
nome_variavel: valor_variavel
---
```

Com as variáveis padrão de `layout` com layout será usado, da pasta **_layouts**, `permalink` o endereço para acessar a página e `published` se o arquivo será disponibilizado no build do projeto

### Uso de variáveis

As variáveis podem ser usadas com o declaração de raiz + ponto + nome da variável

* `site` Contidos no arquivo `_config.yml`
* `page` Valores localizado no front matter da página atual
* `layout` Valores localizado no front matter do layout

Exemplo para pegar e imprimir o valor do título declarado no front matter como `title: Título` com `{% page.title %}` podendo ser usando em tags e diretivas

### Listar posts

Usando o foreach na linguagem Liquid, para pegar os valores do front matter dos arquivos contidos na pasta **_posts**

```html
{% for post in site.posts %}
    <a href="{% post.slug %}">{% post.title %}</p>
{% endfor %}
```

O foreach pode ser usando como qual qualquer listagem, talvez para listar as tags no exemplo: `tags: ["Frutas", "Tortas", "Doces"]`

### Estrutura condicional

```html
{%' if post.tipo == "ingredientes" %}
{% elsif post.tipo == "receitas" %}
{% endif %}
```

## Referências

[Jekyll - Setup](https://jekyllrb.com/docs/step-by-step/01-setup/)  
[Jekyll - Variables](https://jekyllrb.com/docs/variables/)
