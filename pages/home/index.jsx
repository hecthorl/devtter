import Devit from 'components/Devit'
import homeStyles from 'components/homeStyles'
import { listenLatestDevits } from 'firebase/cliente'
import useUser from 'hooks/useUser'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiPenTool } from 'react-icons/fi'

const Home = () => {
   const [timeLine, setTimeLine] = useState([])

   const user = useUser()

   useEffect(() => {
      let unSubscribe = null
      if (user) {
         unSubscribe = listenLatestDevits(setTimeLine)
      }
      return () => unSubscribe && unSubscribe()
   }, [user])

   return (
      <>
         <Head>
            <title>Devtter | 🧁</title>
         </Head>
         <section>
            <header>
               <h1>Inicio</h1>
            </header>
            <main>
               {!!timeLine.length && <div className="border-top-style"></div>}
               {timeLine?.map(item => {
                  const {
                     avatar,
                     img,
                     content,
                     username,
                     id,
                     userId,
                     createdAt
                  } = item
                  return (
                     <Devit
                        key={id}
                        img={img}
                        avatar={avatar}
                        content={content}
                        username={username}
                        userId={userId}
                        createdAt={createdAt}
                        id={id}
                     />
                  )
               })}
            </main>
            <footer>
               <Link href="/compose/tweet">
                  <a className="new-tweet">
                     <FiPenTool style={{ pointerEvents: 'none' }} />
                  </a>
               </Link>
               <ul>asdasds</ul>
            </footer>
         </section>
         <style jsx>{homeStyles}</style>
      </>
   )
}

export default Home
