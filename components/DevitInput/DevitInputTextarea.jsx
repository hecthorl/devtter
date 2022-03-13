import Textarea from 'react-textarea-autosize'
import { Box } from '@chakra-ui/react'
import useHandlers from 'hooks/useHandlers'
import usePreview from 'hooks/usePreview'
import OnImage from './OnImage'
import { DRAG_IMAGE_STATES } from 'helpers/constants'

const { DRAG_OVER } = DRAG_IMAGE_STATES

const DevitInputTextarea = ({ value, onChange }) => {
   const { imageDrop, preview, setPreview } = usePreview()
   const { dragStates, handleDragLeave, handleDragEnter } = useHandlers()

   const textareaBorder = dragStates === DRAG_OVER ? 'lime' : 'transparent'
   return (
      <Box w="full">
         <Textarea
            value={value}
            onChange={onChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={imageDrop}
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
         <OnImage preview={preview} setPreview={setPreview} />
      </Box>
   )
}

export default DevitInputTextarea
