import Head from 'next/head'
import { useEffect, useState } from 'react'
import { listenLatestDevits } from 'firebase/cliente'
import useGlobalContext from 'hooks/useGlobalContext'

import AppBar from 'components/AppBar'
import TimeLine from 'components/TimeLine'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'

import {
   AuthAction,
   withAuthUser,
   withAuthUserTokenSSR,
   useAuthUser
} from 'next-firebase-auth'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])
   const { ref, popUp } = useGlobalContext()
   const { email } = useAuthUser()

   useEffect(() => {
      let unSubscribe = null
      if (email) {
         unSubscribe = listenLatestDevits(setTimeLine)
      }
      return () => unSubscribe && unSubscribe()
   }, [email])
   console.log('veces')

   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <div
            ref={ref}
            className="bg-primary text-white w-full flex justify-center"
         >
            <AppBar />
            <TimeLine devits={timeLine} />
            <Aside />
            {popUp && <DevitInput />}
         </div>
      </>
   )
}
export const getServerSideProps = withAuthUserTokenSSR({
   whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
})()
export default withAuthUser({
   whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
   authPageURL: '/'
})(Home)
