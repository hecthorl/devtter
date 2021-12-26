import { useRef, useCallback, useEffect, useState } from 'react'

/**
 * Hook para obtener información del viewport
 */
const useResizeObserver = () => {
   const [size, setSize] = useState({ width: 0, height: 0 })
   const resizeObserver = useRef(null)

   const onResize = useCallback(entries => {
      console.log(entries)
      const { width, height } = entries[0].contentRect
      setSize({ width, height })
   }, [])

   const ref = useCallback(
      node => {
         if (node !== null) {
            if (resizeObserver.current) {
               resizeObserver.current.disconnect()
            }
            resizeObserver.current = new ResizeObserver(onResize)
            resizeObserver.current.observe(node)
         }
      },
      [onResize]
   )

   useEffect(
      () => () => {
         resizeObserver.current.disconnect()
      },
      []
   )

   return { ref, width: size.width, height: size.height }
}

export default useResizeObserver
