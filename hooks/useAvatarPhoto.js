import { useEffect, useState } from 'react'
import useUser from './useUser'

const useAvatarPhoto = () => {
   const [state, setState] = useState(() => {
      if (typeof window !== 'undefined') {
         return localStorage.getItem('photoUser')
      }
   })

   const user = useUser()
   const url = user?.avatar && user.avatar

   useEffect(() => {
      if (!state) {
         localStorage.setItem('photoUser', url)
         setState(url)
      }
   }, [url])

   return state
}

export default useAvatarPhoto
