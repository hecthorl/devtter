import Head from 'next/head'
import NotLoggedUser from 'components/NotLoggedUser'
import {
   AuthAction,
   withAuthUser,
   withAuthUserTokenSSR
} from 'next-firebase-auth'

const Index = () => {
   return (
      <>
         <Head>
            <title>Devtter App</title>
            <meta name="description" content="Devtter, un twitter para devs" />
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <NotLoggedUser />
      </>
   )
}

export const getServerSideProps = withAuthUserTokenSSR()()
export default withAuthUser({
   whenAuthed: AuthAction.REDIRECT_TO_APP
})(Index)
