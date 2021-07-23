import useAvatarPhoto from 'hooks/useAvatarPhoto'

const Avatar = () => {
   const avatarImage = useAvatarPhoto()
   return (
      <div className="w-[inherit] rounded-full overflow-hidden">
         {avatarImage ? (
            <img src={avatarImage} alt="Current image profile" />
         ) : (
            <div className="bg-blue-600 w-full h-[48px]"></div>
         )}
      </div>
   )
}

export default Avatar
