import DevitInput from 'components/DevitInput/DevitInputModal'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { HiArrowLeft } from 'react-icons/hi'

const Tweet = () => {
   const { back, push } = useRouter()

   useEffect(() => {
      push('/home')
   }, [])
   return (
      <>
         <Head>
            <title>Publicar nuevo Devit</title>
         </Head>
         <div>
            <header className="flex justify-between px-3 py-2 border-b border-blue-300">
               <button onClick={() => back()}>
                  <HiArrowLeft className="pointer-events-none text-2xl text-green-500" />
               </button>
               <button
                  type="submit"
                  className="rounded-full px-4 font-bold text-white py-1 bg-green-500 disabled:opacity-50"
               >
                  Devittear
               </button>
            </header>
            <div className="flex px-3 py-2">
               <div className="w-16 mr-2"></div>
               <div>
                  <DevitInput />
               </div>
            </div>
         </div>
      </>
   )
}

export default Tweet
