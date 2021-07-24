import CommentBtn from 'components/Devit/CommentBtn'
import LikeBtn from 'components/Devit/LikeBtn'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useState } from 'react'

const SingleDevit = props => {
   const { avatar, content, username, createdAt, img } = props
   const [avatarImg, setAvatarImg] = useState(false)
   const [isLoaded, setIsLoaded] = useState(false)
   console.log(createdAt)

   const toimageAv = avatarImg ? 'opacity-100' : 'opacity-0'
   const toFallbackImgAv = avatarImg ? 'opacity-0' : 'opacity-100'

   const toimage = isLoaded ? 'opacity-100' : 'opacity-0'
   const toFallbackImg = isLoaded ? 'opacity-0' : 'opacity-100'

   return (
      <article className="px-4 gap-x-3 py-3 border-b border-secondary">
         <div className="flex justify-between pb-2">
            <div className="flex">
               <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <img
                     onLoad={() => {
                        setAvatarImg(true)
                     }}
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
            <button className="rounded-full bg-blue-500 p-2 bg-opacity-0 hover:bg-opacity-20 self-start text-lg text-white text-opacity-50">
               <HiOutlineDotsHorizontal />
            </button>
         </div>
         <div>
            <p className="pb-2 text-2xl">{content}</p>
            {img === 'No image' ? null : (
               <div className="w-full overflow-hidden rounded-2xl relative">
                  <img
                     onLoad={() => setIsLoaded(true)}
                     loading="lazy"
                     className={'break-all w-full ' + toimage}
                     src={img}
                     alt={img}
                  />
                  <div
                     className={
                        'absolute top-0 right-0 left-0 w-full h-full bg-blue-600 ' +
                        toFallbackImg
                     }
                  ></div>
               </div>
            )}
         </div>
         <div className="text-white text-opacity-50 py-3 space-x-1">
            <span className="space-x-1 hover:underline">
               <span>
                  {new Intl.DateTimeFormat('es-PE', {
                     hour: 'numeric',
                     minute: '2-digit',
                     hour12: true
                  }).format(createdAt)}
               </span>
               <span>·</span>
               <span>
                  {new Intl.DateTimeFormat('es-PE', {
                     month: 'short',
                     day: 'numeric',
                     year: 'numeric'
                  }).format(createdAt)}
               </span>
            </span>
            <span>·</span>
            <span>Twited for andriod</span>
         </div>
         <div className="flex w-full justify-around text-sm text-[#8899a6]">
            <CommentBtn />
            <button>
               <span>🧁</span>
               <span>10</span>
            </button>
            <LikeBtn />
            <button>
               <span>🥤</span>
            </button>
         </div>
      </article>
   )
}

export default SingleDevit
