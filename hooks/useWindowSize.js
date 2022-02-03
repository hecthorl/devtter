import { useEffect, useState } from 'react'

const useWindowSize = () => {
   const [windowSize, setWindowSize] = useState({
      width: 1600,
      height: 800
   })
   useEffect(() => {
      // Handler to call on window resize
      // eslint-disable-next-line space-before-function-paren
      function handleResize() {
         // Set window width/height to state
         setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
         })
      }
      // Add event listener
      window.addEventListener('resize', handleResize)
      // Call handler right away so state gets updated with initial window size
      handleResize()
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
   }, []) // Empty array ensures that effect is only run on mount
   return windowSize
}
export default useWindowSize
