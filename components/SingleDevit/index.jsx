import dynamic from 'next/dynamic'
import { useState } from 'react'
import CommentBtn from 'components/Devit/CommentBtn'
import LikeBtn from 'components/Devit/LikeBtn'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import DevitMedia from 'components/DevitMedia'

const SingleDevitDates = dynamic(() => import('./Dates'), { ssr: false })

const SingleDevit = props => {
   const { avatar, content, username, createdAt, img } = props
   const [avatarImg, setAvatarImg] = useState(false)

   const toimageAv = avatarImg ? 'opacity-100' : 'opacity-0'
   const toFallbackImgAv = avatarImg ? 'opacity-0' : 'opacity-100'

   return (
      <article className="px-4 gap-x-3 py-3 border-b border-secondary">
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
            <button className="rounded-full bg-blue-500 p-2 bg-opacity-0 hover:bg-opacity-20 self-start text-lg text-white text-opacity-50">
               <HiOutlineDotsHorizontal />
            </button>
         </div>
         <div>
            <p className="pb-2 text-2xl">{content}</p>
            <DevitMedia img={img} />
         </div>
         <div className="text-white text-opacity-50 py-3 space-x-1">
            <SingleDevitDates date={createdAt} />
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
