import { Flex, Box } from '@chakra-ui/react'

const Letterhead = ({ children }) => {
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
            {children}
         </Flex>
      </Box>
   )
}

export default Letterhead
