import useUser from 'hooks/useUser'

const Avatar = () => {
   const user = useUser()

   return (
      <>
         {user && user.avatar ? (
            <img src={user.avatar} alt="user avatar" loading="lazy" />
         ) : (
            <span className="bg-secondary h-12 w-12"></span>
         )}
      </>
   )
}

export default Avatar
