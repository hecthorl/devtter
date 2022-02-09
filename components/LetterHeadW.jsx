import { Box, Flex, Icon } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'

const LetterHeadW = ({ children }) => {
   return (
      <Flex
         zIndex={10}
         bg="rgb(21 32 43 / 75%)"
         backdropFilter="blur(12px)"
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
         <Box minW="56px" minH="32">
            <Icon as={FiArrowLeft} />
         </Box>
         <Box></Box>
         <Box></Box>
      </Flex>
   )
}

export default LetterHeadW
