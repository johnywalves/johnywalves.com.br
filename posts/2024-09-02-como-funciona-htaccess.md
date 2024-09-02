---
date: 2024-09-20 07:52:23 -0300
title: Rotas Apache - Como funciona o .htaccess
description: Configuração Apache HTTP Server com .htaccess para regras de diretórios
featuredImage: ./featured/way-2.jpg
coverImage: /figures/way-2.jpg
category: Web
tags:
  - Web
  - Servidor
  - Apache
published: true
cheatsheet: false
---

Recentemente trabalhando em um projeto em PHP, tive a necessidade e entender como funciona o `.htaccess` para configurar o Apache HTTP Server, mais conhecido como Apache 2

## Redirecionamento de diretórios

Ao buscar alguns endereços queremos informar para os navegadores, ou qualquer ferramenta que esteja consumindo o serviço, que alguns comportamentos devem se diferenciar do padrão

### Habilitar o módulo

Para realizar o redirecionamento devemos habilitar o módulo apropriado

No Linux somente basta executar o comando:

```bash
sudo a2enmod rewrite
```

Dentro do `.htaccess` depois de conferir a disponibilidade do módulo devemos habilitar e adicionar as diretivas como no trecho abaixo

```ruby
<IfModule mod_rewrite.c>
    RewriteEngine on

   # onde moram os redirecionamentos
</IfModule>
```

### Exemplos de redirecionamentos

Redirecionamento do protocolo HTTP para HTTPS, podemos adicionar a condição `RewriteCond %{HTTP_HOST} !localhost` para facilitar teste locais

```ruby
RewriteCond %{HTTPS} off
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Redirecionamento do subdomínio "www" para subdomínio vazio

```ruby
RewriteCond %{HTTPS} on
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

Forçar a existência de `/` no final dos endereços

```ruby
RewriteCond %{REQUEST_URI} /+[^\.]+$
RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
```

Redirecionamento para projetos PHP trabalhando parâmetro de rotas

```ruby
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php?/$1 [L]
```

## Definições de caracteres

Essa não é uma lista completa, sim um resumo para consulta

