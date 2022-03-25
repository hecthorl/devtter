/**
 * @param {Array} array Array para mutar
 * @returns {Array} Array mutado
 */
const shuffle = array => {
   let currentIndex = array.length

   while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [
         array[randomIndex],
         array[currentIndex]
      ]
   }

   return array
}

export default shuffle
