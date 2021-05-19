import Layout from 'components/layout'

const MyApp = ({ Component, pageProps }) => {
   return (
      <Layout>
         <Component {...pageProps} />
      </Layout>
   )
}

export default MyApp
