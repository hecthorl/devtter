import { getSession } from 'next-auth/react'
import SeoHead from 'components/SeoHead'
import NotLoggedUser from 'components/NotLoggedUser'

const Index = () => (
   <>
      <SeoHead title="Devtter" />
      <NotLoggedUser />
   </>
)

export async function getServerSideProps(context) {
   const session = await getSession(context)

   const authenticated = {
      redirect: {
         destination: '/home',
         permanent: false
      }
   }
   const unAuth = {
      props: {}
   }
   return session ? authenticated : unAuth
}

export default Index
