import NotLoggedUser from 'components/NotLoggedUser'
import Head from 'next/head'
import { getSession } from 'next-auth/react'

const Index = () => {
   return (
      <>
         <Head>
            <title>Devtter App</title>
            <meta name="description" content="Devtter, un twitter para devs" />
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <NotLoggedUser />
      </>
   )
}

// eslint-disable-next-line space-before-function-paren
export async function getServerSideProps(context) {
   const session = await getSession(context)
   if (!session) {
      return {
         props: {}
      }
   }
   return {
      redirect: {
         destination: '/home',
         permanent: false
      }
   }
}

export default Index
