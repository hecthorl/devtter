import Head from 'next/head'
import { useRouter } from 'next/router'
import Devit from 'components/Devit'
import { firestore } from 'firebase/admin'
import { HiArrowLeft } from 'react-icons/hi'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import useGlobalContext from 'hooks/useGlobalContext'
import SkeletonDevit from 'components/SkeletonDevit'
import DevitInput from 'components/DevitInput'

const DevitPage = props => {
   const { back, isFallback } = useRouter()
   const { ref, popUp } = useGlobalContext()
   const devitTitle = `${props.username} en Devtter: "${props.content}"`

   return (
      <>
         <Head>
            <title>{props.username ? devitTitle : 'Devtter'}</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>

         <div ref={ref} className="text-white w-full flex justify-center">
            <AppBar />
            <div className="w-full max-w-598 min-w-min sm:border-r sm:border-secondary">
               <div className="sticky top-0 bg-primary px-4 py-3 flex items-center border-b border-secondary">
                  <button onClick={() => back()}>
                     <HiArrowLeft className="pointer-events-none text-2xl text-green-500" />
                  </button>
                  <h1 className="text-xl w-full ml-5 font-bold">Devvter</h1>
               </div>
               {isFallback ? (
                  <SkeletonDevit />
               ) : (
                  <Devit {...props} onStatus={true} />
               )}
            </div>
            <Aside />
            {popUp && <DevitInput />}
         </div>
      </>
   )
}

export const getStaticPaths = async () => {
   return {
      paths: [{ params: { id: 'g8ldtalv1ENybubFTgKt' } }],
      fallback: true
   }
}

export const getStaticProps = context => {
   const { id } = context.params
   return firestore
      .collection('devits')
      .doc(id)
      .get()
      .then(doc => {
         const data = doc.data()
         const id = doc.id

         const props = {
            ...data,
            id
         }
         return { props }
      })
      .catch(() => {
         return { props: {} }
      })
}

export default DevitPage
