import Head from 'next/head'
import { useEffect, useState } from 'react'

import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'
import TimeLine from 'components/TimeLine'
import useAuthUser from 'hooks/useAuthUser'
import { getSession } from 'next-auth/react'
import { listenLatestDevits } from 'ownFirebase/cliente'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])
   // const { ref, popUp } = useGlobalContext()

   const { userData } = useAuthUser()

   useEffect(() => {
      let unSubscribe = null
      if (userData.user.email) {
         unSubscribe = listenLatestDevits(setTimeLine)
      }
      return () => unSubscribe && unSubscribe()
   }, [userData.user])

   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <div className="home-container">
            <AppBar />
            <TimeLine devits={timeLine} />
            <Aside />
            {false && <DevitInput />}
         </div>
      </>
   )
}

// eslint-disable-next-line space-before-function-paren
export async function getServerSideProps(context) {
   const session = await getSession(context)
   return {
      props: { session }
   }
}
export default Home
