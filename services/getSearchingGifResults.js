import { GIF } from 'helpers/constants'

/**
 * @param {string} words
 * @param {number} limit
 * @param {number} offset
 * @returns {Promise}
 */
export default async function getSearchingGifResults(words, limit, offset = 0) {
   try {
      const response = await fetch(
         `${GIF.BASE_URI}/gifs/search?api_key=${GIF.API_KEY}&q=${words}&offset=${offset}&limit=${limit}`
      )
      const res = await response.json()
      const gifsFormated = res.data.map(({ title, id, images }) => {
         const displayName = title.slice(0, title.indexOf('GIF')).trim()

         return {
            displayName,
            imgData: {
               width: images.fixed_height.width,
               height: images.fixed_height.height
            },
            freezeImg: images.fixed_height_still.url,
            img: images.fixed_height.url,
            gifId: id
         }
      })

      return gifsFormated
   } catch (error) {
      throw new Error(error, 'Location: getSearchingGifResults')
   }
}
