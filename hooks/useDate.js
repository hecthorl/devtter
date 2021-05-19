import { useEffect, useState } from 'react'

const useDate = () => {
   const [hora, setHora] = useState('')
   const date = Date.now()
   useEffect(() => {
      const reset = setInterval(() => {
         const intl = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h12'
            // timeZone: 'America/Lima', => Default para mi :v
            // timeZone: 'Europe/Madrid',
         }).format(date)

         setHora(intl)
      }, 1e3)

      return () => clearInterval(reset)
   }, [date])
   return hora
}

export default useDate
