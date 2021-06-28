import Head from 'next/head'
import Image from 'next/image'
import Button from 'components/Button'
// import { useEffect } from 'react'
import { SiGithub } from 'react-icons/si'
import { githubPovider } from 'firebase/cliente'
// import { useRouter } from 'next/router'
import useUser, { USER_STATE } from 'hooks/useUser'
import icon from 'public/48.png'

const Home = () => {
   const user = useUser()
   // const { replace } = useRouter()

   // useEffect(() => {
   //    user && replace('/home')
   // }, [user])

   const loginGithub = () => {
      githubPovider().catch(err => console.log(err))
   }

   return (
      <>
         <Head>
            <title>🥩Create Next App ™</title>
            <meta name="description" content="Devtter, un twitter para devs" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <section className="grid grid-rows-2 text-white bg-black font-bold">
            <div className="space-y-8 p-6 mb-5">
               <Image src={icon} alt="Icon devtter" />
               <h1 className="text-5xl">
                  <span className="block">Lo que está</span>
                  <span className="block"> pasando</span>
                  <span className="block"> ahora</span>
               </h1>
               <p className="text-2xl">Únete a Devtter hoy mismo.</p>
               <div className="mx-auto w-full">
                  <Button onClick={loginGithub}>
                     <SiGithub className="inline mr-1 text-2xl" />
                     Regístrate
                  </Button>
               </div>
            </div>
            <div className="bg-wall bg-contain max-w-[360px]">
               {/* <img
                  src="/devtter.png"
                  alt="Icon devtter_2"
                  className="mx-auto relative"
               /> */}

               <img className="" src="/256.png" alt="Icon devtter_3" />
            </div>
         </section>
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
