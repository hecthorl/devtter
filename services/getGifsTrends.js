import { GIF } from 'helpers/constants'
import uuid from 'helpers/uuid'

export default async function getGifsTrends(limit = 10) {
   try {
      const giphyRes = await fetch(
         `${GIF.BASE_URI}/gifs/trending?api_key=${GIF.API_KEY}&limit=${limit}`
      )
      const { data } = await giphyRes.json()
      const gifsFormated = data.map(({ title, id, images }) => {
         const displayName = title.slice(0, title.indexOf('GIF')).trim()
         const { '480w_still': img } = images
         return {
            displayName,
            img: img.url,
            id: uuid() + id
         }
      })

      return gifsFormated
   } catch (error) {
      throw new Error(error)
   }
}
