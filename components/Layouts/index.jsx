import { useRouter } from 'next/router'
import { Box, CloseButton, Flex, VStack } from '@chakra-ui/react'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput'
import MyModal from 'components/MyModal'
import TrendingGifs from 'components/TrendingGifs'

const Layout = ({ children }) => {
   const { query, push, asPath } = useRouter()
   // console.log(query, 'query')

   function QuerySwitcher() {
      if (Object.keys(query).includes('devitInput')) {
         return (
            <>
               <Flex alignItems="center" h="53px" px="16px" mb={2}>
                  <CloseButton
                     onClick={() => {
                        push(asPath, null, { shallow: true })
                     }}
                     rounded="full"
                     _hover={{
                        backgroundColor: 'rgba(255 255 255 / 10%)'
                     }}
                  />
               </Flex>
               <DevitInput />
            </>
         )
      } else if (Object.keys(query).includes('gif')) {
         return <TrendingGifs />
      } else if (Object.keys(query).includes('XD')) {
         return <Box>Otro gato</Box>
      } else {
         return null
      }
   }

   return (
      <>
         <Flex bg="#15202b" minH="100vh" justify="center" w="full">
            <AppBar />
            <VStack
               borderLeft="1px solid #38444d"
               borderRight="1px solid #38444d"
               w="full"
               maxW="600px"
            >
               {children}
            </VStack>
            <Aside />
         </Flex>
         <MyModal>
            <QuerySwitcher />
         </MyModal>
      </>
   )
}

export default Layout
