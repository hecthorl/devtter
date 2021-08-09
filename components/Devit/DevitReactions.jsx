import CommentBtn from './CommentBtn'
import LikeBtn from './LikeBtn'

const DevitReactions = () => {
   return (
      <div className="devit-reactions">
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
   )
}

export default DevitReactions
