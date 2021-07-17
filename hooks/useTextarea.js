import { onError, onProgress } from 'helpers/firestoreStates'
import { useEffect, useState } from 'react'
// import { uploadImage } from 'firebase/cliente'
// import { DRAG_IMAGE_STATES } from 'helpers/constants'

const useTextarea = () => {
   const [task, setTask] = useState(null)
   const [preview, setPreview] = useState(null)
   const [imgURL, setImgURL] = useState(null)

   const handleDrop = event => {
      event.preventDefault()
      // eslint-disable-next-line no-undef
      setDrag(DRAG_IMAGE_STATES.NONE)
      const [file] = event.dataTransfer.files

      // eslint-disable-next-line no-undef
      const task = uploadImage(file)
      setTask(task)
   }
   useEffect(() => {
      // const onProgress = () => {
      //    const { bytesTransferred, totalBytes } = task.snapshot
      //    const progress = (bytesTransferred / totalBytes) * 100
      //    console.log(progress)
      // }
      // const onError = error => {
      //    console.log(error)
      // }
      const onComplete = () => {
         task.snapshot.ref.getDownloadURL().then(item => {
            setImgURL(item)
         })
      }

      if (task) {
         task.on('state_changed', onProgress, onError, onComplete)
      }
   }, [task])

   // console.log('hook', preview)

   return {
      // handleDragEnter,
      // handleDragLeave,
      handleDrop,
      imgURL,
      setImgURL,
      // drag,
      preview,
      setPreview
   }
}

export default useTextarea
