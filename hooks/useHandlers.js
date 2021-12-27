import { DRAG_IMAGE_STATES } from 'helpers/constants'
import { useState } from 'react'
import useStore from 'store'
import useGlobalContext from './useGlobalContext'

/**
 * Hook para manejar los estados del drag and drop en el textarea
 * @returns {object}
 */
const useHandlers = () => {
   const [message, setMessage] = useState('')
   const setDragStates = useStore(state => state.setDragStates)
   const dragStates = useStore(state => state.dragStates)

   const handleDragEnter = event => {
      event.preventDefault()
      setDragStates(DRAG_IMAGE_STATES.DRAG_OVER)
   }
   const handleDragLeave = event => {
      event.preventDefault()
      setDragStates(DRAG_IMAGE_STATES.NONE)
   }

   return {
      message,
      setMessage,
      handleDragEnter,
      handleDragLeave,
      dragStates
   }
}

export default useHandlers
