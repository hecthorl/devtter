import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Layout from 'components/Layout'
import Letterhead from 'components/Letterhead'
import BodySwitch from 'components/Layout/BodySwitch'

const Home = () => {
   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Layout>
            <Letterhead />
            <BodySwitch />
         </Layout>
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
