import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react'
import modalTrigger from 'helpers/modalTrigger'
import { useRouter } from 'next/router'

const MyModal = ({ children }) => {
   const { query, push, asPath } = useRouter()

   return (
      <Modal
         isOpen={modalTrigger(['gif', 'devitInput'], Object.keys(query))}
         onClose={() => {
            push(asPath, null, { shallow: true })
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
