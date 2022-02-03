import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Layouts from 'components/Layouts'
import LetterheadStatus from 'components/LetterheadStatus'
import SingleDevit from 'components/SingleDevit'

const StatusPage = () => {
   return (
      <>
         <Head>
            <title>Status</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Layouts>
            <LetterheadStatus />
            <SingleDevit />
         </Layouts>
      </>
   )
}

export default StatusPage

export async function getServerSideProps(context) {
   const session = await getSession(context)
   return {
      props: { session }
   }
}
