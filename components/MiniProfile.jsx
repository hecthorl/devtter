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
import { BsThreeDots } from 'react-icons/bs'
import { GiCheckMark } from 'react-icons/gi'

const MiniProfile = () => {
   const { userData, signOut } = useUserAuth()

   if (!userData) return null
   return (
      <Popover>
         <PopoverTrigger>
            <Flex
               rounded="full"
               cursor="pointer"
               align="center"
               transitionDuration="0.2s"
               justify={{
                  base: 'center',
                  xl: 'flex-start'
               }}
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
               <Box
                  minW={0}
                  w="full"
                  display={{
                     base: 'none',
                     xl: 'flex'
                  }}
                  justifyContent="space-between"
                  alignItems="center"
               >
                  <Box lineHeight="21px" mx="12px" overflow="hidden">
                     <Text isTruncated>{userData.name}</Text>
                     <Text opacity={0.5}>{userData.nickname}</Text>
                  </Box>
                  <Icon fontSize="18px" as={BsThreeDots} />
               </Box>
            </Flex>
         </PopoverTrigger>
         <PopoverContent
            as="div"
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
                     py="12px"
                     px="16px"
                     borderBottom="1px solid #38444d"
                  >
                     <Avatar
                        w="48px"
                        h="48px"
                        src={userData.image}
                        name={userData.name}
                     />
                     <Flex align="center" justify="space-between" flex={1}>
                        <Box lineHeight="21px" mx="12px" overflow="hidden">
                           <Text fontWeight="bold" isTruncated>
                              {userData.name}
                           </Text>
                           <Text opacity={0.5}>{'@' + userData.nickname}</Text>
                        </Box>
                        <Icon
                           textColor="leela.500"
                           fontSize="18px"
                           as={GiCheckMark}
                        />
                     </Flex>
                  </Flex>
                  <Text
                     _hover={{ bg: 'rgb(25 39 52)' }}
                     transition="background-color 0.2s ease"
                     p="16px"
                  >
                     Agregar una cuenta existente
                  </Text>
                  <Box
                     display="grid"
                     _hover={{ bg: 'rgb(25 39 52)' }}
                     transition="background-color 0.2s ease"
                     onClick={() => signOut()}
                     p="16px"
                     as="button"
                     textAlign="start"
                  >
                     <Text as="span">Cerrar la sesion de</Text>
                     <Text as="span">{'@' + userData.nickname}</Text>
                  </Box>
               </Flex>
            </PopoverBody>
         </PopoverContent>
      </Popover>
   )
}

export default MiniProfile
