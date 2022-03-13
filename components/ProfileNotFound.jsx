import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const ProfileNotFound = () => {
   const { query } = useRouter()

   return (
      <Box textColor="#8899a6" w="full">
         <Flex direction="column">
            <Box h="200px" bg="#3d5466" />
            <VStack
               fontSize="15px"
               spacing="12px"
               align="stretch"
               p="12px 16px"
            >
               <Flex justify="space-between">
                  <Box
                     bg="#192734"
                     rounded="full"
                     mt="-15%"
                     border="4px solid"
                     borderColor="#15202b"
                     // TODO: Poner mediaqueries a w/h
                     w="141.5px"
                     h="141.5px"
                  >
                     <Box />
                  </Box>
                  <Box />
               </Flex>
               <Text textColor="white" fontSize="20px" fontWeight="bold">
                  {'@' + query.profile}
               </Text>
            </VStack>
         </Flex>
         <Box my={10} textAlign="center">
            <Text fontWeight="bold" fontSize="3xl" textColor="white">
               Esta cuenta no existe
            </Text>
            <Text fontSize="md">Intenta hacer otra búsqueda.</Text>
         </Box>
      </Box>
   )
}

export default ProfileNotFound
