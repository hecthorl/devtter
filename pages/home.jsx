import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import SeoHead from 'components/SeoHead'
import Layouts from 'components/Layouts'
import MyModal from 'components/MyModal'
import getGifSearch from 'services/getGifSearch'
import getGifsTrends from 'services/getGifsTrends'
const BodySwitch = dynamic(() => import('components/Layouts/BodySwitch'), {
   ssr: false
})

const Home = ({ trendingGifs }) => {
   return (
      <>
         <SeoHead title="Inicio / Devtter" />
         <Layouts>
            <BodySwitch />
         </Layouts>
         <MyModal gifs={trendingGifs} />
      </>
   )
}

export async function getServerSideProps(context) {
   const session = await getSession(context)

   const searchingTerms = await getGifsTrends()
   const trendingGifs = await Promise.allSettled(
      searchingTerms.map(async term => await getGifSearch(term))
   )

   const authenticated = {
      props: { session, trendingGifs }
   }
   const unAuth = {
      redirect: {
         destination: '/',
         permanent: false
      }
   }
   return session ? authenticated : unAuth
}
export default Home
