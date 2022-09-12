---
date: 2019-12-09 11:03:00 -0300
title: Iniciando com Gulp
description: Automação de processo de desenvolvimento Web com hot reloading e minify
category: Web
tags:
  - HTML
  - CSS
  - Automação
featuredImage: ./featured/gulp-1.jpg
coverImage: /figures/gulp-1.jpg
---

Desenvolvimento Web é simples de começar, HTML + CSS são de fácil compressão para iniciar e pode escalar como se fosso eterno, para facilitar esse proceso existe várias ferramentas um das mais fáceis de iniciar é o Gulp

## Instalação

Instalar o [NodeJS](https://nodejs.org/), podemos dar sequência com uso de npm ou [Yarn](https://yarnpkg.com/) configurando um ambiente para desenvolvimento com Node  
Para começar um projeto e criar o `package.json` com o assiste

```bash
yarn init
# ou
npm init
```

Instalar os pacotes

```bash
yarn add gulp gulp-clean-css gulp-json-minify gulp-rename gulp-uglify browser-sync
# ou
npm install gulp gulp-clean-css gulp-json-minify gulp-rename gulp-uglify browser-sync
```

## Gulpfile

Código simples para iniciar com `gulpfile.js`

```javascript
const gulp = require("gulp")
const cleanCSS = require("gulp-clean-css")
const jsonMinify = require("gulp-json-minify")
const rename = require("gulp-rename")
const uglify = require("gulp-uglify")

const browserSync = require("browser-sync").create()

// Minify JSON
function json() {
  return gulp
    .src(["./*.json", "!./*.min.json", "!./package*.json"])
    .pipe(jsonMinify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream())
}

// Minify CSS
function css() {
  return gulp
    .src(["./*.css", "!./*.min.css"])
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream())
}

// Minify JavaScript
function js() {
  return gulp
    .src(["./*.js", "!./*.min.js", "!./gulpfile.js"])
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("."))
    .pipe(browserSync.stream())
}

// Browser Sync
function dev() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  })

  gulp
    .watch(["./*.json", "!./*.min.json", "!./package*.json"])
    .on("change", json)
  gulp.watch(["./*.css", "!./*.min.css"]).on("change", css)
  gulp.watch(["./*.js", "!./*.min.js", "!./gulpfile.js"]).on("change", js)
  gulp.watch("./*.html").on("change", browserSync.reload)
}

exports.json = json
exports.css = css
exports.js = js
exports.default = gulp.parallel(json, css, js)
exports.dev = dev
```

## Referências

[Package Gulp - NPM](https://www.npmjs.com/package/gulp)
