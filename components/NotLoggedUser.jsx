// import Image from 'next/image'
import { SiGithub } from 'react-icons/si'
import { githubPovider } from 'firebase/cliente'
const NotLoggedUser = () => {
   const data = typeof window !== 'undefined' ? navigator.platform : 'nada'
   const loginGithub = () => {
      githubPovider().catch(err => console.log(err))
   }
   return (
      <section className="hero-container">
         <div className="hero-container__text">
            <div>
               <img
                  src="/logodevvter.svg"
                  alt="Icon devtter"
                  className="w-12 h-12"
               />
            </div>
            <h1 className="text-5xl md:text-7xl">
               <span className="block">Lo que está</span>
               <span className="block"> pasando</span>
               <span className="block"> {data}</span>
            </h1>
            <p className="text-2xl md:text-3xl">Únete a Devtter hoy mismo.</p>
            <button onClick={loginGithub}>
               <SiGithub className="inline mr-1 text-2xl" />
               Regístrate
            </button>
         </div>
         <div className="hero-image">
            <img
               className="p-14 md:w-[339px] w-[150px]"
               src="/logodevvter.svg"
               alt="Icon devtter_3"
            />
         </div>
      </section>
   )
}

export default NotLoggedUser
