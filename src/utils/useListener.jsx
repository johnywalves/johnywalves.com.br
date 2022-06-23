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