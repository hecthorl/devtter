import { useSession, signIn, signOut } from 'next-auth/react'

const useUserAuth = () => {
   const { data: userData } = useSession()

   return { userData, signIn, signOut }
}

export default useUserAuth
