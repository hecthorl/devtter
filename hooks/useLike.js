/* eslint-disable no-useless-return */
import { likeDevitt, unLikeDevitt } from 'firebase/cliente'
import { LIKES_STATES } from 'helpers/constants'
import likeBlame from 'helpers/likeBlame'
import throwError from 'helpers/throwError'
import { useAuthUser } from 'next-firebase-auth'
import { useEffect, useState } from 'react'

const { DEF4ULT, UNLIKING, UNLIKED, LIKED, LIKING } = LIKES_STATES

const useLike = devittId => {
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
   const disableButton =
      likeState === UNLIKING || likeState === LIKING || likeState === DEF4ULT

   return { disableButton, handleClick, likeState }
}

export default useLike
