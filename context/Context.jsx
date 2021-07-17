import { DRAG_IMAGE_STATES, UPLOADING_STATES } from 'helpers/constants'
import useResizeObserver from 'hooks/useResizeObserver'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

export const Context = createContext(null)

const ContextProvider = ({ children }) => {
   const { ref, width, height } = useResizeObserver()
   const [popUp, setpopUp] = useState(false)
   const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
   const [devitStates, setDevitStates] = useState(UPLOADING_STATES.NONE)
   const { pathname } = useRouter()

   const values = {
      ref,
      width,
      height,
      popUp,
      setpopUp,
      drag,
      setDrag,
      devitStates,
      setDevitStates
   }

   useEffect(() => {
      setpopUp(false)
   }, [width, pathname])

   return <Context.Provider value={values}>{children}</Context.Provider>
}
export default ContextProvider
