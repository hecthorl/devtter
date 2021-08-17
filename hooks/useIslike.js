import { devittStats } from 'firebase/cliente'
// import { useAuthUser } from 'next-firebase-auth'
import { useEffect, useState } from 'react'

const useIslike = id => {
   // const { id: userId } = useAuthUser()
   const [like, setLike] = useState('default')
   useEffect(() => {
      setLike('algo1')
      devittStats(id)
         .then(doc => {
            const data = doc.data()
            console.log(data.likesCount.length)
            // setLike(data.likesCount.find(item => item.userId === userId))
            // console.log(data.likesCount.find(item => item.userId === userId))
         })
         .catch(() => {
            console.log('Error')
         })
   }, [])

   return like
}

export default useIslike
