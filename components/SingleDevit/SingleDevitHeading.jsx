import classNames from 'classnames'
import { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const SingleDevitHeading = ({ avatar, username }) => {
   const [avatarImg, setAvatarImg] = useState(false)

   const toimageAv = classNames({
      'opacity-100': avatarImg,
      'opacity-0': !avatarImg
   })
   const toFallbackImgAv = classNames('single_devit-loader', {
      'opacity-100': !avatarImg,
      'opacity-0': avatarImg
   })

   return (
      <div className="single_devit-heading">
         <div className="flex">
            <div className="single_devit-avatar">
               <img
                  onLoad={() => setAvatarImg(true)}
                  loading="lazy"
                  className={toimageAv}
                  src={avatar}
                  alt={'current image profile of ' + username}
               />
               <div className={toFallbackImgAv}></div>
            </div>
            <div className="single_devit-username">
               <span>{username}</span>
               <span>{'@' + username.replace(' ', '_')}</span>
            </div>
         </div>
         <button
            role="button"
            aria-label="Más opciones"
            className="single_devit-btn"
         >
            <HiOutlineDotsHorizontal aria-hidden />
         </button>
      </div>
   )
}

export default SingleDevitHeading
