import ContextProvider from 'context/Context'
import initAuth from 'firebase/InitAuth'
import '../styles/globals.css'

initAuth()

const DevtterApp = ({ Component, pageProps }) => {
   return (
      <ContextProvider>
         <Component {...pageProps} />
      </ContextProvider>
   )
}

export default DevtterApp
