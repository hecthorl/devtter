import { useRouter } from 'next/router'
import { Flex, VStack } from '@chakra-ui/react'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput'
import MyModal from 'components/MyModal'
import TrendingGifs from 'components/TrendingGifs'

const Layout = ({ children }) => {
   const { query } = useRouter()
   console.log(query, 'query')
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
            {Object.keys(query).includes('devitInput') && <DevitInput />}
            {Object.keys(query).includes('gif') && <TrendingGifs />}
         </MyModal>
      </>
   )
}

export default Layout
