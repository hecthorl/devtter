import ContextProvider from 'context/Context'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
   return (
      <ContextProvider>
         <Component {...pageProps} />
      </ContextProvider>
   )
}

export default MyApp
