import {
   Avatar,
   Box,
   Flex,
   HStack,
   VStack,
   Link as ChakraLink
} from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'
import Link from 'next/link'
import DevitInputTextarea from './DevitInputTextarea'
import DevitLoading from './DevitLoading'
import DevitSubmitBtn from './DevitSubmitBtn'

const DevitInput = () => {
   const { userData } = useUserAuth()

   return (
      <Box
         display={['none', 'flex']}
         w="full"
         px="16px"
         pb="12px"
         borderBottomColor="#38444d"
         borderBottomWidth="1px"
         pos="relative"
      >
         <Link passHref href={`/${userData.nickname.slice(1)}`}>
            <ChakraLink shadow="unset !important">
               <Avatar mr="12px" src={userData.image} name={userData.name} />
            </ChakraLink>
         </Link>
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
         <DevitLoading />
      </Box>
   )
}

export default DevitInput
