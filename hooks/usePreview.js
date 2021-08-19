import { DRAG_IMAGE_STATES } from 'helpers/constants'
import { imgFormatSupported } from 'helpers/imgFormatSupported'
import { useState } from 'react'
import useGlobalContext from './useGlobalContext'

/**
 * Hook para ver la preview local de una imagen antes de subirla.
 */
const usePreview = () => {
   const [preview, setPreview] = useState(null)
   const [file, setFile] = useState(null)
   const { setDrag } = useGlobalContext()

   const handleDrop = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.DROPED)
      const [file] = event.dataTransfer.files
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

   return { preview, handleDrop, setPreview, file }
}

export default usePreview
