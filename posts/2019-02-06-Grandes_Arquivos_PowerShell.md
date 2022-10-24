---
title: Arquivos de texto grandes com PowerShell
description: Dividir arquivos grandes para processando
date: 2019-02-06 16:22:15 -0200
featuredImage: ./featured/files-1.jpg
coverImage: /figures/files-1.jpg
category: Windows
tags:
  - PowerShell
  - Arquivos
published: true
cheatsheet: false
---

Lidar com arquivos de texto extensos pode ser um pouco dificil ou demorado, mas podemos facilitar com algumas funções em PowerShell

## Contar linhas

Substituir o `<caminho do arquivo>`

```powershell
$nlines = 0;
$file = '<caminho do arquivo>'
gc $file -read 1000 | % { $nlines += $_.Length };
[string]::Format("{0} has {1} lines", $file, $nlines)
```

## Separar arquivos por quantidades de linhas

Separar um arquivo grande de serem processados individualmente facilita o processo e controle do progresso  
Substituindo o `<caminho do arquivo>` e a `<quantidade de linhas>` o código gera `out_<número>.txt` até o fim do texto

```powershell
$i=0; Get-Content '<caminho do arquivo>' -ReadCount <quantidade de linhas> | %{$i++; $_ | Out-File out_$i.txt}
```

Na nossa língua temos vários caracteres diferentes e acentos, temos de usar um encode para evitar problemas, no exemplo estou usando o UTF8, mas temos as opções de **ASCII**, **BigEndianUnicode**, **OEM**, **String**, **Unicode**, **UTF7**, **UTF8**, **UTF8BOM**, **UF8NoBOM**, **UTF32** e **Unknown**

```powershell
$i=0; Get-Content '<caminho do arquivo>' -Encoding "UTF8" -ReadCount <quantidade de linhas> | %{$i++; $_ | Out-File -Encoding "UTF8" out_$i.csv}
```

## Adicionar cabeçalho para os arquivos

Trabalhando banco de dados em arquivos de texto devemos adicionar o cabeçalho para facilitar a manipulação dos arquivos  
Podemos adicionar um cabeçalho fixo, com o código abaixo substituindo o `<caminho do arquivo>` e a `<texto do cabeçalho>`

```powershell
$textfile = '<caminho do arquivo>'
$header = '<texto do cabeçalho>'
$($header; Get-Content $textfile) | Set-Content $textfile
```

Podemos adicionar ou através de um arquivo contendo o cabeçalho, com o código abaixo substituindo o `<caminho do arquivo>` e a `<caminho do arquivo cabeçalho>`

```powershell
$textfile = '<caminho do arquivo>'
$headerfile = '<caminho do arquivo cabeçalho>'
$(Get-Content $headerfile; Get-Content $textfile) | Set-Content $textfile
```

## Dividir as linhas mantendo o cabeçalho

Adicionando os controles de `$header = Get-Content $file -First 1` para capturar o cabeçalho na primeira linha e `$(If ($i -ne 1) {$header} Else {$null})` para adicionar nos arquivos além do primeiro o cabeçalho arquivo  
Com o ódigo abaixo substituindo o `<caminho do arquivo>` e a `<quantidade de linhas>`

```powershell
$file = '<caminho do arquivo>'
$qtd_lines = <quantidade de linhas>
$header = Get-Content $file -First 1
$i=0; Get-Content $file -Encoding "UTF8" -ReadCount $qtd_lines | %{$i++; $($(If ($i -ne 1) {$header} Else {$null}); $_) | Out-File -Encoding "UTF8" out_$i.csv}
```

## Referências

[Get-Content - Microsoft](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content)
