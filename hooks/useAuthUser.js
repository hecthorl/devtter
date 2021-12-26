import { useSession } from 'next-auth/react'

const useAuthUser = () => {
   const { data: userData } = useSession()
   return userData
}

export default useAuthUser
