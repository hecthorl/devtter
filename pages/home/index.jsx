import {
   AuthAction,
   withAuthUser,
   withAuthUserTokenSSR,
   useAuthUser
} from 'next-firebase-auth'

import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { listenLatestDevits } from 'firebase/cliente'
import useGlobalContext from 'hooks/useGlobalContext'

import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'

const TimeLine = dynamic(import('components/TimeLine'), { ssr: false })

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

   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <div ref={ref} className="home-container">
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
