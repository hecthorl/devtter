import NextLink from 'next/link'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'

const LetterheadStatus = () => {
   return (
      <Flex
         zIndex={10}
         bg="rgb(21 32 43 / 75%)"
         backdropFilter="blur(10px)"
         cursor="pointer"
         align="center"
         h="53px"
         px="16px"
         justify="space-between"
         pos="sticky"
         w="inherit"
         top="0"
         fontSize="xl"
         borderLeft="1px solid #38444d"
         borderRight="1px solid #38444d"
      >
         <Flex textColor="white" justify="center">
            <NextLink href="/home" passHref>
               <Flex
                  align="center"
                  justify="center"
                  as="a"
                  color="white"
                  bg="inherit"
                  rounded="full"
                  w="36px"
                  h="36px"
               >
                  <Icon as={FiArrowLeft} />
               </Flex>
            </NextLink>
            <Text ml={3} fontWeight="bold">
               Devit
            </Text>
         </Flex>
         <Box opacity={0} as="span">
            ✨
         </Box>
      </Flex>
   )
}

export default LetterheadStatus
