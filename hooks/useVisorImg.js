import { useEffect, useState } from 'react'

const useVisorImg = () => {
   const [visor, setVisor] = useState(false)

   const handleState = newState => {
      setVisor(newState)
   }

   useEffect(() => {
      window.document.body.style.overflow = visor ? 'hidden' : 'auto'
   }, [visor])

   return { visor, handleState }
}

export default useVisorImg
