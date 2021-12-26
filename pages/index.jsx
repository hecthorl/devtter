import NotLoggedUser from 'components/NotLoggedUser'
import Head from 'next/head'
import { useSession } from 'next-auth/react'

const Index = () => {
   console.log(useSession())
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

export default Index
