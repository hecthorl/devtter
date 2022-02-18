import { Box, Flex, Tooltip } from '@chakra-ui/react'
import OptionsBtn from 'components/Buttons/OptionsBtn'
import useTimeAgo from 'hooks/useTimeAgo'

const DevitHeading = ({ username, createdAt, nickname }) => {
   const timeAgo = useTimeAgo(createdAt)
   return (
      <Flex justify="space-between" lineHeight="17px" align="center">
         <Flex minW={0} gap={1} textColor="rgb(136 153 166)" fontSize="15px">
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
               label={new Intl.DateTimeFormat('es-ES', {
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
               }).format(createdAt)}
               aria-label={new Intl.DateTimeFormat('es-ES', {
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
               }).format(createdAt)}
               fontSize="12px"
            >
               <Box
                  _hover={{ textDecoration: 'underline' }}
                  dateTime={new Date(createdAt).toISOString()}
                  whiteSpace="nowrap"
                  flexShrink={0}
                  as="time"
               >
                  {timeAgo}
               </Box>
            </Tooltip>
         </Flex>
         <OptionsBtn />
      </Flex>
   )
}

export default DevitHeading
