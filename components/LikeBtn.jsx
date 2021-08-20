import { LIKES_STATES } from 'helpers/constants'
import useLike from 'hooks/useLike'
import HeartIcon from './DevtterIcons/HeartIcon'

const LikeBtn = ({ devittId }) => {
   const { disableButton, handleClick, likeState } = useLike(devittId)
   const isLikedSvg =
      likeState === LIKES_STATES.LIKED
         ? 'fill-[red] stroke-[red]'
         : 'fill-[transparent] stroke-[#8899a6]'

   return (
      <button
         disabled={disableButton}
         title={
            likeState === LIKES_STATES.LIKED ? 'Ya no me gusta' : 'Me gusta'
         }
         aria-label={
            likeState === LIKES_STATES.LIKED ? 'Ya no me gusta' : 'Me gusta'
         }
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
