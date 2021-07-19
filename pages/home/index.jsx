import Head from 'next/head'
import { useEffect, useState } from 'react'
import { listenLatestDevits } from 'firebase/cliente'
import useUser from 'hooks/useUser'

import AppBar from 'components/AppBar'
import TimeLine from 'components/TimeLine'
import useGlobalContext from 'hooks/useGlobalContext'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])
   const { ref, popUp } = useGlobalContext()
   const user = useUser()

   useEffect(() => {
      let unSubscribe = null
      if (user) {
         unSubscribe = listenLatestDevits(setTimeLine)
      }
      return () => unSubscribe && unSubscribe()
   }, [user])
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

export default Home
