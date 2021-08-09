import classNames from 'classnames'
import { useState } from 'react'

const FollowersItem = ({ img, content }) => {
   const [state, setState] = useState(false)

   const toImage = classNames({
      'opacity-0': !state,
      'opacity-100': state
   })
   const toFallbackImg = classNames('follower_img-fallback', {
      'opacity-0': state,
      'opacity-100': !state
   })

   return (
      <div className="followers_item-container">
         <div className="follower_avatar">
            <div className="follower_img">
               <img
                  onLoad={() => setState(true)}
                  loading="lazy"
                  src={img}
                  alt={content}
                  className={toImage}
               />
               <div className={toFallbackImg}></div>
            </div>
            <p className="follower_username-container">
               <span className="follower_username">{content}</span>
               <span className="follower_linkusername">@{content}</span>
            </p>
         </div>
         <button
            role="button"
            aria-label="seguir a xd"
            className="follower-btn"
         >
            Seguir
         </button>
      </div>
   )
}

export default FollowersItem
