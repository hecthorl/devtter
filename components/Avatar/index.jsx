const Avatar = ({ photoURL }) => {
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
