import dynamic from 'next/dynamic'
import DevitMedia from 'components/DevitMedia'
import SingleDevitHeading from './SingleDevitHeading'
import Avatar from 'components/Avatar'
import DevitReactions from 'components/DevitReactions'

const SingleDevitDates = dynamic(() => import('./Dates'), { ssr: false })

const SingleDevit = props => {
   const { avatar, content, username, createdAt, img, likesCount, id } = props

   return (
      <article className="single_devit-container">
         <SingleDevitHeading avatar={avatar} username={username} />
         <div>
            <p className="pb-3 text-2xl">{content}</p>
            <DevitMedia img={img} />
         </div>
         <div className="single_devit-date">
            <SingleDevitDates date={createdAt} />
         </div>
         <div className="single_devit-reactions">
            <div className="border-b border-t py-3 border-secondary">
               18 Retweets 59 Me gusta
            </div>
            <DevitReactions id={id} likesCount={likesCount} />
            <div className="flex items-center justify-between pt-3 border-t border-secondary">
               <div className="flex items-center gap-x-3">
                  <div className="w-[48px]">
                     <Avatar />
                  </div>
                  <span className="text-xl">Devittea tu respuesta</span>
               </div>
               <button className="px-4 bg-opacity-40 text-opacity-40 py-2 font-bold bg-green-500 rounded-full text-white">
                  Responder
               </button>
            </div>
         </div>
      </article>
   )
}

export default SingleDevit
