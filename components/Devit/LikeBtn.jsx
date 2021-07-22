import { useState } from 'react'
import HeartIcon from './HeartIcon'

const LikeBtn = () => {
   const [liked, setLiked] = useState(false)
   const isLikedSvg = liked
      ? 'fill-[red] stroke-[red]'
      : 'fill-[transparent] stroke-[#8899a6]'

   const islikedNumber = liked ? 'text-red-600' : 'group-hover:text-red-600'

   const handleClick = event => {
      setLiked(!liked)
      event.stopPropagation()
   }

   return (
      <button
         title={liked ? 'Ya no me gusta' : 'Me gusta'}
         className="focus:outline-none group flex justify-center items-center"
         onClick={handleClick}
      >
         <span className="relative pr-[10px] inline-block">
            <span className="absolute bg-red-600 transition-colors bg-opacity-0 group-hover:bg-opacity-20 w-9 h-9 rounded-full top-[-9px] left-[-8.5px]"></span>
            <HeartIcon
               className={
                  'w-5  group-hover:stroke-[red] transition-[fill, stroke] ' +
                  isLikedSvg
               }
            />
         </span>
         <span
            className={
               'group-hover:text-opacity-100 transition-colors ' + islikedNumber
            }
         >
            10
         </span>
      </button>
   )
}

export default LikeBtn
