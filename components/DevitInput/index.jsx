import Link from 'next/link'
import { useState } from 'react'
import {
   Avatar,
   Box,
   Button,
   Flex,
   HStack,
   Link as ChakraLink,
   Text
} from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'
import DevitInputTextarea from './DevitInputTextarea'
import DevitLoading from './DevitLoading'
import useSendDevit from 'hooks/useSendDevit'

const DevitInput = () => {
   const [textareaMsg, setTextareaMsg] = useState('')
   const { userData } = useUserAuth()
   const { handleSubmit, isBtnDisable } = useSendDevit(
      textareaMsg,
      setTextareaMsg
   )

   return (
      <Box
         display={['none', 'flex']}
         w="full"
         px="16px"
         pb="12px"
         pos="relative"
         h="full"
      >
         <Link passHref href={`/${userData.nickname.slice(1)}`}>
            <ChakraLink shadow="unset !important">
               <Avatar mr="12px" src={userData.image} name={userData.name} />
            </ChakraLink>
         </Link>
         <Flex direction="column" width="full" height="full">
            <DevitInputTextarea
               value={textareaMsg}
               onChange={e => setTextareaMsg(e.target.value)}
            />
            <Box w="full" borderBottom="1px solid #38444d" my={1} />
            <Flex pt="12px" justify="space-between" align="center" w="full">
               <HStack spacing={6}>
                  <Box>🐱‍🏍</Box>
                  <Box>🐱‍👤</Box>
                  <Box>🐱‍💻</Box>
                  <Box>🐱‍🐉</Box>
                  <Box>🐱‍👓</Box>
               </HStack>
               <Button
                  onClick={handleSubmit}
                  h="36px"
                  rounded="full"
                  disabled={isBtnDisable}
                  bg="leela.500"
                  _disabled={{ pointerEvents: 'none', opacity: 0.5 }}
                  _hover={{ opacity: 0.9 }}
               >
                  <Text textColor="white">Devittear</Text>
               </Button>
            </Flex>
         </Flex>
         <DevitLoading />
      </Box>
   )
}

export default DevitInput
