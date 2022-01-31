import { useState } from 'react'
import {
   Box,
   Button,
   Center,
   CloseButton,
   Flex,
   Icon,
   Image
} from '@chakra-ui/react'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
import DevitReactions from 'components/DevitReactions'

const VisorImg = ({ handleVisor, img, id, likesCount, color }) => {
   document.body.onkeyup = e => {
      if (e.code === 'Escape') handleVisor(false)
   }
   const [toggleWindow, setToggleWindow] = useState(!false)

   return (
      <Box
         display="grid"
         cursor="auto"
         gridTemplateColumns={toggleWindow ? '1fr' : '1fr 350px'}
         pos="fixed"
         top={0}
         bottom={0}
         left={0}
         right={0}
         w="100vw"
         h="100vh"
         bg={`${color}E6`}
         zIndex={10}
      >
         <Flex
            pos="relative"
            direction="column"
            onClick={() => handleVisor(false)}
         >
            <Flex
               w="full"
               pos="absolute"
               p="12px"
               justify="space-between"
               onClick={e => e.stopPropagation()}
            >
               <CloseButton
                  w="40px"
                  h="40px"
                  rounded="full"
                  bg="transparent"
                  textColor="white"
                  onClick={() => handleVisor(false)}
                  _hover={{
                     bg: 'rgba(255 255 255 / 20%)'
                  }}
               />

               <Button
                  w="40px"
                  h="40px"
                  rounded="full"
                  bg="transparent"
                  _hover={{
                     bg: 'rgba(255 255 255 / 20%)'
                  }}
                  aria-label={toggleWindow ? 'Ver devit' : 'Ocultar devit'}
                  onClick={() => setToggleWindow(!toggleWindow)}
               >
                  <Icon
                     fontSize="xl"
                     as={
                        toggleWindow
                           ? HiChevronDoubleRight
                           : HiChevronDoubleLeft
                     }
                  />
               </Button>
            </Flex>
            <Center flex={1}>
               <Image
                  border="1px solid #38444d"
                  onClick={e => e.stopPropagation()}
                  src={img}
               />
            </Center>
            <Center pb={3} onClick={e => e.stopPropagation()}>
               <DevitReactions id={id} likesCount={likesCount} />
            </Center>
         </Flex>
         <Box
            display={!toggleWindow ? 'block' : 'none'}
            w="full"
            bg="red"
            h="full"
         ></Box>
      </Box>
   )
}

export default VisorImg
