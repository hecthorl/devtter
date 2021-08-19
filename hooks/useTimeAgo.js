import { DATE_UNITS } from 'helpers/constants'
import throwError from 'helpers/throwError'
import { useEffect, useState } from 'react'

/**
 * Función que devuelve el tiempo que ha pasado y la unidad de tiempo
 * @param {number} timestamp Fecha sin parcear
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

/**
 * Devuelve la cantidad de tiempo restante entre el valor de entrada y el actual, legible para personas
 * @param {number} timestamp Fecha sin parcear
 * @returns {string} Fecha parseada
 */
const useTimeAgo = timestamp => {
   if (!timestamp || isNaN(timestamp)) return throwError('error en usetimeago')
   const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp))

   useEffect(() => {
      const val = setInterval(() => {
         const newTimeAgo = getDateDiffs(timestamp)
         setTimeAgo(newTimeAgo)
      }, 5e3)
      return () => clearInterval(val)
   }, [timestamp])

   const rtf = new Intl.RelativeTimeFormat({
      style: 'narrow',
      localeMatcher: 'best fit'
   })

   const { unit, value } = timeAgo

   return rtf.format(value, unit)
}

export default useTimeAgo
