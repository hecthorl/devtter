import avatarStyles from './styles'

const Avatar = ({ alt, src, text, withText }) => {
   return (
      <div className="img-container">
         <img src={src} alt={alt} />
         {withText && <strong>{text || alt}</strong>}
         <style jsx>{avatarStyles}</style>
      </div>
   )
}

export default Avatar
