// import useAvatarPhoto from 'hooks/useAvatarPhoto'
// import useUser from 'hooks/useUser'

import { useAuthUser } from 'next-firebase-auth'

const Avatar = () => {
   // const avatarImage = useAvatarPhoto()
   // const user = useUser()
   // const item = localStorage.getItem('photoProfile')
   const { photoURL } = useAuthUser()
   // const prom = new Promise((resolve, reject) => {
   //    resolve(user?.avatar)
   // })

   // prom.then(algo => {
   //    console.log(algo)
   // })

   // if (!item) {
   //    localStorage.setItem('photoProfile', user?.avatar || 'Sin data')
   // }

   // const img = item || user?.avatar
   // console.log({ img })

   return (
      <div className="w-[inherit] h-[inherit] rounded-full overflow-hidden text-xs break-words">
         {photoURL ? (
            <img src={photoURL} alt="Current image profile" />
         ) : (
            <div className="bg-blue-600 w-[inherit] h-[inherit]"></div>
         )}
      </div>
   )
}

export default Avatar
