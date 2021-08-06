import { useAuthUser } from 'next-firebase-auth'

const Avatar = () => {
   const { photoURL } = useAuthUser()

   return (
      <div className="avatar-container">
         {photoURL ? (
            <img src={photoURL} alt="Current image profile" />
         ) : (
            <div className="avatar-loader"></div>
         )}
      </div>
   )
}

export default Avatar
