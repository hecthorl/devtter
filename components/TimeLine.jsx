import Devit from 'components/Devit'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import Avatar from './Avatar'
import DevitInput from './DevitInput'

const TimeLine = ({ devits }) => {
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
         {false <= 500 && (
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
                    createdAt,
                    likesCount
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
                       likesCount={likesCount}
                       id={id}
                    />
                 )
              })
            : [...Array(8).keys()].map((_, i) => <SkeletonDevit key={i} />)}
      </main>
   )
}

export default TimeLine
