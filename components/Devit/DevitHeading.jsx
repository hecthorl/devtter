import useTimeAgo from 'hooks/useTimeAgo'
import { BsThreeDots } from 'react-icons/bs'

const DevitHeading = ({ username, createdAt }) => {
   const date = useTimeAgo(createdAt)
   return (
      <div className="devit-heading">
         <div className="devit-heading-usernames">
            <span className="devit-heading-username">{username}</span>
            <span className="devit-heading-link">
               @{username?.replace(' ', '_')}
            </span>
            <span className="mx-1">•</span>
            <time>{date.replace(/hace | /g, '')}</time>
         </div>
         <button
            role="button"
            aria-label="Más opciones"
            className="devit-btn"
            onClick={e => e.stopPropagation()}
         >
            <div className="devit-btn_container group">
               <BsThreeDots aria-hidden className="devit-btn_svg" />
            </div>
         </button>
      </div>
   )
}

export default DevitHeading
