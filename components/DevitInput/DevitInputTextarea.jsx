import Textarea from 'react-textarea-autosize'
import useHandlers from 'hooks/useHandlers'
import { DRAG_IMAGE_STATES } from 'helpers/constants'

const { DRAG_OVER } = DRAG_IMAGE_STATES

const DevitInputTextarea = ({ value, onChange, onDrop }) => {
   const { dragStates, handleDragLeave, handleDragEnter } = useHandlers()

   const textareaBorder = dragStates === DRAG_OVER ? 'lime' : 'transparent'
   return (
      <Textarea
         value={value}
         onChange={onChange}
         onDragEnter={handleDragEnter}
         onDragLeave={handleDragLeave}
         onDrop={onDrop}
         placeholder="¿Qué esta pasando?"
         minRows={2}
         style={{
            width: '100%',
            background: '#15202b',
            resize: 'none',
            color: 'white',
            outline: 'none',
            fontSize: '20px',
            border: `2px dashed ${textareaBorder}`,
            height: '100%'
         }}
      />
   )
}

export default DevitInputTextarea
