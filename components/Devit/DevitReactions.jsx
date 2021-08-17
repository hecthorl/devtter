// import { devittStats } from 'firebase/cliente'
import useIslike from 'hooks/useIslike'
// import { useAuthUser } from 'next-firebase-auth'
// import { useEffect, useState } from 'react'
import CommentBtn from '../CommentBtn'
import LikeBtn from '../LikeBtn'

const DevitReactions = ({ id, likesCount }) => {
   const like = useIslike(id)
   return (
      <div className="devit-reactions">
         <CommentBtn />
         <button onClick={e => e.stopPropagation()}>
            <span>🧁</span>
            <span>10</span>
         </button>
         <div className="flex">
            <LikeBtn devittId={id} isLiked={like} />
            <span>{likesCount.length !== 0 ? likesCount.length : ''}</span>
         </div>
         <button onClick={e => e.stopPropagation()}>
            <span>🥤</span>
         </button>
      </div>
   )
}

export default DevitReactions
