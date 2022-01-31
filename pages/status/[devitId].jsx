import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Layout from 'components/Layout'
import LetterheadStatus from 'components/LetterheadStatus'
import SingleDevit from 'components/SingleDevit'

const StatusPage = () => {
   return (
      <>
         <Head>
            <title>Status</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Layout>
            <LetterheadStatus />
            <SingleDevit />
         </Layout>
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
