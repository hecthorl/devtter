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
      : () => console.log('nada xd')
   return (
      <article onClick={isClickable}>
         <img src={avatar} className="rounded-full h-12" alt={avatar} />
         <div className="">
            <div className="">
               <h2>{username}</h2>•<time>{date}</time>
            </div>
            <div className="content-body">
               <p>{content}</p>
               {img && <img className="img-body" src={img} alt={img} />}
            </div>
         </div>
      </article>
   )
}

export default Devit
