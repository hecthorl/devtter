import Head from 'next/head'
import { getSession } from 'next-auth/react'
import NotLoggedUser from 'components/NotLoggedUser'

const Index = () => (
   <>
      <Head>
         <title>Devtter</title>
         <meta name="description" content="Un clon de Twitter" />
         <link rel="icon" href="/faviconLogo.ico" />
      </Head>
      <NotLoggedUser />
   </>
)

export async function getServerSideProps(context) {
   const session = await getSession(context)

   const authenticated = {
      redirect: {
         destination: '/home',
         permanent: false
      }
   }
   const unAuth = {
      props: {}
   }
   return session ? authenticated : unAuth
}

export default Index
