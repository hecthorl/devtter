/* eslint-disable no-useless-return */
import { devittStats, likeDevitt, unLikeDevitt } from 'firebase/cliente'
import { LIKES_STATES } from 'helpers/constants'
import { useAuthUser } from 'next-firebase-auth'
import { useEffect, useState } from 'react'
import HeartIcon from './DevtterIcons/HeartIcon'

const { DEF4ULT, UNLIKING, UNLIKED, LIKED, LIKING, ERROR } = LIKES_STATES

const LikeBtn = ({ devittId, isLiked }) => {
   // console.log(devittId)
   // const { id: userId, displayName: userName } = useAuthUser()

   // console.log(isLiked)
   const handleClick = event => {
      console.log(isLiked)
      // setLike(!like)
      event.stopPropagation()
      // console.log(devittId)
      // if (like === DEF4ULT || like === UNLIKED) {
      //    setLike(LIKING)
      //    likeDevitt({ userName, userId }, devittId)
      //       .then(() => {
      //          setLike(LIKED)
      //          console.log('se likeo')
      //       })
      //       .catch(() => {
      //          throw new Error(ERROR)
      //       })
      //    return
      // }
      // if (like === LIKED) {
      //    setLike(UNLIKING)
      //    unLikeDevitt({ userName, userId }, devittId)
      //       .then(() => {
      //          setLike(UNLIKED)
      //          console.log('se deslikeo')
      //       })
      //       .catch(() => {
      //          status(ERROR)
      //          throw new Error(ERROR)
      //       })
      //    return
      // }
   }

   // const isLikedSvg =
   //    like === LIKED
   //       ? 'fill-[red] stroke-[red]'
   //       : 'fill-[transparent] stroke-[#8899a6]'

   // const disableButton = like === UNLIKING || like === LIKING

   return (
      <button
         // disabled={disableButton}
         // title={like ? 'Ya no me gusta' : 'Me gusta'}
         className="focus:outline-none group flex justify-center items-center"
         onClick={handleClick}
      >
         <span className="relative pr-[10px] inline-block">
            <span className="absolute bg-red-600 transition-colors bg-opacity-0 group-hover:bg-opacity-20 w-9 h-9 rounded-full top-[-9px] left-[-8.5px]"></span>
            <HeartIcon
               className={
                  'w-5 group-hover:stroke-[red] transition-[fill, stroke] ' +
                  'isLikedSvg'
               }
            />
         </span>
      </button>
   )
}

export default LikeBtn
