import { Box, Flex, Icon, Input, Text } from '@chakra-ui/react'
import FollowItem from './FollowItem'
import TrendItem from './TrendItem'

const Aside = () => {
   return (
      <Flex
         top="-298px"
         pos="sticky"
         direction="column"
         maxW="350px"
         w="full"
         ml="30px"
         pt="4px"
      >
         <Flex
            top={0}
            bg="#15202b"
            pos="fixed"
            maxW="350px"
            w="full"
            h="53px"
            align="center"
         >
            <Input
               h="44px"
               variant="filled"
               py="12px"
               bg="#253341"
               textColor="white"
               rounded="full"
               _hover={{
                  bg: '#253341'
               }}
               placeholder="Buscar en Devtter"
            />
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
               <Icon />
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
                  <Icon />
               </Flex>
            </Flex>
            <FollowItem />
            <Box p="16px" fontSize="xl" textColor="white">
               <Text fontSize="md">Mostrar más</Text>
            </Box>
         </Flex>
         <Text
            as="span"
            pt={2}
            fontSize="sm"
            textColor="rgba(255 255 255 / 50%)"
         >
            © 2022 Devtter, Inc. xD
         </Text>
      </Flex>
   )
}

export default Aside
