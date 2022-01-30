import { Avatar, Box, Flex, HStack, VStack } from '@chakra-ui/react'

import useUserAuth from 'hooks/useAuthUser'
import DevitInputTextarea from './DevitInputTextarea'
import DevitSubmitBtn from './DevitSubmitBtn'

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
            <DevitInputTextarea />
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
               <DevitSubmitBtn />
            </Flex>
         </VStack>
      </Flex>
   )
}

export default DevitInput
