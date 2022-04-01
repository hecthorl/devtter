import { GIF } from 'helpers/constants'

/**
 *
 * @param {string} term
 * @param {number} limit
 * @returns {Promise}
 */
export default async function getGifSearch(term, limit = 1) {
   try {
      const res = await fetch(
         `${GIF.BASE_URI}/gifs/search?api_key=${GIF.API_KEY}&q=${term}&limit=${limit}`
      )
      const { data } = await res.json()
      const { title, images, id } = data[0]
      return {
         display_name: term,
         img: images.original.url,
         id: (title + term + id).toString()
      }
   } catch (error) {
      throw new Error(error)
   }
}
