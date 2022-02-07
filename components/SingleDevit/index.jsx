import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
   Avatar,
   Box,
   Flex,
   Icon,
   Text,
   Spinner,
   Center
} from '@chakra-ui/react'
import DevitMedia from 'components/DevitMedia'
import DevitReactions from 'components/DevitReactions'
import getDevit from 'services/getDevit'

const SigleDevit = () => {
   const [devit, setDevit] = useState(null)
   const { query } = useRouter()

   useEffect(async () => {
      if (!query.devitId) return
      // Podría intentar usar SWR
      const data = await getDevit(query.devitId)
      setDevit(data)
   }, [query.devitId])
   if (!devit) {
      return (
         <Center w="full">
            <Spinner color="leela.500" />
         </Center>
      )
   }

   return (
      <Flex
         w="full"
         as="article"
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
         <DevitMedia img={devit.img} />
         <Box py="16px">
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
         <Box
            py="16px"
            borderBottom="1px solid #38444d"
            borderTop="1px solid #38444d"
         >
            <Text>11 Retweets 48 Me gusta</Text>
         </Box>
         <Flex justify="center">
            <DevitReactions />
         </Flex>
      </Flex>
   )
}
export default SigleDevit
