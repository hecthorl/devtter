import useTimeAgo from 'hooks/useTimeAgo'
import { useRouter } from 'next/router'
import CommentBtn from './CommentBtn'
import LikeBtn from './LikeBtn'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'

const Devit = ({ avatar, content, username, createdAt, img, id, onStatus }) => {
   const [isLoaded, setIsLoaded] = useState(false)
   const [avatarImg, setAvatarImg] = useState(false)

   const date = useTimeAgo(createdAt)
   const { push } = useRouter()

   const handleClickSingleTweet = event => {
      event.preventDefault()
      push(`/status/${id}`)
   }

   const toimage = isLoaded ? 'opacity-100' : 'opacity-0'
   const toFallbackImg = isLoaded ? 'opacity-0' : 'opacity-100'

   const toimageAv = avatarImg ? 'opacity-100' : 'opacity-0'
   const toFallbackImgAv = avatarImg ? 'opacity-0' : 'opacity-100'

   const isClickable = !onStatus
      ? handleClickSingleTweet
      : () => console.log('nada')
   return (
      <article
         onClick={isClickable}
         className="px-4 flex gap-x-3 py-3 border-b border-secondary hover:bg-[#ffffff0d] cursor-pointer transition-colors duration-200"
      >
         <div
            onClick={e => e.stopPropagation()}
            className="relative max-h-[48px] min-w-[48px] rounded-full overflow-hidden"
         >
            <img
               onLoad={() => {
                  setAvatarImg(true)
               }}
               loading="lazy"
               className={' h-12 ' + toimageAv}
               src={avatar}
               alt={avatar}
            />
            <div
               className={
                  'absolute w-full h-full top-0 bg-blue-600 ' + toFallbackImgAv
               }
            ></div>
         </div>
         <div className="w-full">
            <div className="flex justify-between">
               <div className="flex gap-x-2">
                  <h2 className="font-bold">{username}</h2>
                  <div
                     onClick={e => e.stopPropagation()}
                     className="text-white space-x-1 text-opacity-50"
                  >
                     <span>@{username.replace(' ', '_')}</span>
                     <span>•</span>
                     <time>{date.replace(/hace | /g, '')}</time>
                  </div>
               </div>
               <div onClick={e => e.stopPropagation()}>
                  <button>
                     <BsThreeDots />
                  </button>
               </div>
            </div>
            <div className="space-y-2">
               <div className="pb-3">
                  <p className="pb-2">{content}</p>
                  {img === 'No image' ? null : (
                     <div
                        onClick={e => e.stopPropagation()}
                        className="w-full h-[283px] overflow-hidden rounded-2xl relative"
                     >
                        <img
                           onLoad={() => setIsLoaded(true)}
                           loading="lazy"
                           className={'break-all min-w-full ' + toimage}
                           src={img}
                           alt={img}
                        />
                        <div
                           className={
                              'absolute top-0 w-full h-full bg-blue-600 ' +
                              toFallbackImg
                           }
                        ></div>
                     </div>
                  )}
               </div>
               <div className="flex max-w-[425px] w-full justify-between text-sm text-[#8899a6]">
                  <CommentBtn />
                  <button onClick={e => e.stopPropagation()}>
                     <span>🧁</span>
                     <span>10</span>
                  </button>
                  <LikeBtn />
                  <button onClick={e => e.stopPropagation()}>
                     <span>🥤</span>
                  </button>
               </div>
            </div>
         </div>
      </article>
   )
}

export default Devit
