import Image from 'next/image'
import Button from 'components/Button'
import { SiGithub } from 'react-icons/si'
import { githubPovider } from 'firebase/cliente'
import icon from 'public/48.png'
const NotLoggedUser = () => {
   const loginGithub = () => {
      githubPovider().catch(err => console.log(err))
   }
   return (
      <section className="hero-container">
         <div className="hero-container__text">
            <div>
               <Image src={icon} alt="Icon devtter" />
            </div>
            <h1 className="text-5xl md:text-7xl">
               <span className="block">Lo que está</span>
               <span className="block"> pasando</span>
               <span className="block"> ahora</span>
            </h1>
            <p className="text-2xl md:text-3xl">Únete a Devtter hoy mismo.</p>
            <Button onClick={loginGithub}>
               <SiGithub className="inline mr-1 text-2xl" />
               Regístrate
            </Button>
         </div>
         <div className="hero-image">
            <img
               className="p-14 md:w-[256px] w-[150px]"
               src="/256.png"
               alt="Icon devtter_3"
            />
         </div>
      </section>
   )
}

export default NotLoggedUser
