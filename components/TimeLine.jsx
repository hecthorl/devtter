import Devit from 'components/Devit'
import SkeletonDevit from 'components/Devit/SkeletonDevit'
import useGlobalContext from 'hooks/useGlobalContext'
import useUser from 'hooks/useUser'
import DevitInput from './DevitInput'

const TimeLine = ({ devits }) => {
   const user = useUser()

   const { width, popUp } = useGlobalContext()
   return (
      <main className="w-full max-w-598 min-w-min sm:border-r sm:border-secondary">
         <div className="sticky z-10 top-0 bg-primary px-4 py-3 flex items-center border-b border-secondary">
            <div className="w-12 sm:hidden">
               {user?.avatar ? (
                  <img
                     src={user.avatar}
                     alt="user avatar"
                     className="rounded-full"
                  />
               ) : (
                  <div className="rounded-full bg-transparent h-10 w-10"></div>
               )}
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
               <DevitInput disabled={popUp} />
               <div className="w-full h-3 bg-tertiary border-t border-b border-secondary"></div>
            </>
         )}
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
/**
 * <div className="px-4 flex gap-x-3 py-3 border-b border-secondary">
                  <div className="w-12">
                     {user?.avatar ? (
                        <img
                           loading="lazy"
                           src={user.avatar}
                           alt="user avatar"
                           className="rounded-full"
                        />
                     ) : (
                        <div className="rounded-full bg-secondary h-10 w-10"></div>
                     )}
                  </div>
                  <div className="w-full mt-2">
                     <form className="flex flex-col items-end w-full">
                        <textarea
                           placeholder="¿Qué está pasando?"
                           className="bg-transparent resize-none w-full border-b h-20 border-secondary text-xl"
                        ></textarea>
                        <button
                           disabled
                           className="w-28 py-2 px-3 bg-green-500 mt-3 rounded-full"
                        >
                           Devitterar
                        </button>
                     </form>
                  </div>
               </div>
 */
