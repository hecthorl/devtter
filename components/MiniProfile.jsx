import {
   Avatar,
   Box,
   Flex,
   Icon,
   Popover,
   PopoverArrow,
   PopoverBody,
   PopoverContent,
   PopoverTrigger,
   Text
} from '@chakra-ui/react'

import useUserAuth from 'hooks/useAuthUser'
import { FcCheckmark } from 'react-icons/fc'
import { BsThreeDots } from 'react-icons/bs'

const MiniProfile = () => {
   const { userData, signOut } = useUserAuth()
   return (
      <Popover>
         <PopoverTrigger>
            <Flex
               rounded="full"
               cursor="pointer"
               justify="space-between"
               align="center"
               my="12px"
               p="12px"
               _hover={{
                  bg: 'rgba(255 255 255 / 10%)'
               }}
            >
               <Avatar
                  w="40px"
                  h="40px"
                  src={userData.image}
                  name={userData.name}
               />
               <Box lineHeight="21px" mx="12px" overflow="hidden">
                  <Text isTruncated>{userData.name}</Text>
                  <Text>{'@' + userData.name.replace(' ', '_')}</Text>
               </Box>
               <Icon fontSize="18px" as={BsThreeDots} />
            </Flex>
         </PopoverTrigger>
         <PopoverContent
            style={{
               boxShadow:
                  'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px'
            }}
            rounded="2xl"
            border={0}
            bg="#15202b"
         >
            <PopoverArrow bg="#15202b" />
            <PopoverBody px="0">
               <Flex direction="column">
                  <Flex
                     justify="space-between"
                     align="center"
                     my="12px"
                     py="12px"
                     px="16px"
                     borderBottomColor="#38444d"
                     borderBottomWidth="1px"
                  >
                     <Avatar
                        w="48px"
                        h="48px"
                        src={userData.image}
                        name={userData.name}
                     />
                     <Box lineHeight="21px" mx="12px" overflow="hidden">
                        <Text isTruncated>{userData.name}</Text>
                        <Text>{'@' + userData.name.replace(' ', '_')}</Text>
                     </Box>
                     <Icon fontSize="18px" as={FcCheckmark} />
                  </Flex>
                  <Text p="16px">Agregar una cuenta existente</Text>
                  <Box onClick={() => signOut()} p="16px" w="full" as="button">
                     <Text>Cerrar la sesion de</Text>
                     <Text>@asdasd</Text>
                  </Box>
               </Flex>
            </PopoverBody>
         </PopoverContent>
      </Popover>
   )
}

export default MiniProfile
