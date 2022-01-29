import {
   Avatar,
   Box,
   Button,
   Flex,
   HStack,
   Text,
   VStack
} from '@chakra-ui/react'
import Textarea from 'react-textarea-autosize'
import useUserAuth from 'hooks/useAuthUser'

const DevitInput = () => {
   const { userData } = useUserAuth()
   return (
      <Flex
         px="16px"
         pb="12px"
         borderBottomColor="#38444d"
         borderBottomWidth="1px"
      >
         <Avatar
            mr="12px"
            src={userData.user.image}
            name={userData.user.name}
         />
         <VStack width="full" spacing={0}>
            <Textarea
               placeholder="¿Qué esta pasando?"
               minRows={2}
               style={{
                  width: '100%',
                  background: '#15202b',
                  resize: 'none',
                  color: 'white',
                  outline: 'none',
                  fontSize: '20px'
               }}
            />
            <Box
               w="full"
               borderBottomColor="#38444d"
               my={1}
               borderBottomWidth="1px"
            />
            <Flex pt="12px" justify="space-between" align="center" w="full">
               <HStack spacing={6}>
                  <Box>🐱‍🏍</Box>
                  <Box>🐱‍👤</Box>
                  <Box>🐱‍💻</Box>
                  <Box>🐱‍🐉</Box>
                  <Box>🐱‍👓</Box>
               </HStack>
               <Button h="36px" rounded="full" bg="orange.700">
                  <Text textColor="white"> Devittear</Text>
               </Button>
            </Flex>
         </VStack>
      </Flex>
   )
}

export default DevitInput
