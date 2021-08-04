import { SiGithub } from 'react-icons/si'
import { githubPovider } from 'firebase/cliente'
import LogoComponent from './LogoComponent'

const SignInBtn = () => {
   const loginGithub = () => {
      githubPovider().catch(err => console.log(err))
   }
   return (
      <button className="signin-btn" onClick={loginGithub}>
         <SiGithub className="inline mr-2 text-2xl" />
         Ingresa
      </button>
   )
}

const NotLoggedUser = () => {
   return (
      <section className="landing-container">
         <div className="landing-text-container">
            <div className="h-11 w-11">
               <LogoComponent />
            </div>
            <h1 className="main-text">
               <span>Lo que está</span>
               <span> pasando</span>
               <span> ahora</span>
            </h1>
            <p className="sub-text">Únete a Devtter hoy mismo.</p>
            <SignInBtn />
         </div>
         <div
            className="landing-img"
            style={{ backgroundImage: "url('./devtterWall.png')" }}
         >
            <div className="logo-container">
               <LogoComponent />
            </div>
         </div>
      </section>
   )
}

export default NotLoggedUser
