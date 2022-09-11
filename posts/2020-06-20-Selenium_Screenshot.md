---
title: Automação de screenshot com Selenium
description: Gerar telas de páginas Web para testes Web com Selenium e Python
date: "2020-06-20 17:50:32"
featuredImage: ./featured/robot-1.jpg
coverImage: /figures/robot-1.jpg
category: Python
tags:
  - Python
  - Selenium
  - Tests
---

Fazer trabalhos repetivos é muito chato e um desperdício de tempo, felizmente robôs existem para facilitar nessas tarefas e para automatizar interfaces Web o Selenium é quase um padrão do mercado

## Instalação

Para fazer a automatização precisamos escolher o navegador e o webdrive para a versão do navegador por exemplo do [Chrome Driver](https://chromedriver.chromium.org/downloads) e [Firefox Driver](https://github.com/mozilla/geckodriver/releases) colocando eles em um dos caminhos dependendo do sistema

```bash
# Windows
echo %PATH%
# Linux
echo $PATH
```

Instalar o pacote no pelo pip

```bash
pip install selenium
```

## Abrir o navegador

Importação do WebDrive da biblioteca do Selenium

```python
  from selenium import webdriver
```

Podemos criar o drive como Google Chrome `driver = webdriver.Chrome()` ou Mozilla Firefox `driver = webdriver.Firefox()` juntamente com a opção de não apresentar a interface gráfica para o Chrome

```python
  from selenium import webdriver
  from selenium.webdriver.chrome.options import Options

  options = Options()
  options.add_argument("--headless")
  driver = webdriver.Chrome(chrome_options = options)
```

ou com Firefox

```python
  from selenium import webdriver
  from selenium.webdriver.chrome.options import Options

  options = Options()
  options.binary = "/usr/bin/firefox"
  options.add_argument("-headless")
  driver = webdriver.Firefox(firefox_options = options)
```

## Navegar e esperar construção da página

```python
  url = "https://www.google.com/"
  driver.get(url)
```

Usnado as opções disponíveis em [Query By](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.by.html) com o Query Selector para encontrar o campo de busca na página do Google

```python
  from selenium.webdriver.common.by import By
  from selenium.webdriver.support.ui import WebDriverWait
  from selenium.webdriver.support import expected_conditions as EC

  searchField = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, "[name=q]"))
  )
```

## Tirando uma foto

```python
  driver.save_screenshot("open.png")
```

## Redimensionar janela do navegador

```python
  driver.set_window_size(1800, 1200)
```

## Digitando texto na caixa

```python
  searchField.send_keys("orange")
  searchField.send_keys(Keys.ENTER)
```

## Clicando no elemento

```python
  imageTab = driver.find_element_by_css_selector("a.q.qs")
  imageTab.click()
```

## Compilado

Compilado para executar de forma invisível (headless) no Chrome

```python
import time

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Main
def main():
  # Iniciar Webdriver
  options = Options()
  options.add_argument("--headless")
  driver = webdriver.Chrome(chrome_options = options)

  # Acessar endereço
  driver.get("https://www.google.com/")

  # Esperar até a caixa de busca aparecer
  searchField = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CSS_SELECTOR, "[name=q]"))
  )
  # Tirar um screenshot
  driver.save_screenshot("open.png")

  # Alterar o tamanho da tela
  driver.set_window_size(1800, 1200)
  # Tirar um screenshot da tela ampliada
  driver.save_screenshot("max.png")

  # Digitar a palavra "orange" na caixa de busca e digitar <Enter>
  searchField.send_keys("orange")
  searchField.send_keys(Keys.ENTER)
  # Esperar por 10 segundos
  time.sleep(10)
  # Tirar um screenshot do resultado da busca
  driver.save_screenshot("search.png")

  # Clicar para a aba de Imagens
  imageTab = driver.find_element_by_css_selector("a.q.qs")
  imageTab.click()
  # Tirar um screenshot das imagens
  driver.save_screenshot("imagens.png")

  # Fechar o navegador
  driver.quit()

if __name__ == "__main__":
  main()
```

## Referências

[Python Selenium](https://www.selenium.dev/selenium/docs/api/py/)
