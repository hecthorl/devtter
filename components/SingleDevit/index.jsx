import dynamic from 'next/dynamic'
import CommentBtn from 'components/Devit/CommentBtn'
import LikeBtn from 'components/Devit/LikeBtn'
import DevitMedia from 'components/DevitMedia'
import SingleDevitHeading from './SingleDevitHeading'

const SingleDevitDates = dynamic(() => import('./Dates'), { ssr: false })

const SingleDevit = props => {
   const { avatar, content, username, createdAt, img } = props

   return (
      <article className="single_devit-container">
         <SingleDevitHeading avatar={avatar} username={username} />
         <div>
            <p className="pb-3 text-2xl">{content}</p>
            <DevitMedia img={img} />
         </div>
         <div className="text-white text-opacity-50 py-3 space-x-1">
            <SingleDevitDates date={createdAt} />
         </div>
         <div className="flex w-full justify-around text-sm text-[#8899a6]">
            <CommentBtn />
            <button>
               <span>🧁</span>
            </button>
            <LikeBtn />
            <button>
               <span>🥤</span>
            </button>
         </div>
      </article>
   )
}

export default SingleDevit
