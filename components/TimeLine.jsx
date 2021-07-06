import Devit from 'components/Devit'
import SkeletonDevit from 'components/SkeletonDevit'
import { FcIdea } from 'react-icons/fc'
import useUser from 'hooks/useUser'

const TimeLine = ({ devits }) => {
   const user = useUser()
   return (
      <main className="divide-y divide-blue-400 w-full max-w-xl min-w-min sm:border-r sm:border-blue-400">
         <div className="sticky top-0 bg-blue-900 px-4 py-3 flex items-center border-b border-blue-400">
            <div className="w-12 sm:hidden">
               {user?.avatar ? (
                  <img
                     src={user.avatar}
                     alt="user avatar"
                     className="rounded-full"
                  />
               ) : (
                  <div className="rounded-full bg-blue-400 h-10 w-10"></div>
               )}
            </div>
            <span className="text-xl w-full ml-5 sm:ml-0 font-bold">
               Inicio
            </span>
            <FcIdea className="text-3xl" />
         </div>
         {devits.length ? (
            devits.map(item => {
               const { avatar, img, content, username, id, userId, createdAt } =
                  item
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
         ) : (
            <>
               <SkeletonDevit />
               <SkeletonDevit />
               <SkeletonDevit />
               <SkeletonDevit />
               <SkeletonDevit />
               <SkeletonDevit />
            </>
         )}
      </main>
   )
}

export default TimeLine
