import useResizeObserver from 'hooks/useResizeObserver'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

const ContextProvider = ({ children }) => {
   const { ref, width, height } = useResizeObserver()
   const [message, setMessage] = useState('')
   const [popUp, setpopUp] = useState(false)
   const { pathname } = useRouter()

   const values = {
      message,
      setMessage,
      ref,
      width,
      height,
      popUp,
      setpopUp
   }

   useEffect(() => {
      setpopUp(false)
   }, [width, pathname])

   return <Context.Provider value={values}>{children}</Context.Provider>
}
export default ContextProvider
