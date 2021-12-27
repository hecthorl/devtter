import { useSession, signOut } from 'next-auth/react'

const useAuthUser = () => {
   const { data: userData } = useSession()
   return { userData, signOut }
}

export default useAuthUser
