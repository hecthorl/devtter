import { useAuthUser } from 'next-firebase-auth'
import { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import HoverComponent from 'components/HoverComponent'

const Avatar = dynamic(() => import('components/Avatar'), { ssr: false })

const MiniProfile = () => {
   const [isClicked, setIsClicked] = useState(false)
   const { displayName } = useAuthUser()
   if (!displayName) return null
   return (
      <div
         onClick={() => setIsClicked(!isClicked)}
         className="miniprofile-container"
         aria-label="Menú de la cuenta"
         role="button"
      >
         <div className="miniprofile-avatar">
            <Avatar />
         </div>
         <div className="miniprofile-info">
            <div>
               {!displayName ? (
                  <span className="miniprofile-loader"></span>
               ) : (
                  <span className="font-bold">{displayName}</span>
               )}

               <div className="miniprofile-name">
                  @{displayName.replace(' ', '_')}
               </div>
            </div>
            <FiMoreHorizontal
               aria-hidden
               className="pointer-events-none text-xl"
            />
         </div>
         {isClicked && (
            <>
               <div className="fake-screen"></div>
               <HoverComponent />
            </>
         )}
      </div>
   )
}

export default MiniProfile
