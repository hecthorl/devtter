import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import SeoHead from 'components/SeoHead'
import Layouts from 'components/Layouts'
import MyModal from 'components/MyModal'
const BodySwitch = dynamic(() => import('components/Layouts/BodySwitch'), {
   ssr: false
})

const Home = () => (
   <>
      <SeoHead title="Inicio / Devtter" />
      <Layouts>
         <BodySwitch />
      </Layouts>
      <MyModal />
   </>
)

export async function getServerSideProps(context) {
   const session = await getSession(context)

   const authenticated = { props: { session } }
   const unAuth = {
      redirect: {
         destination: '/',
         permanent: false
      }
   }
   return session ? authenticated : unAuth
}
export default Home
