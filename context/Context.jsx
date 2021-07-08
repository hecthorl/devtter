import useResizeObserver from 'hooks/useResizeObserver'
import { createContext } from 'react'

export const Context = createContext(null)

const ContextProvider = ({ children }) => {
   const { ref, width, height } = useResizeObserver()

   return (
      <Context.Provider value={{ ref, width, height }}>
         {children}
      </Context.Provider>
   )
}
export default ContextProvider
