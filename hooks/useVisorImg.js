import { useEffect, useState } from 'react'
/**
 * Hook para manejar el estado del visor de imágenes
 */
const useVisorImg = () => {
   const [visor, setVisor] = useState(false)

   /**
    * @param {boolean} newState
    */
   const handleState = newState => {
      setVisor(newState)
   }

   useEffect(() => {
      window.document.body.style.overflow = visor ? 'hidden' : 'auto'
   }, [visor])

   return { visor, handleState }
}

export default useVisorImg
