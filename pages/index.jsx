import Head from 'next/head'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
import NotLoggedUser from 'components/NotLoggedUser'
import { useEffect } from 'react'

const Index = () => {
   const user = useUser()
   const { replace } = useRouter()

   useEffect(() => {
      user && replace('/home')
   }, [user])

   return (
      <>
         <Head>
            <title>Devtter App</title>
            <meta name="description" content="Devtter, un twitter para devs" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <NotLoggedUser />
      </>
   )
}

export default Index
