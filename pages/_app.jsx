import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

const DevtterApp = ({ Component, pageProps: { session, ...pageProps } }) => {
   return (
      <SessionProvider session={session}>
         <Component {...pageProps} />
      </SessionProvider>
   )
}

export default DevtterApp
