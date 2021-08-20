import CommentBtn from './CommentBtn'
import LikeBtn from './LikeBtn'

const DevitReactions = ({ id, likesCount }) => {
   return (
      <div className="devit-reactions">
         <CommentBtn />
         <button onClick={e => e.stopPropagation()}>
            <span>🧁</span>
            <span>10</span>
         </button>
         <div onClick={e => e.stopPropagation()} className="flex">
            <LikeBtn devittId={id} />
            <span>{likesCount.length !== 0 ? likesCount.length : ''}</span>
         </div>
         <button onClick={e => e.stopPropagation()}>
            <span>🥤</span>
         </button>
      </div>
   )
}

export default DevitReactions
