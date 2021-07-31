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

         <div ref={ref} className="text-white w-full flex justify-center">
            <AppBar />
            <div className="w-full max-w-[598px] min-w-min sm:border-r sm:border-secondary">
               <div className="sticky top-0 bg-primary px-4 py-1 flex items-center border-b border-secondary z-20">
                  <button
                     className="p-3 transition-colors rounded-full bg-green-500 bg-opacity-0 hover:bg-opacity-10"
                     onClick={() => back()}
                  >
                     <HiArrowLeft className="pointer-events-none text-xl text-green-500" />
                  </button>
                  <h1 className="text-xl w-full ml-5 font-bold">Devtter</h1>
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
