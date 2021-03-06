import { useEffect, useState } from 'react'
import getDateDiffs from 'helpers/getDateDiffs'

/**
 * Devuelve la cantidad de tiempo restante entre el valor de entrada y el actual, legible para personas
 * @param {number} timestamp Fecha sin parcear
 * @returns {string} Fecha parseada
 */
const useTimeAgo = timestamp => {
   if (!timestamp || isNaN(timestamp)) throw new Error('error en usetimeago')
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
