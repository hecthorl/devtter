import { DATE_UNITS } from 'helpers/constants'
import { useEffect, useState } from 'react'

const getDateDiffs = timestamp => {
   const now = Date.now()
   const elapsed = (timestamp - now) / 1000

   for (const [unit, secondsUnit] of DATE_UNITS) {
      if (Math.abs(elapsed) > secondsUnit || unit === 'second') {
         // console.log(unit, 'unit')
         return { value: Math.floor(elapsed / secondsUnit), unit }
      }
   }
}

const useTimeAgo = timestamp => {
   if (!timestamp || isNaN(timestamp)) return console.log(timestamp, 'error')
   const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp))

   useEffect(() => {
      const val = setInterval(() => {
         const newTimeAgo = getDateDiffs(timestamp)
         setTimeAgo(newTimeAgo)
      }, 5e3)
      return () => clearInterval(val)
   }, [timestamp])

   const rtf = new Intl.RelativeTimeFormat({
      style: 'long',
      localeMatcher: 'best fit'
   })

   const { unit, value } = timeAgo

   return rtf.format(value, unit)
}

export default useTimeAgo
