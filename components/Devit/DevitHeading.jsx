import { Box, Flex, Icon, Tooltip } from '@chakra-ui/react'
import useTimeAgo from 'hooks/useTimeAgo'
import { BsThreeDots } from 'react-icons/bs'

const DevitHeading = ({ username, createdAt }) => {
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
                  {'@' + username.replaceAll(' ', '_')}
               </Box>
            </Box>
            <Box flexShrink={0}>·</Box>
            <Tooltip
               gutter={0}
               openDelay={600}
               label={timeAgo}
               aria-label="A tooltip"
            >
               <Box whiteSpace="nowrap" flexShrink={0} as="time">
                  {timeAgo}
               </Box>
            </Tooltip>
         </Flex>
         <Flex
            role="group"
            as="button"
            align="center"
            justify="center"
            fontSize="lg"
            rounded="full"
            bg="rgba(29 155 240 / 0%)"
            w="34.75px"
            h="34.75px"
            _hover={{
               bg: 'rgba(29 155 240 / 10%)'
            }}
         >
            <Icon
               as={BsThreeDots}
               _groupHover={{
                  textColor: 'rgba(29 155 240 / 100%)'
               }}
            />
         </Flex>
      </Flex>
   )
}

export default DevitHeading
