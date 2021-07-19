import { useState } from 'react'
import HeartIcon from './HeartIcon'

const LikeBtn = () => {
   const [liked, setLiked] = useState(false)
   const isLiked = liked
      ? 'fill-[red] stroke-[red]'
      : 'fill-[transparent] stroke-[#8899a6]'

   return (
      <button
         title={liked ? 'Ya no me gusta' : 'Me gusta'}
         className="focus:outline-none group flex justify-center items-center"
         onClick={() => setLiked(!liked)}
      >
         <span className="relative pr-[10px] inline-block">
            <span className="absolute bg-red-600 transition-colors bg-opacity-0 group-hover:bg-opacity-20 w-9 h-9 rounded-full top-[-9px] left-[-8.5px]"></span>
            <HeartIcon
               className={
                  'w-5  group-hover:stroke-[red] transition-[fill, stroke] ' +
                  isLiked
               }
            />
         </span>
         <span className="group-hover:text-red-600 group-hover:text-opacity-100 transition-colors">
            10
         </span>
      </button>
   )
}

export default LikeBtn
