import { Box, Flex, Icon, Tooltip } from '@chakra-ui/react'
import useTimeAgo from 'hooks/useTimeAgo'
import { BsThreeDots } from 'react-icons/bs'

const DevitHeading = ({ username, createdAt }) => {
   const timeAgo = useTimeAgo(createdAt)
   return (
      <Flex justify="space-between" align="center">
         <Flex gap={1} textColor="rgb(136, 153, 166)">
            <Box
               _hover={{
                  textDecoration: 'underline'
               }}
               textColor="white"
               fontWeight="bold"
            >
               {username}
            </Box>
            <Box>{'@' + username.replaceAll(' ', '_')}</Box>
            <Box>·</Box>
            <Tooltip
               gutter={0}
               openDelay={600}
               label={timeAgo}
               aria-label="A tooltip"
            >
               <Box
                  _hover={{
                     textDecoration: 'underline'
                  }}
               >
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
