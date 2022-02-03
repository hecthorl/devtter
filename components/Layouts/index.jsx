import dynamic from 'next/dynamic'
import { Flex, VStack } from '@chakra-ui/react'
import Aside from 'components/Aside'

const AppBar = dynamic(() => import('components/AppBar'), {
   ssr: false
})

const Layout = ({ children }) => {
   return (
      <Flex bg="#15202b" minH="100vh" justify="center" w="full">
         <AppBar />
         <VStack
            borderLeft="1px solid #38444d"
            borderRight="1px solid #38444d"
            w="600px"
         >
            {children}
         </VStack>
         <Aside />
      </Flex>
   )
}

export default Layout
