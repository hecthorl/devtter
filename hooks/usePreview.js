import { useState } from 'react'
import useZtndStore from 'ztndStore'
import { DRAG_IMAGE_STATES } from 'helpers/constants'
import imgFormatSupported from 'helpers/imgFormatSupported'

const usePreview = () => {
   const [preview, setPreview] = useState(null)
   const setDragStates = useZtndStore(state => state.setDragStates)
   const setFile = useZtndStore(state => state.setFile)

   /**
    * Se busca mejor nombre para esta función
    * @param {Event} event
    */
   function imageDrop(event) {
      event.preventDefault()
      console.log(event)
      setDragStates(DRAG_IMAGE_STATES.DROPED)
      const [file] = event.dataTransfer
         ? event.dataTransfer.files
         : event.target.files

      const isFormat = imgFormatSupported(file.type)

      if (isFormat) {
         setFile(file)

         const reader = new FileReader()
         reader.onload = event => {
            setPreview(event.target.result)
         }
         reader.readAsDataURL(file)
      }
   }
   return { preview, imageDrop, setPreview }
}

export default usePreview
