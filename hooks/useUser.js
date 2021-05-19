import { authStateChanged } from 'firebase/cliente'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const USER_STATE = {
   NOT_LOGGED: null,
   NOT_KNOW: undefined
}

const useUser = () => {
   const [user, setUser] = useState(USER_STATE.NOT_KNOW)
   const router = useRouter()

   useEffect(() => {
      authStateChanged(setUser)
   }, [])

   useEffect(() => {
      user === USER_STATE.NOT_LOGGED && router.push('/')
   }, [user])

   return user
}

export default useUser
