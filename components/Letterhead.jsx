import { Flex, Text, Box } from '@chakra-ui/react'

const Letterhead = () => {
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
         <Text fontWeight="bold" color="white">
            Inicio
         </Text>
         <Box as="span">✨</Box>
      </Flex>
   )
}

export default Letterhead
