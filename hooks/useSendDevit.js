import { useRouter } from 'next/router'
import { addDevit } from 'ownFirebase/cliente'
import { UPLOADING_STATES } from 'helpers/constants'
import useAuthUser from './useAuthUser'
import useStore from 'store'
import upLoadImage from 'helpers/upLoadImage'

const useSendDevit = ({ file, message, setMessage }) => {
   const devitStates = useStore(state => state.devitStates)
   const setDevitStates = useStore(state => state.setDevitStates)
   const popUp = useStore(state => state.popUp)
   const setpopUp = useStore(state => state.setpopUp)
   const { userData } = useAuthUser()
   const { DONE, UPLOADING } = UPLOADING_STATES

   const { push } = useRouter()

   const devit = {
      avatar: userData.user.image,
      content: message.trim(),
      userId: 'Oo7mMIls6HfCJSWLQq2d5oqLGPt2',
      username: userData.user.name
   }

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
                  setMessage('')
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
         return // creo que este return esta por las puras 🧐
      }
      /**
       * Me aseguro de obtener la url de la imagen que se va a adjuntar
       * en el devit. Para luego enviar esa url en la promesa, una vez
       * sea resuelta.
       */
      const imgInfo = await upLoadImage(file).catch(console.error)

      // const imagekit = new ImageKit({
      //    authenticationEndpoint: 'http://localhost:3000/api/kit',
      //    urlEndpoint: 'https://ik.imagekit.io/xu5iwk94yzf',
      //    publicKey: 'public_Bzq8oUoOLM9KK07U2qPuw6V0LEQ='
      // })
      // console.log(file)
      // imagekit.upload(
      //    {
      //       file,
      //       fileName: file.name
      //    },
      //    (err, result) => {
      //       if (err) console.log(err)
      //       console.log(result)
      //    }
      // )
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
               setMessage('')
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
   }

   const isButtonDisable =
      !message.length || devitStates === UPLOADING || message.length > 280

   return { handleSubmit, isButtonDisable }
}

export default useSendDevit
