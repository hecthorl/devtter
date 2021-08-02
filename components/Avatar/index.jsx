import { useAuthUser } from 'next-firebase-auth'

const Avatar = () => {
   const { photoURL } = useAuthUser()

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
