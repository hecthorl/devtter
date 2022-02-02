import { Flex, Link, Text, useToast } from '@chakra-ui/react'
import { UPLOADING_STATES } from 'helpers/constants'
import addDevit from 'services/addDevit'
import upLoadImage from 'services/upLoadImage'
import useZtndStore from 'ztndStore'
import useUserAuth from './useAuthUser'
const { UPLOADING, DONE } = UPLOADING_STATES

const useSendDevit = () => {
   const { userData } = useUserAuth()
   const toast = useToast({
      position: 'bottom',
      isClosable: false,
      duration: 6e3,
      render: () => (
         <Flex
            width="fit-content"
            p="12px 20px"
            columnGap="13px"
            textColor="white"
            bg="leela.500"
            rounded="md"
         >
            <Text>Tu devit se envió.</Text>
            <Link fontWeight="bold" href="/home">
               Ver
            </Link>
         </Flex>
      )
   })
   const file = useZtndStore(state => state.file)
   const devitStates = useZtndStore(state => state.devitStates)
   const textareaMsg = useZtndStore(state => state.textareaMsg)
   const setDevitStates = useZtndStore(state => state.setDevitStates)
   const setTextareaMsg = useZtndStore(state => state.setTextareaMsg)

   const devit = {
      avatar: userData.image,
      content: textareaMsg.trim(),
      userId: userData.email,
      username: userData.name,
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
               toast()
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
            toast()
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
