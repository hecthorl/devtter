import useAuthUser from 'hooks/useAuthUser'

const Avatar = () => {
   const { userData } = useAuthUser()
   return (
      <div className="avatar-container">
         {userData?.user?.image ? (
            <img src={userData?.user?.image} alt="Current image profile" />
         ) : (
            <div className="avatar-loader"></div>
         )}
      </div>
   )
}

export default Avatar
