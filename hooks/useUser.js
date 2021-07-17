import { authStateChanged } from 'firebase/cliente'
import { USER_STATE } from 'helpers/constants'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const { NOT_KNOW, NOT_LOGGED } = USER_STATE

const useUser = () => {
   const [user, setUser] = useState(NOT_KNOW)
   const { push } = useRouter()

   useEffect(() => {
      authStateChanged(setUser)
   }, [])

   useEffect(() => {
      if (user === NOT_LOGGED) push('/')
   }, [user])

   return user
}

export default useUser
