import { useEffect, useState } from 'react'
import useUser from './useUser'

const useAvatarPhoto = () => {
   const [image, setImage] = useState('')
   const imgStoraged = localStorage.getItem('photoUser')
   const user = useUser()
   const url = user?.avatar && user.avatar

   console.log({ url })
   console.log({ imgStoraged })

   useEffect(() => {
      localStorage.setItem('photoUser', url)
   })

   useEffect(() => {
      if (imgStoraged) {
         setImage(imgStoraged)
         setImage(url)
      } else {
         localStorage.setItem('photoUser', url)
      }
   }, [])

   // eslint-disable-next-line
   return image ? image : null
}

export default useAvatarPhoto
/**
 * 
 * const [image, setImage] = useState(() => localStorage.getItem('photoUser'))
   const user = useUser()
   const url = user?.avatar && user.avatar
   console.log(url)
   useEffect(() => {
      if (!image) {
         localStorage.setItem('photoUser', url)
         // const currentUrl = localStorage.getItem('photoUser')
         // setImage(currentUrl)
         setImage(url)
      }
   }, [url])

   if(!image) return false
   return image
 */
