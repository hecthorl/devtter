import Devit from 'components/Devit'
import { firestore } from 'firebase/admin'
import Head from 'next/head'
import { useRouter } from 'next/router'

const DevitPage = props => {
   const { isFallback } = useRouter()
   if (isFallback) return <h1>Cargando...</h1>
   return (
      <>
         <Head>
            <title>Devit | {props.username}</title>
         </Head>
         <Devit {...props} onStatus={true} />
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
