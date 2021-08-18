/* eslint-disable no-useless-return */
import { likeDevitt, unLikeDevitt } from 'firebase/cliente'
import { LIKES_STATES } from 'helpers/constants'
import likeBlame from 'helpers/likeBlame'
import throwError from 'helpers/throwError'
import { useAuthUser } from 'next-firebase-auth'
import { useEffect, useState } from 'react'
import HeartIcon from './DevtterIcons/HeartIcon'

const { DEF4ULT, UNLIKING, UNLIKED, LIKED, LIKING } = LIKES_STATES

const LikeBtn = ({ devittId }) => {
   const [likeState, setLikeState] = useState(DEF4ULT)

   const { id: userId, displayName: userName } = useAuthUser()

   useEffect(() => {
      likeBlame(userId, devittId)
         .then(iLikeIt => {
            iLikeIt ? setLikeState(LIKED) : setLikeState(UNLIKED)
         })
         .catch(throwError)
   }, [])

   const handleClick = event => {
      event.stopPropagation()

      if (likeState === UNLIKED) {
         setLikeState(LIKING)
         likeDevitt({ userName, userId }, devittId)
            .then(() => setLikeState(LIKED))
            .catch(throwError)
         return
      }
      if (likeState === LIKED) {
         setLikeState(UNLIKING)
         unLikeDevitt({ userName, userId }, devittId)
            .then(() => setLikeState(UNLIKED))
            .catch(throwError)
         return
      }
   }

   const isLikedSvg =
      likeState === LIKED
         ? 'fill-[red] stroke-[red]'
         : 'fill-[transparent] stroke-[#8899a6]'

   const disableButton =
      likeState === UNLIKING || likeState === LIKING || likeState === DEF4ULT

   return (
      <button
         disabled={disableButton}
         title={likeState === LIKED ? 'Ya no me gusta' : 'Me gusta'}
         aria-label={likeState === LIKED ? 'Ya no me gusta' : 'Me gusta'}
         className="focus:outline-none group flex justify-center items-center"
         onClick={handleClick}
      >
         <span className="relative pr-[10px] inline-block">
            <span className="absolute bg-red-600 transition-colors bg-opacity-0 group-hover:bg-opacity-20 w-9 h-9 rounded-full top-[-9px] left-[-8.5px]"></span>
            <HeartIcon
               className={
                  'w-5 group-hover:stroke-[red] transition-[fill, stroke] ' +
                  isLikedSvg
               }
            />
         </span>
      </button>
   )
}

export default LikeBtn
