import ContextProvider from 'context/Context'
import '../styles/globals.css'

const DevtterApp = ({ Component, pageProps }) => {
   return (
      <ContextProvider>
         <Component {...pageProps} />
      </ContextProvider>
   )
}

export default DevtterApp
