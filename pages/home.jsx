import Head from 'next/head'
import { getSession, signOut } from 'next-auth/react'
import useTimeline from 'hooks/useTimeline'

const Home = () => {
   const timeline = useTimeline()
   return (
      <>
         <Head>
            <title>Inicio / Devtter</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <div className="home-container">
            <button onClick={() => signOut()}>SALIR</button>
            <pre>
               <code>{JSON.stringify(timeline, null, 3)}</code>
            </pre>
         </div>
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
