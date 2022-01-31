import { SessionProvider } from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'helpers/theme'

export default function DevtterApp({
   Component,
   pageProps: { session, ...pageProps }
}) {
   return (
      <SessionProvider session={session}>
         <ChakraProvider theme={theme}>
            <Component {...pageProps} />
         </ChakraProvider>
      </SessionProvider>
   )
}
