import { useToast } from '@chakra-ui/react'
import Toast from 'components/Toast'
import { UPLOADING_STATES } from 'helpers/constants'
import addDevit from 'services/addDevit'
import upLoadImage from 'services/upLoadImage'
import useZtndStore from 'ztndStore'
import useUserAuth from './useAuthUser'
const { UPLOADING, DONE } = UPLOADING_STATES

const useSendDevit = (textareaMsg = '', setTextareaMsg) => {
   const { userData } = useUserAuth()
   const toast = useToast({
      position: 'bottom',
      isClosable: false,
      duration: 6e3,
      render: () => <Toast />
   })
   const file = useZtndStore(state => state.file)
   const devitStates = useZtndStore(state => state.devitStates)
   const setDevitStates = useZtndStore(state => state.setDevitStates)
   const setFile = useZtndStore(state => state.setFile)

   const devit = {
      userInfo: {
         avatar: userData?.image,
         name: userData?.name,
         nickname: userData?.nickname
      },
      content: textareaMsg.trim(),
      createdAt: new Date().getTime(),
      likesCount: [],
      sharedCounts: [],
      devitResponses: []
   }
   const popUp = !false
   const handleSubmit = async () => {
      setDevitStates(UPLOADING)

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
      const imgInfo = await upLoadImage(file).catch(console.error)

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
               setFile(null)
               return
            }
            setFile(null)
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
