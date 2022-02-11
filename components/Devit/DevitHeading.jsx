import { Box, Flex, Tooltip } from '@chakra-ui/react'
import OptionsBtn from 'components/Buttons/OptionsBtn'
import useTimeAgo from 'hooks/useTimeAgo'

const DevitHeading = ({ username, createdAt, nickname }) => {
   const timeAgo = useTimeAgo(createdAt)
   return (
      <Flex justify="space-between" align="center">
         <Flex minW={0} gap={1} textColor="rgb(136, 153, 166)">
            <Box
               textOverflow="ellipsis"
               flexShrink={1}
               overflow="hidden"
               whiteSpace="nowrap"
            >
               <Box
                  as="span"
                  _hover={{
                     textDecoration: 'underline'
                  }}
                  textColor="white"
                  fontWeight="bold"
               >
                  {username}
               </Box>
               <Box ml={1} as="span">
                  {nickname}
               </Box>
            </Box>
            <Box flexShrink={0}>·</Box>
            <Tooltip
               gutter={0}
               openDelay={600}
               label={timeAgo}
               aria-label={timeAgo}
               fontSize="12px"
            >
               <Box whiteSpace="nowrap" flexShrink={0} as="time">
                  {timeAgo}
               </Box>
            </Tooltip>
         </Flex>
         <OptionsBtn />
      </Flex>
   )
}

export default DevitHeading
