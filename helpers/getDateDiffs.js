import { DATE_UNITS } from './constants'

/**
 * Función que devuelve el tiempo que ha pasado y la unidad de tiempo
 * @param {number} timestamp Fecha sin parcear
 * @returns {object} objeto
 */
const getDateDiffs = timestamp => {
   const now = Date.now()
   const elapsed = (timestamp - now) / 1000

   for (const [unit, secondsUnit] of DATE_UNITS) {
      if (Math.abs(elapsed) > secondsUnit || unit === 'second') {
         return { value: Math.floor(elapsed / secondsUnit), unit }
      }
   }
}

export default getDateDiffs
