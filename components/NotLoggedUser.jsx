import { signIn } from 'next-auth/react'

const NotLoggedUser = () => {
   return (
      <div>
         <h1>No hay usuario</h1>
         <button onClick={() => signIn()}>Ingresa</button>
      </div>
   )
}

export default NotLoggedUser
