import { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const SingleDevitHeading = ({ avatar, username }) => {
   const [avatarImg, setAvatarImg] = useState(false)

   const toimageAv = avatarImg ? 'opacity-100' : 'opacity-0'
   const toFallbackImgAv = avatarImg ? 'opacity-0' : 'opacity-100'

   return (
      <div className="flex justify-between pb-2">
         <div className="flex">
            <div className="relative h-12 w-12 rounded-full overflow-hidden">
               <img
                  onLoad={() => setAvatarImg(true)}
                  loading="lazy"
                  className={toimageAv}
                  src={avatar}
                  alt={'current image profile of ' + username}
               />
               <div
                  className={
                     'absolute w-full h-full top-0 bg-blue-600 ' +
                     toFallbackImgAv
                  }
               ></div>
            </div>
            <div className="flex flex-col ml-2 text-[15px] group cursor-pointer">
               <span className="font-bold group-hover:underline">
                  {username}
               </span>
               <span className="text-white text-opacity-50">
                  {'@' + username.replace(' ', '_')}
               </span>
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
