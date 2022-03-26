import {
   Box,
   Flex,
   Input,
   InputGroup,
   InputLeftElement,
   Text
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import FollowItem from './FollowItem'
import TrendItem from './TrendItem'

const Aside = () => (
   <Box
      as="aside"
      display={{ base: 'none', md: 'flex' }}
      h="100vh"
      top="-298px"
      pos="sticky"
      flexDirection="column"
      maxW={{ base: '290px', lg: '350px' }}
      w="full"
      ml={{ base: '20px', md: '30px' }}
      pt="4px"
   >
      <Flex
         zIndex={10}
         top={0}
         bg="#15202b"
         pos="fixed"
         maxW={{ base: '290px', lg: '350px' }}
         w="full"
         h="53px"
         align="center"
      >
         <InputGroup>
            <InputLeftElement
               ml={1.5}
               mt="3px"
               pointerEvents="none"
               fontSize="2xl"
            >
               <BiSearch color="white" />
            </InputLeftElement>
            <Input
               h="44px"
               variant="filled"
               py="12px"
               bg="#253341"
               textColor="white"
               rounded="full"
               _hover={{ bg: '#253341' }}
               placeholder="Buscar en Devtter"
            />
         </InputGroup>
      </Flex>
      <Flex mt="65px" rounded="2xl" direction="column" bg="#192734">
         <Flex
            py="12px"
            px="16px"
            textColor="white"
            align="center"
            justify="space-between"
            borderBottomColor="#38444d"
            borderBottomWidth="1px"
         >
            <Text fontWeight="bold" fontSize="xl">
               Tendencias para ti
            </Text>
         </Flex>
         <TrendItem />
         <TrendItem />
         <TrendItem />
         <TrendItem />
         <Box p="16px" fontSize="lg" textColor="white">
            <Text fontSize="md">Mostrar más</Text>
         </Box>
      </Flex>
      <Flex mt="12px" rounded="2xl" direction="column" bg="#192734">
         <Flex py="12px" px="16px">
            <Flex
               w="full"
               justify="space-between"
               align="center"
               textColor="rgba(255 255 255 / 50%)"
            >
               <Text fontSize="lg">Personas a quien Seguir</Text>
            </Flex>
         </Flex>
         <FollowItem />
         <Box p="16px" fontSize="xl" textColor="white">
            <Text fontSize="md">Mostrar más</Text>
         </Box>
      </Flex>
      <Text as="span" pt={2} fontSize="sm" textColor="rgba(255 255 255 / 50%)">
         © 2022 Devtter, Inc. xD
      </Text>
   </Box>
)

export default Aside
