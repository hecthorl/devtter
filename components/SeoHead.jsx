import Head from 'next/head'

const SeoHead = ({ title }) => (
   <Head>
      <title>{title}</title>
      <link rel="icon" href="/faviconLogo.ico" />
   </Head>
)

export default SeoHead
