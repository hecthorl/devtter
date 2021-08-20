import DevitMedia from 'components/DevitMedia'
import { useRouter } from 'next/router'
import { handleMouseUp } from 'helpers/handleMouseUp'
import DevitAvatar from './DevitAvatar'
import DevitReactions from '../DevitReactions'
import DevitHeading from './DevitHeading'

const Devit = props => {
   const { avatar, content, username, createdAt, img, id, likesCount } = props
   const { push } = useRouter()

   const handleClickSingleDevitt = () => {
      push(`/status/${id}`)
   }

   return (
      <article
         role="article"
         onClick={handleClickSingleDevitt}
         onMouseUp={e => handleMouseUp(e, id)}
         className="devit-container"
      >
         <DevitAvatar avatar={avatar} />
         <div className="devit-content">
            <DevitHeading username={username} createdAt={createdAt} />
            <div className="space-y-2">
               <p>{content}</p>
               <DevitMedia img={img} id={id} likesCount={likesCount} />
            </div>
            <DevitReactions id={id} likesCount={likesCount} />
         </div>
      </article>
   )
}

export default Devit
