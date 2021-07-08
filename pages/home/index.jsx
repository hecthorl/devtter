import Head from 'next/head'
import { useEffect, useState } from 'react'
import { listenLatestDevits } from 'firebase/cliente'
import useUser from 'hooks/useUser'

import AppBar from 'components/AppBar'
import TimeLine from 'components/TimeLine'
import useGlobalContext from 'hooks/useGlobalContext'
import Aside from 'components/Aside/inex'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])
   const { ref } = useGlobalContext()
   const user = useUser()

   useEffect(() => {
      let unSubscribe = null
      if (user) {
         unSubscribe = listenLatestDevits(setTimeLine)
      }
      return () => unSubscribe && unSubscribe()
   }, [user])

   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
         </Head>
         <div
            ref={ref}
            className="bg-primary text-white w-full flex justify-center"
         >
            <AppBar />
            <TimeLine devits={timeLine} />
            <Aside />
         </div>
      </>
   )
}

export default Home
