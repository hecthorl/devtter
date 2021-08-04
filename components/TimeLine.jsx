import Devit from 'components/Devit'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import useGlobalContext from 'hooks/useGlobalContext'
import Avatar from './Avatar'
import DevitInput from './DevitInput'

const TimeLine = ({ devits }) => {
   const { width } = useGlobalContext()
   return (
      <main className="max-w-[598px] sm:border-r sm:border-secondary">
         <div className="sticky z-10 top-0 bg-primary px-4 py-3 flex items-center border-b border-secondary">
            <div className="w-12 sm:hidden">
               <Avatar />
            </div>
            <span className="text-xl w-full ml-5 sm:ml-0 font-bold">
               Inicio
            </span>
            <span role="figure" className="text-lg">
               ✨
            </span>
         </div>
         {!(width <= 500) && (
            <>
               <DevitInput />
               <div className="w-full h-3 bg-tertiary border-t border-b border-secondary"></div>
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
            : [...Array(8).keys()].map((u, i) => <SkeletonDevit key={i} />)}
      </main>
   )
}

export default TimeLine
