import { SiGithub } from 'react-icons/si'
import { githubPovider } from 'firebase/cliente'
import LogoComponent from './LogoComponent'

const NotLoggedUser = () => {
   const loginGithub = () => {
      githubPovider().catch(err => console.log(err))
   }
   return (
      <section className="hero-container">
         <div className="hero-container__text">
            <div className="h-11 w-11">
               <LogoComponent />
            </div>
            <h1 className="text-5xl md:text-7xl flex flex-col">
               <span>Lo que está</span>
               <span> pasando</span>
               <span> ahora</span>
            </h1>
            <p className="text-2xl md:text-3xl">Únete a Devtter hoy mismo.</p>
            <button
               className="max-w-[380px] duration-200 ease-in w-full font-bold hover:text-white hover:bg-[#1a91da] transition-colors border border-[#1a91da] rounded-full py-3 text-[#1a91da]"
               onClick={loginGithub}
            >
               <SiGithub className="inline mr-2 text-2xl" />
               Ingresa
            </button>
         </div>
         <div
            className="hero-image"
            style={{ backgroundImage: "url('./devtterWall.png')" }}
         >
            <div className="max-w-[339px] w-full p-8">
               <LogoComponent />
            </div>
         </div>
      </section>
   )
}

export default NotLoggedUser
