import useTimeAgo from 'hooks/useTimeAgo'
import { useRouter } from 'next/router'

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
      <article onClick={isClickable} className="px-4 flex gap-x-3 py-3">
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
               <p>{content}</p>
               {img && (
                  <img
                     loading="lazy"
                     className="rounded-2xl"
                     src={img}
                     alt={img}
                  />
               )}
            </div>
         </div>
      </article>
   )
}

export default Devit
