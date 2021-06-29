import Head from 'next/head'
import { useRouter } from 'next/router'
import useUser from 'hooks/useUser'
import NotLoggedUser from 'components/NotLoggedUser'
import { useEffect } from 'react'

const Home = () => {
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

export default Home
/**
 * <section>
            <h1>Devtter</h1>
            <article>
               <h1>tweet xd</h1>
            </article>
            {user === USER_STATE.NOT_LOGGED && (
               <Button onClick={loginGithub}>
                  <SiGithub />
                  Sign Up with Github
               </Button>
            )}
            {user === USER_STATE.NOT_KNOW && <span>Loading...</span>}
         </section>
 */
