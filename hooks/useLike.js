import { LIKES_STATES } from 'helpers/constants'
import likeBlame from 'helpers/likeBlame'
import throwError from 'helpers/throwError'
import { likeDevitt, unLikeDevitt } from 'services/firebaseClient'
import { useEffect, useState } from 'react'
import useAuthUser from './useAuthUser'

const { DEF4ULT, UNLIKING, UNLIKED, LIKED, LIKING } = LIKES_STATES

const useLike = devittId => {
   const [likeState, setLikeState] = useState(DEF4ULT)
   const { userData } = useAuthUser()
   // userId y displayName

   useEffect(() => {
      likeBlame('asdasd', devittId)
         .then(iLikeIt => {
            iLikeIt ? setLikeState(LIKED) : setLikeState(UNLIKED)
         })
         .catch(throwError)
   }, [])

   const handleClick = event => {
      event.stopPropagation()

      if (likeState === UNLIKED) {
         setLikeState(LIKING)
         likeDevitt({ userName: userData.user.name, userId: 'asasd' }, devittId)
            .then(() => setLikeState(LIKED))
            .catch(throwError)
         return
      }
      if (likeState === LIKED) {
         setLikeState(UNLIKING)
         unLikeDevitt(
            { userName: userData.user.name, userId: 'asasd' },
            devittId
         )
            .then(() => setLikeState(UNLIKED))
            .catch(throwError)
      }
   }
   const disableButton =
      likeState === UNLIKING || likeState === LIKING || likeState === DEF4ULT

   return { disableButton, handleClick, likeState }
}

export default useLike
