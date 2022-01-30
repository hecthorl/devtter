import { useEffect } from 'react'
import useZtndStore from 'ztndStore'
import { Box, CloseButton, Image } from '@chakra-ui/react'

const OnImage = ({ preview, setPreview }) => {
   const devitStates = useZtndStore(state => state.devitStates)
   const setFile = useZtndStore(state => state.setFile)

   // Cuando se termine de subir la img, el efecto limpia la imagen
   useEffect(() => {
      setPreview(null)
   }, [devitStates])

   if (!preview) return null
   return (
      <Box pos="relative">
         <CloseButton
            onClick={() => {
               setPreview(null)
               setFile(null)
            }}
            rounded="full"
            bg="rgba(0 0 0 / 50%)"
            textColor="white"
            w="32px"
            h="32px"
            pos="absolute"
            top="0"
            left={0}
            _hover={{
               bg: 'rgba(239, 243, 244, 0.1)'
            }}
         />
         <Image src={preview} rounded="2xl" h="18rem" objectFit="cover" />
      </Box>
   )
}

export default OnImage
