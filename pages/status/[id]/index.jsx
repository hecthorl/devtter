import Devit from 'components/Devit'
import Head from 'next/head'
import { useRouter } from 'next/router'

const DevitPage = props => {
   // console.log(props, 'page[id]')
   const { isFallback } = useRouter()
   if (isFallback) return <h1>Cargando...</h1>
   return (
      <>
         <Head>
            <title>Devit | {props.username}</title>
         </Head>
         <Devit {...props} onStatus={true} />
      </>
   )
}

export const getStaticPaths = async () => {
   return {
      paths: [{ params: { id: 'asdasd' } }],
      fallback: !false
   }
}

export const getStaticProps = context => {
   const { id } = context.params

   return fetch(`http://localhost:3000/api/devits/${id}`)
      .then(res => res.json())
      .then(devit => ({ props: { ...devit } }))
}

export default DevitPage
