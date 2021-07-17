import { DRAG_IMAGE_STATES } from 'helpers/constants'
import { useState } from 'react'
import useGlobalContext from './useGlobalContext'

const usePreview = () => {
   const [preview, setPreview] = useState(null)
   const [file, setFile] = useState(null)
   const { setDrag } = useGlobalContext()

   const handleDrop = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.DROPED)
      const [file] = event.dataTransfer.files

      setFile(file)

      const reader = new FileReader()
      reader.onload = event => {
         setPreview(event.target.result)
      }
      reader.readAsDataURL(file)
   }

   /**
    * preview => la url final de la imagen
    * handleDrop => metodo para detectar el drop de la imagen en el textarea
    * setPreviw => metodo para el boton de cerrar imagen
    */
   return { preview, handleDrop, setPreview, file }
}

export default usePreview
