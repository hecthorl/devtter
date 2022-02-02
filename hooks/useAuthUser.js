import { useSession, signIn, signOut } from 'next-auth/react'

const useUserAuth = () => {
   const { data } = useSession()

   return { userData: data.user, signIn, signOut }
}

export default useUserAuth
