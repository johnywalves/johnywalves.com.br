---
title: Automação de screenshot com Selenium
description: Armazenar telas de páginas Web com Selenium e Python
date: 2020-06-20 17:50:32
featuredImage: ./featured/robot-1.jpg
coverImage: /figures/robot-1.jpg
category: Python
tags:
  - Automação
  - Selenium
  - Tests
published: true
highlight: false
cheatsheet: false
---

Fazer trabalhos repetitivos é desperdício de tempo, felizmente robôs existem para facilitar nessas tarefas e para automatizar interfaces Web podemos usar o Selenium, com Python

## Instalação de pacotes

Instalar os pacotes `selenium` e `webdriver-manager` no pelo pip 

```bash
pip install selenium webdriver-manager
```

## Realizar o passo a passo

Geração do código para nosso pequeno robô

### Abrir o navegador

Importação do WebDrive da biblioteca do Selenium

```python
from selenium import webdriver
```

Podemos criar o drive como Google Chrome `driver = webdriver.Chrome()` ou Mozilla Firefox `driver = webdriver.Firefox()` juntamente com a opção de não apresentar a interface gráfica

Adicionando a chamada para o `webdriver_manager` instalar o webdrive automaticamente

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager  

options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options = options)
```

ou com Firefox

```python
from selenium import webdriver

from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager

fireFoxOptions = webdriver.FirefoxOptions()
fireFoxOptions.add_argument('-headless')
driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()), options=fireFoxOptions)
```

### Navegar e esperar construção da página

```python
url = "https://www.google.com/"
driver.get(url)
```

Usando as opções disponíveis em [Query By](https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.by.html) com o Query Selector para encontrar o campo de busca na página do Google

```python
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

searchField = WebDriverWait(driver, 10).until(
  EC.presence_of_element_located((By.CSS_SELECTOR, "[name=q]"))
)
```

### Redimensionar janela do navegador

```python
driver.set_window_size(1800, 1200)
```

### Tirando uma foto

```python
driver.save_screenshot("open.png")
```

### Digitando texto na caixa

```python
searchField.send_keys("orange")
searchField.send_keys(Keys.ENTER)
```

### Clicando no elemento

Localizando o link para as imagens pelo seletor de CSS

```python
imageTab = driver.find_element(By.CSS_SELECTOR, "#top_nav a")   
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

from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

# Main
def main():
  # Iniciar Webdriver
  options = Options()
  options.add_argument("--headless")
  driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

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
  imageTab = driver.find_element(By.CSS_SELECTOR, "#top_nav a")   
  imageTab.click()
  # Tirar um screenshot das imagens
  driver.save_screenshot("imagens.png")

  # Fechar o navegador
  driver.quit()

if __name__ == "__main__":
  main()
```

## Instalação manual do drive

Podemos usar um WebDrive próprio no lugar de deixar o `webdriver-manager` fazer download, buscando para a versão do navegador por exemplo do [Chrome Driver](https://chromedriver.chromium.org/downloads) e [Firefox Driver](https://github.com/mozilla/geckodriver/releases) colocando eles em um dos caminhos dependendo do sistema

```bash
# Windows
echo %PATH%
# Linux
echo $PATH
```

Substituir a iniciação do drive por

```python
driver = webdriver.Chrome(options = options)
```

## Possíveis problemas

No sistema Linux é necessário alguns pacotes para a execução do Chrome Driver 

Se for necessário executar ```sudo apt install libnss```

Se a continuar com problemas de execução tentar ```sudo apt install libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev```

Se necessário adicionar ```sudo apt install libgconf-2-4 libatk1.0-0 libatk-bridge2.0-0 libgdk-pixbuf2.0-0 libgtk-3-0 libgbm-dev libnss3-dev libxss-dev```

Para adicionar libasound2  ```sudo apt install libasound2```

## Referências

[Python Selenium](https://www.selenium.dev/selenium/docs/api/py/)

[PyPi - Webdriver Manager](https://pypi.org/project/webdriver-manager/)

