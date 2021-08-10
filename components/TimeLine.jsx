import Devit from 'components/Devit'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import useGlobalContext from 'hooks/useGlobalContext'
import Avatar from './Avatar'
import DevitInput from './DevitInput'

const TimeLine = ({ devits }) => {
   const { width } = useGlobalContext()
   return (
      <main className="timeline-container">
         <div className="timeline-heading">
            <div className="timeline-heading__avatar">
               <Avatar />
            </div>
            <span className="timeline-heading__title">Inicio</span>
            <span role="figure" aria-hidden className="text-lg">
               ✨
            </span>
         </div>
         {!(width <= 500) && (
            <>
               <DevitInput />
               <div className="timeline__separator"></div>
            </>
         )}
         {devits.length
            ? devits.map(item => {
                 const {
                    avatar,
                    img,
                    content,
                    username,
                    id,
                    userId,
                    createdAt
                 } = item
                 return (
                    <Devit
                       key={id}
                       img={img}
                       avatar={avatar}
                       content={content}
                       username={username}
                       userId={userId}
                       createdAt={createdAt}
                       id={id}
                    />
                 )
              })
            : [...Array(8).keys()].map((_, i) => <SkeletonDevit key={i} />)}
      </main>
   )
}

export default TimeLine
