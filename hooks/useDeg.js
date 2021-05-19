import { useEffect, useState } from 'react'

const useDeg = deg => {
   const [grados, setGrados] = useState(deg)

   console.log('sss')

   useEffect(() => {
      const reset = setInterval(() => {
         setGrados(grados + 1)
      }, 500)

      return () => clearInterval(reset)
   }, [grados])

   if (grados === 360) setGrados(0)

   return grados
}
// const random = Math.floor(Math.random() * 360);
// console.log(random);

export default useDeg
