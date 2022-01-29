import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Timeline from 'components/Timeline'

const TimelineLayout = () => {
   return (
      <VStack
         borderLeftColor="#38444d"
         borderRightColor="#38444d"
         borderRightWidth="1px"
         borderLeftWidth="1px"
         w="full"
         maxW="600px"
      >
         <Flex
            bg="rgb(21 32 43 / 75%)"
            backdropBlur="10px"
            cursor="pointer"
            align="center"
            h="53px"
            px="16px"
            justify="space-between"
            pos="sticky"
            w="inherit"
            top="0"
            fontSize="xl"
         >
            <Text fontWeight="bold" color="white">
               Inicio
            </Text>
            <Box as="span">✨</Box>
         </Flex>
         <Box w="inherit">
            <Timeline />
         </Box>
      </VStack>
   )
}

export default TimelineLayout
