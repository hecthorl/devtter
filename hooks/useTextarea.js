import { uploadImage } from 'firebase/cliente'
import { DRAG_IMAGE_STATES } from 'helpers/constants'
import { useEffect, useState } from 'react'

const useTextarea = () => {
   const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
   const [task, setTask] = useState(null)
   const [imgURL, setImgURL] = useState(null)

   const handleDragEnter = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
   }
   const handleDragLeave = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.NONE)
   }
   const handleDrop = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.NONE)
      const [file] = event.dataTransfer.files
      const task = uploadImage(file)
      setTask(task)
   }

   useEffect(() => {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
         task.snapshot.ref.getDownloadURL().then(setImgURL)
      }

      if (task) {
         task.on('state_changed', onProgress, onError, onComplete)
      }
   }, [task])

   return {
      handleDragEnter,
      handleDragLeave,
      handleDrop,
      imgURL,
      setImgURL,
      drag
   }
}

export default useTextarea
