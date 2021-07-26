import ContextProvider from 'context/Context'
import '../styles/globals.css'

const DevtterApp = ({ Component, pageProps }) => {
   if (typeof window !== 'undefined') {
      console.log(navigator.userAgent)
   }
   return (
      <ContextProvider>
         <Component {...pageProps} />
      </ContextProvider>
   )
}

export default DevtterApp
