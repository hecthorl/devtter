import { Box, CloseButton, Image } from '@chakra-ui/react'
import useZtndStore from 'ztndStore'

const OnImage = ({ preview, setPreview }) => {
   const setFile = useZtndStore(state => state.setFile)

   if (!preview) return null
   return (
      <Box pos="relative">
         <CloseButton
            onClick={() => {
               setFile(null)
               setPreview()
               console.log('xddddddd')
            }}
            rounded="full"
            bg="rgba(0 0 0 / 50%)"
            textColor="white"
            w="32px"
            h="32px"
            pos="absolute"
            top="0"
            left={0}
            _hover={{ bg: 'rgba(239, 243, 244, 0.1)' }}
         />
         <Image src={preview} rounded="2xl" h="18rem" objectFit="cover" />
      </Box>
   )
}

export default OnImage
