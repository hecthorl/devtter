import { UPLOADING_STATES } from 'helpers/constants'
import addDevit from 'services/addDevit'
import upLoadImage from 'services/upLoadImage'
import useZtndStore from 'ztndStore'
import useUserAuth from './useAuthUser'
const { UPLOADING, DONE } = UPLOADING_STATES

const useSendDevit = () => {
   const { userData } = useUserAuth()
   const file = useZtndStore(state => state.file)
   const devitStates = useZtndStore(state => state.devitStates)
   const textareaMsg = useZtndStore(state => state.textareaMsg)
   const setDevitStates = useZtndStore(state => state.setDevitStates)
   const setTextareaMsg = useZtndStore(state => state.setTextareaMsg)

   const devit = {
      avatar: userData.user.image,
      content: textareaMsg.trim(),
      userId: userData.user.email,
      username: userData.user.name,
      createdAt: new Date().getTime(),
      likesCount: [],
      sharedCounts: [],
      devitResponses: []
   }
   const popUp = !false
   const handleSubmit = async () => {
      // Entra en la fase carga para enviar el devit
      setDevitStates(UPLOADING)
      // // Evalua si hay que subir el devit con una imagen o no
      // // En este caso si NO hay imagen
      if (!file) {
         addDevit({
            ...devit,
            img: 'No image'
         })
            .then(() => {
               if (!popUp) {
                  setTextareaMsg('')
                  setDevitStates(DONE)
                  return
               }
               // push('/home')
               setTextareaMsg('')
               // setpopUp(false)
               setDevitStates(DONE)
            })
            .catch(err => {
               console.log(err)
               setDevitStates(DONE)
            })
         return // creo que este return esta por las puras 🧐
      }
      /**
       * Me aseguro de obtener la url de la imagen que se va a adjuntar
       * en el devit. Para luego enviar esa url en la promesa, una vez
       * sea resuelta.
       */
      const imgInfo = await upLoadImage(file).catch(console.error)

      /**
       * Luego, en el then con la url de la imagen ya disponible,
       * la añado al objeto para crear el devit y terminar de enviarlo
       */
      addDevit({
         ...devit,
         img: {
            dominant_color: imgInfo.colors[0][0],
            img_url: imgInfo.secure_url
         }
      })
         .then(() => {
            if (!popUp) {
               setTextareaMsg('')
               setDevitStates(DONE)
               return
            }
            // push('/home')
            setTextareaMsg('')
            // setpopUp(false)
            setDevitStates(DONE)
         })
         .catch(err => {
            console.log(err)
            setDevitStates(DONE)
         })
   }
   const isBtnDisable =
      !devit.content.length ||
      devit.content.length > 280 ||
      devitStates === UPLOADING

   return { handleSubmit, isBtnDisable }
}

export default useSendDevit
