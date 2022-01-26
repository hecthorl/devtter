import Head from 'next/head'
import Dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import useStore from 'store'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import DevitInput from 'components/DevitInput/DevitInputModal'
import SkeletonDevit from 'components/Devit/SkeletonDevit'

const TimeLine = Dynamic(() => import('components/TimeLine'), {
   ssr: false,
   loading: () => <SkeletonDevit />
})

const Home = () => {
   const popUp = useStore(state => state.popUp)
   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <div className="home-container">
            <AppBar />
            <TimeLine />
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
