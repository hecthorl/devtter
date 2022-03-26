import { useSession, signIn, signOut } from 'next-auth/react'

/**
 * @returns { import("types/hooksTypes").useAuthUser | null }
 */
const useUserAuth = () => {
   const { data, status } = useSession()
   const sessionObj = { userData: data.user, signIn, signOut }

   return status === 'authenticated' ? sessionObj : null
}

export default useUserAuth
