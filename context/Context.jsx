import useResizeObserver from 'hooks/useResizeObserver'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

const ContextProvider = ({ children }) => {
   const { ref, width, height } = useResizeObserver()
   const [popUp, setpopUp] = useState(false)
   const { pathname } = useRouter()

   useEffect(() => {
      setpopUp(false)
   }, [width, pathname])

   return (
      <Context.Provider value={{ ref, width, height, popUp, setpopUp }}>
         {children}
      </Context.Provider>
   )
}
export default ContextProvider
