import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Layouts from 'components/Layouts'
import Letterhead from 'components/Letterhead'
import findUser from 'services/findUser'
import ProfileLayout from 'components/Layouts/ProfileLayout'
import NotProfileUserFound from 'components/NotProfileFound'

const Profile = ({ user }) => {
   /**
    * No usar destructuring para el user, en vez usar condicional:
    *    if (user === currentUserSession)
    *    if (user === otroUsario)
    *    if (noExisteUsuario)
    */
   console.log({ user })
   return (
      <>
         <Head>
            <title>Profile Page</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Layouts>
            <Letterhead />
            {user ? <ProfileLayout user={user} /> : <NotProfileUserFound />}
         </Layouts>
      </>
   )
}

export default Profile

export async function getServerSideProps(context) {
   const session = await getSession(context)
   const nickname = context.query.profile
   const user = await findUser(nickname)

   return {
      props: { session, user }
   }
}
