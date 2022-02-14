import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import Layouts from 'components/Layouts'
const BodySwitch = dynamic(() => import('components/Layouts/BodySwitch'), {
   ssr: false
})

const Home = () => {
   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Layouts>
            <BodySwitch />
         </Layouts>
      </>
   )
}

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
   return session ? authenticated : unAuth
}
export default Home
