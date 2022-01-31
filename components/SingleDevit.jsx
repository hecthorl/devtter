import { Avatar, Box, Flex, Icon, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import getDevit from 'services/getDevit'
import DevitReactions from './DevitReactions'

const SigleDevit = () => {
   const [devit, setDevit] = useState(null)
   const { query } = useRouter()

   useEffect(async () => {
      if (!query.devitId) return
      const data = await getDevit(query.devitId)
      setDevit(data)
   }, [query.devitId])
   if (!devit) return null
   return (
      <Flex
         pb="12px"
         borderBottom="1px solid #38444d"
         direction="column"
         px="16px"
         textColor="white"
      >
         <Flex align="center" justify="space-between" w="full">
            <Flex>
               <Avatar mr="12px" src={devit.avatar} name={devit.username} />
               <Flex
                  direction="column"
                  justify="center"
                  lineHeight={1.3}
                  fontSize="15px"
               >
                  <Text fontWeight="bold">{devit.username}</Text>
                  <Text opacity={0.5}>{devit.username}</Text>
               </Flex>
            </Flex>
            <Flex
               as="button"
               align="center"
               justify="center"
               _hover={{
                  bg: 'rgba(255 255 255 / 10%)'
               }}
               rounded="full"
               w="34.75px"
               h="34.75px"
            >
               <Icon />
            </Flex>
         </Flex>
         <Text my={2}>{devit.content}</Text>
         {devit.img === 'No Image' ? 'holi' : null}
         <Box
            borderBottom="1px solid #38444d"
            borderTop="1px solid #38444d"
            py="16px"
         >
            <Text as="time">
               {new Intl.DateTimeFormat('es-ES', {
                  hour12: true,
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: 'numeric'
               }).format(devit.createdAt)}
            </Text>
            <Text as="span" ml={2}>
               Twitter for web
            </Text>
         </Box>
         <Flex justify="center">
            <DevitReactions />
         </Flex>
      </Flex>
   )
}
export default SigleDevit
