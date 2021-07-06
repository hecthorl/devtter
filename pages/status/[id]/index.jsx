import Head from 'next/head'
import { useRouter } from 'next/router'
import Devit from 'components/Devit'
import { firestore } from 'firebase/admin'
import { HiArrowLeft } from 'react-icons/hi'

const DevitPage = props => {
   const { isFallback, back } = useRouter()
   const devitTitle = `${props.username} en Devtter: "${props.content}"`

   if (isFallback) return <h1>Cargando...</h1>
   return (
      <>
         <Head>
            <title>{props.username ? devitTitle : 'Devtter'}</title>
         </Head>
         <div className="text-white">
            <header className="sticky top-0 bg-blue-900 px-4 py-3 flex items-center border-b border-blue-400">
               <button onClick={() => back()}>
                  <HiArrowLeft className="pointer-events-none text-2xl text-green-500" />
               </button>
               <h1 className="text-xl w-full ml-5 font-bold">Devvter</h1>
            </header>
            <Devit {...props} onStatus={true} />
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
