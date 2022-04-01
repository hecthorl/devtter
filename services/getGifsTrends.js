import { GIF } from 'helpers/constants'

export default async function getGifsTrends() {
   try {
      const giphyRes = await fetch(
         `${GIF.BASE_URI}/trending/searches?api_key=${GIF.API_KEY}`
      )
      const { data: searchingTerms } = await giphyRes.json()
      return searchingTerms
   } catch (error) {
      throw new Error(error)
   }
}
