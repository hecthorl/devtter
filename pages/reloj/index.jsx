import loadingRelojStyles from 'components/loadingRelojStyles'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

const intl = () =>
   new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h12'
      // timeZone: 'America/Lima', => Default para mi :v
      // timeZone: 'Europe/Madrid',
   }).format(Date.now())

const Reloj = () => {
   const time = useRef()

   useEffect(() => {
      const clear = setInterval(() => {
         time.current.innerHTML = intl()
      }, 1e3)
      return () => clearInterval(clear)
   }, [])

   return (
      <div>
         <Head>
            <title>Reloj</title>
         </Head>
         <h1>Reloj</h1>
         <div ref={time} className="container">
            <div className="loading"></div>
         </div>
         <style jsx>{loadingRelojStyles}</style>
      </div>
   )
}

export default Reloj
