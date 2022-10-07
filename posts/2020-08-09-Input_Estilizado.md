---
title: Input estilizado com HTML e CSS puro
description: Input para texto estilizado com mudanças no foco
date: "2020-08-09 18:50:32"
featuredImage: ./featured/planner-1.jpg
coverImage: /figures/planner-1.jpg
category: CSS
tags:
  - Web
  - Animação
---

Placeholder é coisa do passado, a moda agora é título integrado

<video width="480" height="320" muted autoplay loop style="display: block; margin: 1rem auto;" >
  <source src="/videos/inputanimation.mp4" type="video/mp4">
</video>

Pode ser vista em funcionamento em [Input Animation](/web/inputanimation.html)

## Como fazer

Contruindo estrutura em HMTL para receber as configurações

```html
<form>
  <input name="name" autocomplete="off" required />
  <label for="name">
    <span>Name</span>
  </label>
</form>
```

Aplicação de estilo, em uma página HTML com o [básico](/html-started)

```css
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

form {
  overflow: hidden;
  position: relative;
  width: 80%;
}

input {
  color: #fff;
  font-size: 28px;
  width: 100%;
  padding: 20px 5px 5px;
  background-color: #4f4f4f;
  border: none;
  border-radius: 4px;
}

label {
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #ffffff;
}

span {
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 28px;
  transition: all 0.3s ease;
}

label::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #e0138c;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

input:focus + label span,
input:valid + label span {
  transform: translateY(-150%);
  font-size: 14px;
  bottom: 10px;
  color: #e0138c;
}

input:focus + label::after,
input:valid + label::after {
  transform: translateX(0%);
}
```
