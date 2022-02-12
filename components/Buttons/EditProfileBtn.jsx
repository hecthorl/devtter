import { Button, Text } from '@chakra-ui/react'
import useNearScreen from 'hooks/useNearScreen'
import { useRef } from 'react'

const EditProfileBtn = () => {
   const btnRef = useRef(null)
   useNearScreen(btnRef)

   return (
      <Button
         ref={btnRef}
         minW="36px"
         maxH="36px"
         rounded="full"
         border="1px solid #536471"
         transitionDuration="0.2s"
         bg="transparent"
         textColor="white"
         _hover={{
            bg: 'rgba(239 243 244 / 10%)'
         }}
      >
         <Text>Editar perfil</Text>
      </Button>
   )
}

export default EditProfileBtn
