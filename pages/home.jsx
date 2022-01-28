import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { Flex } from '@chakra-ui/react'
import Timeline from 'components/Timeline'
import Aside from 'components/Aside'
import AppBar from 'components/AppBar'

const Home = () => {
   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Flex bg="#15202b" minH="100vh" justify="center" w="full">
            <AppBar />
            <Timeline />
            <Aside />
         </Flex>
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
