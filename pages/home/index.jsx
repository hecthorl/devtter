import Head from 'next/head'

import { useEffect, useState } from 'react'
import { listenLatestDevits } from 'firebase/cliente'
import useUser from 'hooks/useUser'

import AppBar from 'components/AppBar'
import TimeLine from 'components/TimeLine'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])

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
         <section className="bg-blue-900 text-white w-full flex justify-center">
            <AppBar />
            <TimeLine devits={timeLine} />
            <div className="hidden xl:block w-52 h-full"></div>
         </section>
      </>
   )
}

export default Home
