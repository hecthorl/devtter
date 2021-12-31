import { DRAG_IMAGE_STATES } from 'helpers/constants'
import { useState } from 'react'
import useStore from 'store'

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