| Carácter/Flag      | Definição                                                                                                                                                                                                     |
| ------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| #                  | Instrui o servidor a ignorar a linha. Usado para incluir comentários.                                                                                                                                         |
| [F]                | Proibido: instrui o servidor a retornar um erro 403 Proibido ao cliente.                                                                                                                                      |
| [L]                | Última regra: instrui o servidor a parar de reescrever após a diretiva anterior ser processada.                                                                                                               |
| [N]                | Próximo: instrui o Apache a executar novamente a regra de reescrita até que toda a reescrita esteja concluída.                                                                                                |
| [G]                | Perdido: instrui o servidor a entregar a mensagem de status Perdido (não existe mais).                                                                                                                        |
| [P]                | Proxy: instrui o servidor a lidar com solicitações usando o mod_proxy.                                                                                                                                        |
| [C]                | Encadeamento: instrui o servidor a encadear a regra atual com a regra anterior.                                                                                                                               |
| [R]                | Redirecionar: instrui o Apache a redirecionar para a URL especificada. Observe que o código de status padrão para o sinalizador [R] é 302 (temporário); para permanentes, use [R=301].                        |
| [NC]               | Sem diferenciação de maiúsculas e minúsculas: define qualquer argumento associado como insensível a maiúsculas e minúsculas.                                                                                  |
| [PT]               | Passar adiante: instrui o mod_rewrite a passar a URL reescrita para processamento adicional.                                                                                                                  |
| [OR]               | Ou: especifica um "ou" lógico que vincula duas expressões, de modo que se qualquer uma for verdadeira, a regra associada será aplicada.                                                                       |
| [NE]               | Sem escape: instrui o servidor a interpretar a saída sem escapar caracteres.                                                                                                                                  |
| [NS]               | Sem sub-requisição: instrui o servidor a pular a diretiva se for uma sub-requisição interna.                                                                                                                  |
| [QSA]              | Anexar string de consulta: instrui o servidor a adicionar a string de consulta ao final da expressão.                                                                                                         |
| [S=x]              | Pular: instrui o servidor a pular as próximas "x" regras se uma correspondência for detectada.                                                                                                                |
| [E=var:value]      | Variável de ambiente: instrui o servidor a definir a variável "var" para "valor".                                                                                                                             |
| [T=MIME-type]      | Tipo MIME: declara o tipo MIME do recurso alvo.                                                                                                                                                               |
| [xyz]              | Classe de caracteres: qualquer caractere dentro dos colchetes será uma correspondência. Por exemplo, “[xyz]” corresponderá a qualquer um dos caracteres x, y ou z.                                            |
| [xyz]+             | Classe de caracteres na qual qualquer combinação de itens dentro dos colchetes será uma correspondência. Por exemplo, “[xyz]+” corresponderá a qualquer número de x's, y's, z's ou qualquer combinação deles. |
| [^xyz]             | Não dentro de uma classe de caracteres. Por exemplo, [^xyz] corresponderá a qualquer caractere que não seja x, y ou z.                                                                                        |
| [a-z]              | Um hífen "-" entre dois caracteres dentro de uma classe de caracteres denota o intervalo de caracteres entre eles. Por exemplo, [a-zA-Z] corresponde a todas as letras minúsculas e maiúsculas.               |
| a{n}               | Número exato, n, do caractere anterior, a. Por exemplo, x{3} corresponde exatamente a três x's.                                                                                                               |
| a{n,}              | Especifica n ou mais do caractere anterior. Por exemplo, x{3,} corresponde a três ou mais x's.                                                                                                                |
| a{n,m}             | Especifica um intervalo de números, entre n e m, do caractere anterior, a. Por exemplo, x{3,7} corresponde a três, quatro, cinco, seis ou sete x's.                                                           |
| ()                 | Usado para agrupar caracteres juntos, considerando-os como uma única unidade. Por exemplo, (htaccess)?book corresponderá a "book", com ou sem o prefixo "htaccess".                                           |
| ^                  | Denota o início de uma expressão regular. Por exemplo, "^Hello" corresponderá a qualquer string que comece com "Hello". Sem o acento circunflexo "^", "Hello" corresponderia a qualquer parte da string.      |
| $                  | Denota o final de uma expressão regular. Por exemplo, "world$" corresponderá a qualquer string que termine com "world". Sem o cifrão "$", "world" corresponderia a qualquer parte da string.                  |
| ?                  | Declara como opcional o caractere anterior. Por exemplo, "monzas?" corresponderá a "monza" ou "monzas". Em outras palavras, "x?" corresponde a zero ou um "x".                                                |
| !                  | Declara negação. Por exemplo, "!string" corresponde a tudo, exceto "string".                                                                                                                                  |
| .                  | Um ponto literal (ou período) indica qualquer caractere arbitrário único.                                                                                                                                     |
| -                  | Instrui o Apache a NÃO reescrever a URL. Exemplo de sintaxe: "example.com - [F]"                                                                                                                              |
| \*                 | Corresponde a um ou mais do caractere anterior. Por exemplo, "G+" corresponde a um ou mais G's, enquanto "+" corresponderá a um ou mais caracteres de qualquer tipo.                                          |
| -                  | Corresponde a zero ou mais do caractere anterior. Por exemplo, use ".\_" como um curinga.                                                                                                                     |
| \|                 | Declara um operador lógico "ou". Por exemplo, "(x \| y)" corresponde a "x" ou "y".                                                                                                                            |
| \                  | Escape de caracteres especiais, como: ^ $ ! . \_ ( ) [ ] { } \                                                                                                                                                |
| \.                 | Indica um ponto literal (escapado).                                                                                                                                                                           |
| /\_                | Zero ou mais barras.                                                                                                                                                                                          |
| .\_                | Zero ou mais caracteres arbitrários.                                                                                                                                                                          |
| ^$                 | Define uma string vazia.                                                                                                                                                                                      |
| ^.\_$              | O padrão padrão para corresponder a tudo.                                                                                                                                                                     |
| [^/.]              | Define um caractere que não seja uma barra nem um ponto.                                                                                                                                                      |
| [^/.]+             | Define qualquer número de caracteres que não contenham barra nem ponto.                                                                                                                                       |
| http://            | Esta é uma declaração literal — neste caso, a string literal de caracteres, "http://".                                                                                                                        |
| ^example.\*        | Corresponde a uma string que começa com o termo "example", seguido de qualquer caractere(s).                                                                                                                  |
| **^example\.com$** | Define a string exata, "example.com".                                                                                                                                                                         |
| **-d**             | Testa se a string é um diretório existente.                                                                                                                                                                   |
| **-f**             | Testa se a string é um arquivo existente.                                                                                                                                                                     |
| **-s**             | Testa se o arquivo na string de teste tem um valor diferente de zero.                                                                                                                                         |

## Referências

[.htaccess - made easy](https://htaccessbook.com/free/htaccess-character-definitions.pdf)  
[.htaccess Snippets](https://github.com/phanan/htaccess)
