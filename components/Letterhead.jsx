import { Flex, Text, Box } from '@chakra-ui/react'
import FollowingBtn from './Buttons/FollowingBtn'
import GoBackBtn from './Buttons/GoBackBtn'

const Letterhead = () => {
   return (
      <Box
         zIndex={10}
         cursor="pointer"
         h="53px"
         pos="sticky"
         top="0"
         w="inherit"
      >
         <Flex
            px="16px"
            w="inherit"
            align="center"
            justify="center"
            bg="rgb(21 32 43 / 75%)"
            backdropFilter="blur(12px)"
            height="full"
         >
            <Box minW="56px" minH="32px">
               <GoBackBtn />
            </Box>
            <Flex
               h="full"
               direction="column"
               justify="center"
               align="start"
               lineHeight="18px"
               flex={1}
            >
               <Text fontSize="xl" fontWeight="bold" color="white">
                  Nombre del Perfil
               </Text>
               <Text fontSize="sm" opacity={0.5} color="white">
                  25,5 mill Devits
               </Text>
            </Flex>
            <Box minW="56px" minH="32px">
               <FollowingBtn />
            </Box>
         </Flex>
      </Box>
   )
}

export default Letterhead

/**
 * Para home
 * <Box flex={1}>
               <Text fontSize="xl" fontWeight="bold" color="white">
                  Inicio
               </Text>
            </Box>
            <Flex justify="end" minW="56px">
               <Box as="span">✨</Box>
            </Flex>
 */

/**
 * Para Perfil
 <Box minW="56px" minH="32px">
               <GoBackBtn />
            </Box>
            <Flex h="full" direction="column" justify="start" align="center" flex={1}>
               <Text fontSize="xl" fontWeight="bold" color="white">
                  Nombre del Perfil
               </Text>
               <Text fontSize="sm" opacity={0.5} color="white">
                  25,5 mill Devits
               </Text>
            </Flex>
            <Box minW="56px" minH="32px"></Box>
 */
