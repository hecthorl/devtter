import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'

export default function DevtterApp({
   Component,
   pageProps: { session, ...pageProps }
}) {
   return (
      <SessionProvider session={session}>
         <ChakraProvider>
            <Component {...pageProps} />
         </ChakraProvider>
      </SessionProvider>
   )
}
