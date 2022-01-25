import Head from 'next/head'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react'
import { firestore } from 'services/firebaseAdmin'
import { HiArrowLeft } from 'react-icons/hi'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import DevitInput from 'components/DevitInput/DevitInputModal'
import SingleDevit from 'components/SingleDevit'
import useStore from 'store'

const DevitPage = props => {
   const { back, isFallback } = useRouter()
   const popUp = useStore(state => state.popUp)

   const devitTitle = `${props.username} en Devtter: "${props.content}"`
   return (
      <>
         <Head>
            <title>{props.username ? devitTitle : 'Devtter'}</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>

         <div className="status-page-container">
            <AppBar />
            <div className="status-page-heading">
               <div>
                  <button
                     role="button"
                     aria-label="Atrás"
                     onClick={() => back()}
                  >
                     <HiArrowLeft aria-hidden />
                  </button>
                  <h5>Devtter</h5>
               </div>
               {isFallback ? <SkeletonDevit /> : <SingleDevit {...props} />}
            </div>
            <Aside />
            {popUp && <DevitInput />}
         </div>
      </>
   )
}

// export const getStaticPaths = async () => {
//    const snapShot = await firestore.collection('devits').get()
//    const paths = snapShot.docs.map(doc => ({ params: { id: doc.id } }))

//    return {
//       paths,
//       fallback: true
//    }
// }

export const getServerSideProps = async context => {
   const { id } = context.params
   const session = await getSession(context)
   const devitReference = firestore.collection('devits').doc(id)
   const devitInfo = await devitReference.get()

   const authenticated = {
      props: { session, ...devitInfo.data(), id: devitInfo.id }
   }
   const unAuth = {
      redirect: {
         destination: '/',
         permanent: false
      }
   }
   if (session) return authenticated
   return unAuth
}

export default DevitPage
