import { useState } from 'react'
import classNames from 'classnames'

const DevitAvatar = ({ avatar }) => {
   const [avatarImg, setAvatarImg] = useState(false)
   const toFallbackImgAv = classNames('devit-avatar-fallback', {
      'opacity-100': !avatarImg,
      'opacity-0': avatarImg
   })
   const toimageAv = classNames({
      'opacity-0': !avatarImg,
      'opacity-100': avatarImg
   })

   return (
      <div
         onClick={e => e.stopPropagation()}
         className="devit-avatar-container"
      >
         <img
            onLoad={() => setAvatarImg(true)}
            loading="lazy"
            className={toimageAv}
            src={avatar}
         />
         <div className={toFallbackImgAv}></div>
      </div>
   )
}
export default DevitAvatar
