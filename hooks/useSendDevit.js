import { addDevit, uploadImage } from 'firebase/cliente'
import { UPLOADING_STATES } from 'helpers/constants'
import useUser from './useUser'
import { useRouter } from 'next/router'
import useGlobalContext from './useGlobalContext'

const useSendDevit = ({ file = null, message, setMessage }) => {
   const { devitStates, setDevitStates, setpopUp, popUp } = useGlobalContext()
   const { DONE, UPLOADING } = UPLOADING_STATES

   const { push } = useRouter()
   const user = useUser()

   const handleSubmit = () => {
      // Entra en la fase carga, para enviar el devit
      setDevitStates(UPLOADING)

      // Evalua si hay que subir el devit con una imagen o no
      // En este caso si NO hay imagen
      if (!file) {
         addDevit({
            avatar: user.avatar,
            content: message.trim(),
            userId: user.uid,
            username: user.username,
            img: 'No image'
         })
            .then(() => {
               if (!popUp) {
                  setMessage('')
                  console.log('termino de enviarse el devit sin img')
                  setDevitStates(DONE)
                  return
               }
               push('/home')
               setMessage('')
               setpopUp(false)
               setDevitStates(DONE)
            })
            .catch(err => {
               console.log(err)
               setDevitStates(DONE)
            })
         return
      }

      /**
       * Me aseguro de obtener la url de la imagen que se va a adjuntar
       * en el devit. Para luego enviar esa url en la promesa, una vez
       * sea resuelta.
       */
      const promise = new Promise(resolve => {
         const tarea = uploadImage(file)
         tarea.on('state_changed', null, null, () => {
            tarea.snapshot.ref.getDownloadURL().then(img => {
               resolve(img)
            })
         })
      })

      /**
       * Luego, en el then con la url de la imagen ya disponible,
       * la añado al objeto para crear el devit y terminar de enviarlo
       */
      promise.then(img => {
         console.log('img', img)
         addDevit({
            avatar: user.avatar,
            content: message.trim(),
            userId: user.uid,
            username: user.username,
            img
         })
            .then(() => {
               if (!popUp) {
                  setMessage('')
                  console.log('termino de enviarse el devit con img')
                  setDevitStates(DONE)
                  return
               }
               push('/home')
               setMessage('')
               setpopUp(false)
               setDevitStates(DONE)
            })
            .catch(err => {
               console.log(err)
               setDevitStates(DONE)
            })
      })
   }

   const isButtonDisable =
      !message.length || devitStates === UPLOADING || message.length > 280

   return { handleSubmit, isButtonDisable }
}

export default useSendDevit
