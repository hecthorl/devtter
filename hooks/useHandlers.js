import useZtndStore from 'ztndStore'
import { DRAG_IMAGE_STATES } from 'helpers/constants'

const { DRAG_OVER, NONE } = DRAG_IMAGE_STATES

const useHandlers = () => {
   const setDragStates = useZtndStore(state => state.setDragStates)
   const dragStates = useZtndStore(state => state.dragStates)
   const textareaMsg = useZtndStore(state => state.textareaMsg)
   const setTextareaMsg = useZtndStore(state => state.setTextareaMsg)

   return {
      textareaMsg,
      dragStates,
      setTextareaMsg,
      handleDragEnter: event => {
         event.preventDefault()
         setDragStates(DRAG_OVER)
      },
      handleDragLeave: event => {
         event.preventDefault()
         setDragStates(NONE)
      }
   }
}

export default useHandlers
