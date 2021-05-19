import useTimeAgo from 'hooks/useTimeAgo'
import { useRouter } from 'next/router'
import { devitStyles } from './styles'

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
         <img src={avatar} alt={avatar} />
         <div className="content">
            <div className="content-heading">
               <h2>{username}</h2>•<time>{date || 'no hay fecha xd'}</time>
            </div>
            <div className="content-body">
               <p>{content}</p>
               {img && <img className="img-body" src={img} alt={img} />}
            </div>
         </div>

         <style jsx>{devitStyles}</style>
      </article>
   )
}

export default Devit
