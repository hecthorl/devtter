import { useEffect, useState } from 'react'

const DATE_UNITS = [
   ['year', 31557600],
   ['month', 2629800],
   ['week', 604800],
   ['day', 86400],
   ['hour', 3600],
   ['minute', 60],
   ['second', 1]
]

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
      }, 1e3)
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
