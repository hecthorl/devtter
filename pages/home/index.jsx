import Link from 'next/link'
import Head from 'next/head'
import Devit from 'components/Devit'
import { useEffect, useState } from 'react'
import { listenLatestDevits } from 'firebase/cliente'
import useUser from 'hooks/useUser'
import { FcIdea } from 'react-icons/fc'
import { FiPenTool, FiHome } from 'react-icons/fi'

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
            <title>Devtter / Inicio</title>
         </Head>
         <section className="bg-blue-900 text-white">
            <header className="sticky top-0 bg-blue-900 px-4 py-3 flex items-center border-b-2 border-blue-400">
               <div className="w-12">
                  <img
                     src={user?.avatar}
                     alt="user avatar"
                     className="rounded-full"
                  />
               </div>
               <h1 className="text-xl w-full ml-5 font-bold">Inicio</h1>
               <FcIdea className="text-3xl" />
            </header>
            <main>
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
            <div className="sticky bottom-0 w-full py-3 bg-blue-900 border-t-2 border-blue-400 flex justify-around items-center text-3xl">
               <div>
                  <Link href="/">
                     <a>
                        <FiHome className="pointer-events-none text-green-500" />
                     </a>
                  </Link>
               </div>
               <div>
                  <span>🥩</span>
               </div>
               <div>
                  <span>🍷</span>
               </div>
               <div>
                  <span>🧶</span>
               </div>
               <div className="icons-section">
                  <Link href="/compose/tweet">
                     <a>
                        <FiPenTool className="pointer-events-none " />
                     </a>
                  </Link>
               </div>
            </div>
         </section>
      </>
   )
}

export default Home
/**
 * <Link href="/compose/tweet">
                  <a className="">
                     <FiPenTool style={{ pointerEvents: 'none' }} />
                  </a>
               </Link>
 */
