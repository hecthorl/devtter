import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import DevitMedia from 'components/DevitMedia'
import DevitReactions from 'components/DevitReactions'
import getDevit from 'services/getDevit'
import Loading from './Loading'
import NotDevitFound from './NotDevitFound'
import OptionsBtn from 'components/Buttons/OptionsBtn'

const SigleDevit = () => {
   const { query } = useRouter()
   const { data: devit, error } = useSWR(query.devitId, getDevit)

   if (error) return <NotDevitFound />
   if (!devit) return <Loading />
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
               <Avatar
                  mr="12px"
                  src={devit.userInfo.avatar}
                  name={devit.userInfo.name}
               />
               <Flex
                  direction="column"
                  justify="center"
                  lineHeight={1.3}
                  fontSize="15px"
               >
                  <Text fontWeight="bold">{devit.userInfo.name}</Text>
                  <Text opacity={0.5}>{devit.userInfo.nickname}</Text>
               </Flex>
            </Flex>
            <OptionsBtn />
         </Flex>
         <Text fontSize="23px" my={2}>
            {devit.content}
         </Text>
         <DevitMedia img={devit.img} />
         <Box py="16px">
            <Text opacity={0.5} as="time">
               {new Intl.DateTimeFormat('es-ES', {
                  hour12: true,
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: 'numeric'
               }).format(devit.createdAt)}
            </Text>
            <Text opacity={0.5} as="span" ml={2}>
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
