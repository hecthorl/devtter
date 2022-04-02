import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import useZtndStore from 'ztndStore'

const MyModal = ({ children }) => {
   const { query, push } = useRouter()

   // const isPopup = useZtndStore(state => state.isPopup)
   // const setIspopup = useZtndStore(state => state.setIspopup)

   return (
      <Modal
         isOpen={!!Object.keys(query).length}
         onClose={() => {
            // setIspopup(false)
            push('/home', null, { shallow: true })
         }}
      >
         <ModalOverlay bg="rgb(91 112 131 / 40%)" />
         <ModalContent
            rounded="2xl"
            width="full"
            maxW="600px"
            maxH="650px"
            bg="rgb(21 32 43)"
            textColor="white"
            overflow="hidden"
         >
            {children}
         </ModalContent>
      </Modal>
   )
}

export default MyModal
