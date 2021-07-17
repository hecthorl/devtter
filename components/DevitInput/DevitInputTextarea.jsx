import { DRAG_IMAGE_STATES } from 'helpers/constants'
import useHandlers from 'hooks/useHandlers'
import usePreview from 'hooks/usePreview'
import TextareaAutosize from 'react-textarea-autosize'
import DevitInputBtn from './DevitInputBtn'
import DevitInputIcons from './DevitInputIcons'
import OnImage from './OnImage'
import WordsCounter from './WordsCounter'

const DevitInputTextarea = () => {
   const { preview, handleDrop, setPreview, file } = usePreview()
   const { setMessage, message, drag, handleDragEnter, handleDragLeave } =
      useHandlers()

   const border =
      drag === DRAG_IMAGE_STATES.DRAG_OVER
         ? 'border-dashed border-2 border-green-500'
         : 'border-transparent'
   return (
      <>
         <div className="w-full">
            <TextareaAutosize
               className={`${border} text-lg w-full resize-none min-h-[96px] p-2 focus:outline-none bg-transparent border-2 text-white`}
               onChange={event => setMessage(event.target.value)}
               value={message}
               onDragEnter={handleDragEnter}
               onDragLeave={handleDragLeave}
               onDrop={handleDrop}
               placeholder="¿Qué está pasando?"
            />
            <OnImage preview={preview} setPreview={setPreview} />
            <div className="flex justify-between items-center pt-2 border-t border-secondary">
               <div className="flex text-lg gap-x-2">
                  <DevitInputIcons />
               </div>
               <div className="flex items-center justify-center gap-x-2">
                  <WordsCounter words={message.length} maxValue={280} />
                  <DevitInputBtn
                     message={message}
                     setMessage={setMessage}
                     file={file}
                  />
               </div>
            </div>
         </div>
      </>
   )
}

export default DevitInputTextarea
