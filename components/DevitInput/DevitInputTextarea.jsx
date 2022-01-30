import Textarea from 'react-textarea-autosize'
import useHandlers from 'hooks/useHandlers'
import usePreview from 'hooks/usePreview'
import { Box } from '@chakra-ui/react'
import OnImage from './OnImage'
import { DRAG_IMAGE_STATES } from 'helpers/constants'

const { DRAG_OVER } = DRAG_IMAGE_STATES

const DevitInputTextarea = () => {
   const { imageDrop, preview, setPreview } = usePreview()
   const {
      dragStates,
      handleDragLeave,
      handleDragEnter,
      setTextareaMsg,
      textareaMsg
   } = useHandlers()

   const textareaBorder =
      dragStates === DRAG_OVER ? '2px dashed lime' : '2px dashed transparent'
   return (
      <Box w="full">
         <Textarea
            value={textareaMsg}
            onChange={e => setTextareaMsg(e.target.value)}
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
               border: textareaBorder
            }}
         />
         <OnImage preview={preview} setPreview={setPreview} />
      </Box>
   )
}

export default DevitInputTextarea
