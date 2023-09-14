---
title: React Hooks - Cheatsheet
description: Cheatsheet de alguns Hooks para resolver algumas situações
date: 2022-05-05 09:01:55 -0300
featuredImage: ./featured/hooks-1.jpg
coverImage: /figures/hooks-1.jpg
category: React
tags:
  - Cheatsheet
  - React Hooks
published: true
cheatsheet: true
---

_Hooks_ são uma maneira excelente de criar e acessar funcionalidades em componentes. Não precisamos nos restringir ao uso dos _hooks_ nativos, o que nos dá a liberdade de criar nossos próprios

## useListener

Observar as atividades da janela (_window_) com um pequeno atraso, a fim de evitar atualizações em excesso.

```javascript
import { useEffect, useRef } from "react"

const useListener = (type, callback, delay) => {
  const savedTimer = useRef(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (delay >= 0) {
      const resizeListener = () => {
        if (savedTimer.current) {
          clearTimeout(savedTimer.current)
        }
        savedTimer.current = setTimeout(() => savedCallback.current(), delay)
      }
      window.addEventListener(type, resizeListener)

      return () => window.removeEventListener(type, resizeListener)
    }
  }, [type, delay])
}

export default useListener
```

Um exemplo para "ouvir" o scroll do navegador

```javascript
useListener("scroll", onScroll)
```

## useInterval

_Hook_ para executar um função em intervalos definidos

```javascript
import { useEffect, useRef } from "react"

const useInterval = (callback, delay) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    const tick = () => savedCallback.current()
    const id = setInterval(tick, delay)
    return () => clearInterval(id)
  }, [])
}

export default useInterval
```

## useDebounce

Em algumas situações, ao responder às ações do usuário, é aconselhável introduzir um pequeno atraso antes de efetivar as alterações. Por exemplo, quando estamos capturando a digitação em uma caixa de texto (_input_), reagir a cada tecla pressionada pode resultar em um excesso de processamento. Para contornar isso, podemos adicionar um atraso na resposta

```typescript
import { useEffect, useState } from "react"

const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
```

## Referências

[usehooks-ts - useDebounce](https://usehooks-ts.com/react-hook/use-debounce)
