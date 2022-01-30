import { Box, Flex, Icon } from '@chakra-ui/react'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaRetweet } from 'react-icons/fa'
import { FiShare } from 'react-icons/fi'
import { IoChatboxOutline } from 'react-icons/io5'

const DevitReactions = ({
   devitResponses = [],
   likesCount = [],
   sharedCounts = []
}) => {
   return (
      <Flex
         mt="12px"
         maxW="425px"
         w="full"
         justify="space-between"
         align="center"
         textColor="rgb(136, 153, 166)"
      >
         <Flex fontSize="15px" justify="center" align="center">
            <Icon as={IoChatboxOutline} />
            <Box px="12px">{devitResponses.length}</Box>
         </Flex>
         <Flex justify="center" align="center">
            <Icon as={FaRetweet} />
            <Box px="12px">{sharedCounts.length}</Box>
         </Flex>
         <Flex justify="center" align="center">
            <Icon as={AiOutlineHeart} />
            <Box px="12px">{likesCount.length}</Box>
         </Flex>
         <Icon as={FiShare} />
      </Flex>
   )
}

export default DevitReactions
