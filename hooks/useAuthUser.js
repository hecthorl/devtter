import { useSession, signIn, signOut } from 'next-auth/react'

/**
 * @returns { import("types/hooksTypes").useAuthUser }
 */
const useUserAuth = () => {
   const { data } = useSession()

   return { userData: data?.user || null, signIn, signOut }
}

export default useUserAuth
