import { useState } from 'react'

const DevitAvatar = ({ avatar }) => {
   const [avatarImg, setAvatarImg] = useState(false)
   const toimageAv = avatarImg ? 'opacity-100' : 'opacity-0'
   const toFallbackImgAv = avatarImg ? 'opacity-0' : 'opacity-100'
   return (
      <div
         onClick={e => e.stopPropagation()}
         className="relative w-12 h-12 rounded-full overflow-hidden"
      >
         <img
            onLoad={() => setAvatarImg(true)}
            loading="lazy"
            className={toimageAv}
            src={avatar}
         />
         <div
            className={
               'absolute w-[inherit] h-[inherit] top-0 bg-blue-600 ' +
               toFallbackImgAv
            }
         ></div>
      </div>
   )
}
export default DevitAvatar
