import Head from 'next/head'
import { useEffect, useState } from 'react'

import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'
import TimeLine from 'components/TimeLine'
import useAuthUser from 'hooks/useAuthUser'
import { getSession } from 'next-auth/react'
import { db, listenLatestDevits } from 'ownFirebase/cliente'
import useStore from 'store'
import getLatesetDevits from 'helpers/getLatesetDevits'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { mapDevitfromFirebase } from 'helpers/devitsFromFirestore'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])
   const popUp = useStore(state => state.popUp)
   const { userData } = useAuthUser()

   useEffect(() => {
      let unSubscribe = null
      if (userData.user.email) {
         const consulta = query(
            collection(db, 'devits'),
            orderBy('createdAt', 'desc')
         )
         unSubscribe = onSnapshot(consulta, querySnapshot => {
            const newDevits = querySnapshot.docs.map(mapDevitfromFirebase)
            setTimeLine(newDevits)
         })
      }
      // getLatesetDevits()
      // let unSubscribe = null
      // if (userData.user.email) {
      //    unSubscribe = listenLatestDevits(setTimeLine)
      //    console.log(userData?.user)
      // }
      return () => unSubscribe && unSubscribe()
   }, [userData.user])
   console.log({ timeLine })
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
            {popUp && <DevitInput />}
         </div>
      </>
   )
}

// eslint-disable-next-line space-before-function-paren
export async function getServerSideProps(context) {
   const session = await getSession(context)

   const authenticated = {
      props: { session }
   }
   const unAuth = {
      redirect: {
         destination: '/',
         permanent: false
      }
   }
   if (session) return authenticated
   return unAuth
}
export default Home
