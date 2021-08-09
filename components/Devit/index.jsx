import DevitMedia from 'components/DevitMedia'
import { useRouter } from 'next/router'
import { handleMouseUp } from 'helpers/handleMouseUp'
import DevitAvatar from './DevitAvatar'
import DevitReactions from './DevitReactions'
import DevitHeading from './DevitHeading'

const Devit = ({ avatar, content, username, createdAt, img, id }) => {
   const { push } = useRouter()

   const handleClickSingleTweet = () => {
      push(`/status/${id}`)
   }

   return (
      <article
         role="article"
         onClick={handleClickSingleTweet}
         onMouseUp={e => handleMouseUp(e, id)}
         className="devit-container"
      >
         <DevitAvatar avatar={avatar} />
         <div className="devit-content">
            <DevitHeading username={username} createdAt={createdAt} />
            <div className="space-y-2">
               <p>{content}</p>
               <DevitMedia img={img} />
            </div>
            <DevitReactions />
         </div>
      </article>
   )
}

export default Devit
