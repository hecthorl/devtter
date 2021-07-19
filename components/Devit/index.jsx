import useTimeAgo from 'hooks/useTimeAgo'
import { useRouter } from 'next/router'
import CommentBtn from './CommentBtn'
import LikeBtn from './LikeBtn'

const Devit = ({ avatar, content, username, createdAt, img, id, onStatus }) => {
   const date = useTimeAgo(createdAt)
   const { push } = useRouter()

   const handleClickSingleTweet = event => {
      event.preventDefault()
      push(`/status/${id}`)
   }

   const isClickable = !onStatus
      ? handleClickSingleTweet
      : () => console.log('nada')
   return (
      <article
         onClick={isClickable}
         className="px-4 flex gap-x-3 py-3 border-b border-secondary"
      >
         <img
            src={avatar}
            loading="lazy"
            className="rounded-full h-12"
            alt={avatar}
         />
         <div className="w-full">
            <div className="flex justify-between">
               <h2 className="font-bold">{username}</h2>
               <span className="text-white text-opacity-50">•</span>
               <time className="text-white text-opacity-50">{date}</time>
            </div>
            <div className="space-y-2">
               <div className="pb-2">
                  <p>{content}</p>
                  {img === 'No image' ? null : (
                     <img
                        loading="lazy"
                        className="rounded-2xl break-all"
                        src={img}
                        alt={img}
                     />
                  )}
               </div>
               <div className="flex max-w-[425px] w-full justify-between text-sm text-[#8899a6]">
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
            </div>
         </div>
      </article>
   )
}

export default Devit
