import { DRAG_IMAGE_STATES } from 'helpers/constants'
import useTextarea from 'hooks/useTextarea'
import TextareaAutosize from 'react-textarea-autosize'

const DevitInputTextarea = ({ setMessage, message }) => {
   const { handleDragEnter, handleDragLeave, handleDrop, drag } = useTextarea()
   const border =
      drag === DRAG_IMAGE_STATES.DRAG_OVER
         ? 'border-dashed border-2 border-green-500'
         : 'border-transparent'
   return (
      <TextareaAutosize
         className={`${border} text-lg w-full resize-none min-h-[96px] p-2 focus:outline-none bg-transparent border-2 text-white`}
         onChange={e => setMessage(e.target.value)}
         value={message}
         onDragEnter={handleDragEnter}
         onDragLeave={handleDragLeave}
         onDrop={handleDrop}
         placeholder="¿Qué está pasando?"
      />
   )
}

export default DevitInputTextarea
