export default async function getGiphysTrends(rating = 'g') {
   const API_KEY = process.env.NEXT_PUBLIC_GIPHY_API_KEY
   const BASE_URL = 'https://api.giphy.com/v1/gifs'
   const api = `${BASE_URL}/trending?api_key=${API_KEY}&limit=20&rating=${rating}`
   const res = await fetch(api)
   const { data } = await res.json()
   return data
}
