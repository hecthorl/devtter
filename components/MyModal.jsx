/* eslint-disable camelcase */
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalCloseButton,
   Flex,
   Box,
   Text
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import useZtndStore from 'ztndStore'
import DevitInput from './DevitInput'

const MyModal = ({ gifs = [] }) => {
   const { query, push } = useRouter()

   const isPopup = useZtndStore(state => state.isPopup)
   const setIspopup = useZtndStore(state => state.setIspopup)

   return (
      <Modal
         isOpen={isPopup || query?.gif}
         onClose={() => {
            setIspopup(false)
            push('/home', null, { shallow: true })
         }}
      >
         <ModalOverlay bg="rgb(91 112 131 / 40%)" />

         <ModalContent
            rounded="2xl"
            width="full"
            maxW="600px"
            maxH="90vh"
            bg="rgb(21 32 43)"
            textColor="white"
            overflow="hidden"
         >
            <Flex mb={2} justify="start" align="center" height="53px" px="16px">
               <ModalCloseButton
                  onClick={() => push('/home', null, { shallow: true })}
                  pos="static"
                  rounded="full"
                  bg="transparent"
                  textColor="white"
                  _hover={{ bg: 'rgb(91 112 131 / 40%)' }}
               />
            </Flex>
            {query?.gif ? (
               <Box w="full" overflowY="scroll">
                  <Box
                     display="grid"
                     gridTemplateColumns="1fr 1fr"
                     gridTemplateRows="repeat(10, 150px)"
                     gap={1}
                  >
                     {gifs.map(({ display_name, img, id }) => (
                        <Box pos="relative" key={id}>
                           <img
                              style={{
                                 objectFit: 'cover',
                                 width: '100%',
                                 height: '100%'
                              }}
                              src={img}
                           />
                           <Box
                              pos="absolute"
                              background="linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                              color="white"
                              zIndex={2}
                              bottom={0}
                              width="full"
                              fontSize="2xl"
                              padding="8px"
                           >
                              <Text>{display_name}</Text>
                           </Box>
                        </Box>
                     ))}
                  </Box>
               </Box>
            ) : (
               <DevitInput />
            )}
         </ModalContent>
      </Modal>
   )
}

export default MyModal
