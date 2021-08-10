import Head from 'next/head'
import { useRouter } from 'next/router'
import { withAuthUser } from 'next-firebase-auth'
import { firestore } from 'firebase/admin'
import { HiArrowLeft } from 'react-icons/hi'
import AppBar from 'components/AppBar'
import Aside from 'components/Aside'
import useGlobalContext from 'hooks/useGlobalContext'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import DevitInput from 'components/DevitInput/DevitInputModal'
import SingleDevit from 'components/SingleDevit'

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

         <div ref={ref} className="status-page-container">
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

export const getStaticPaths = async () => {
   const snapShot = await firestore.collection('devits').get()
   const paths = snapShot.docs.map(doc => ({ params: { id: doc.id } }))

   return {
      paths,
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
         return { props: { ...data, id } }
      })
      .catch(err => {
         console.log(err)
         return { props: {} }
      })
}

export default withAuthUser()(DevitPage)
