import { useState } from 'react'
import useTimeAgo from 'hooks/useTimeAgo'
import CommentBtn from './CommentBtn'
import LikeBtn from './LikeBtn'
import { BsThreeDots } from 'react-icons/bs'
import DevitMedia from 'components/DevitMedia'
import { useRouter } from 'next/router'

const Devit = ({ avatar, content, username, createdAt, img, id }) => {
   const [avatarImg, setAvatarImg] = useState(false)

   const date = useTimeAgo(createdAt)
   const { push } = useRouter()

   const handleClickSingleTweet = () => {
      push(`/status/${id}`)
   }

   const toimageAv = avatarImg ? 'opacity-100' : 'opacity-0'
   const toFallbackImgAv = avatarImg ? 'opacity-0' : 'opacity-100'

   return (
      <article
         onClick={handleClickSingleTweet}
         onMouseUp={e => {
            const btn = e.button

            if (btn === 1) {
               window.open(`/status/${id}`, '_blank')
            }
         }}
         className="px-4 flex py-3 border-b border-secondary hover:bg-[#ffffff0d] cursor-pointer transition-colors duration-200"
      >
         <div
            onClick={e => e.stopPropagation()}
            className="relative w-12 h-[fit-content] rounded-full overflow-hidden"
         >
            <img
               onLoad={() => setAvatarImg(true)}
               loading="lazy"
               className={toimageAv}
               src={avatar}
               alt={'current image profile of ' + username}
            />
            <div
               className={
                  'absolute w-full h-full top-0 bg-blue-600 ' + toFallbackImgAv
               }
            ></div>
         </div>
         <div className="pl-3" style={{ width: 'calc(100% - 48px)' }}>
            <div className="flex justify-between">
               <div className="flex gap-x-2">
                  <h2 className="font-bold hover:underline">{username}</h2>
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
                  <p className="text-base pb-2">{content}</p>
                  <DevitMedia img={img} />
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
