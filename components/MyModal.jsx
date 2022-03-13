import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalCloseButton,
   Flex
} from '@chakra-ui/react'
import useZtndStore from 'ztndStore'
import DevitInput from './DevitInput'

const MyModal = () => {
   const isPopup = useZtndStore(state => state.isPopup)
   const setIspopup = useZtndStore(state => state.setIspopup)
   return (
      <Modal isOpen={isPopup} onClose={setIspopup}>
         <ModalOverlay bg="rgb(91 112 131 / 40%)" />

         <ModalContent
            rounded="2xl"
            width="full"
            maxW="600px"
            bg="rgb(21 32 43)"
            textColor="white"
         >
            <Flex mb={2} justify="start" align="center" height="53px" px="16px">
               <ModalCloseButton
                  pos="static"
                  rounded="full"
                  bg="transparent"
                  textColor="white"
                  _hover={{ bg: 'rgb(91 112 131 / 40%)' }}
               />
            </Flex>
            <DevitInput />
         </ModalContent>
      </Modal>
   )
}

export default MyModal
