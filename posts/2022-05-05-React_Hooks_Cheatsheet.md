---
date: 2022-05-05 09:01:55 -0300
title: React Hooks - Cheatsheet
description: Cheatsheet de alguns Hooks para resolver algumas situações
category: React
featuredImage: ./featured/hooks-1.jpg
coverImage: /figures/hooks-1.jpg
tags:
  - Cheatsheet
  - JavaScript
  - React
cheatsheet: true  
---

## useListener

Assistir atividades da janela com um atraso para evitar atualizações em excesso

```javascript
import { useEffect } from 'react'

const useListener = (type, callback, delay) => {
  useEffect(() => {
    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => callback(), delay)
    }
    window.addEventListener(type, resizeListener)

    return () => {
      window.removeEventListener(type, resizeListener)
    }
  }, [type, callback, delay])
}

export default useListener
```

## useInterval

Hooks para uso de execução de função por um intervalo

```javascript
import { useEffect, useRef } from 'react'

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => savedCallback.current();

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, []);
}

export default useInterval
```