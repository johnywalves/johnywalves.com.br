import { useEffect, useRef } from 'react'

const useListener = (type, callback, delay) => {
  const savedTimer = useRef(null)
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const resizeListener = () => {
      if (savedTimer.current) {
        clearTimeout(savedTimer.current)
      }
      savedTimer.current = setTimeout(() => savedCallback.current(), delay)
    }
    window.addEventListener(type, resizeListener)

    return () => window.removeEventListener(type, resizeListener)
  }, [type, delay])
}

export default useListener