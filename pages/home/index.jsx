import Head from 'next/head'
import { useEffect, useState } from 'react'

import { listenLatestDevits } from 'firebase/cliente'
// import useGlobalContext from 'hooks/useGlobalContext'

import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'
import TimeLine from 'components/TimeLine'
import useAuthUser from 'hooks/useAuthUser'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])
   // const { ref, popUp } = useGlobalContext()
   // console.log({ ref, popUp })
   const email = useAuthUser()

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
         <div className="home-container">
            <AppBar />
            <TimeLine devits={timeLine} />
            <Aside />
            {false && <DevitInput />}
         </div>
      </>
   )
}

export default Home
