import Head from 'next/head'
import useDate from '../../hooks/useDate'
import loadingRelojStyles from './styles'

const Reloj = () => {
   const hora = useDate()

   return (
      <div>
         <Head>
            <title>{hora || 'Cargando....'}</title>
         </Head>
         <h1>Reloj</h1>
         <div className="container">
            {!hora ? <div className="loading"></div> : <span>{hora}</span>}
         </div>
         <style jsx>{loadingRelojStyles}</style>
      </div>
   )
}

export default Reloj
