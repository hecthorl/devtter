import { useState } from 'react'
import useTimeAgo from 'hooks/useTimeAgo'
import CommentBtn from './CommentBtn'
import LikeBtn from './LikeBtn'
import { BsThreeDots } from 'react-icons/bs'
import DevitMedia from 'components/DevitMedia'
import { useRouter } from 'next/router'
import { handleMouseUp } from 'helpers/handleMouseUp'

const Avatar = ({ avatar }) => {
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

const Devit = ({ avatar, content, username, createdAt, img, id }) => {
   const date = useTimeAgo(createdAt)
   const { push } = useRouter()

   const handleClickSingleTweet = () => {
      push(`/status/${id}`)
   }
   //
   return (
      <article
         role="article"
         onClick={handleClickSingleTweet}
         onMouseUp={e => handleMouseUp(e, id)}
         className="px-4 flex py-3 border-b border-secondary hover:bg-[#ffffff0d] cursor-pointer transition-colors duration-200 space-x-4"
      >
         <Avatar avatar={avatar} />
         <div className="flex-1">
            <div className="flex justify-between">
               <div>
                  <span className="font-bold">{username}</span>
                  <span className="hidden sm:inline text-white text-opacity-50 ml-1">
                     @{username.replace(' ', '_')}
                  </span>
                  <span className="text-white text-opacity-50 mx-1">•</span>
                  <time className="text-white text-opacity-50">
                     {date.replace(/hace | /g, '')}
                  </time>
               </div>
               <button
                  role="button"
                  aria-label="Más opciones"
                  className="relative"
                  onClick={e => e.stopPropagation()}
               >
                  <div className="absolute rounded-full w-[33.5px] -m-2 flex items-center justify-center top-1 left-[-19px] right-0 bottom-0 bg-brand group bg-opacity-0 hover:bg-opacity-10 h-[33.5px]">
                     <BsThreeDots
                        aria-hidden
                        className="group-hover:text-brand"
                     />
                  </div>
               </button>
            </div>
            <div className="space-y-2">
               <p>{content}</p>
               <DevitMedia img={img} />
            </div>
            <div className="flex mt-4 mb-2 max-w-[425px] w-full justify-between text-sm text-[#8899a6]">
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
      </article>
   )
}

export default Devit
