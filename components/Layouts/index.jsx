import { Flex, VStack } from '@chakra-ui/react'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'

const Layout = ({ children }) => {
   return (
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
   )
}

export default Layout
