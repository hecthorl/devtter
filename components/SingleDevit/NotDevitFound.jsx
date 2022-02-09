import Link from 'next/link'
import { Center, Text, Link as ChakraLink } from '@chakra-ui/react'

const NotDevitFound = () => {
   return (
      <Center textColor="white">
         <Text opacity={0.5}>Esta página no existe</Text>
         <Link passHref href="/home">
            <ChakraLink ml={2} textColor="leela.500">
               Ir a Home
            </ChakraLink>
         </Link>
      </Center>
   )
}

export default NotDevitFound
