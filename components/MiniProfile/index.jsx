import { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import dynamic from 'next/dynamic'
import ProfileMenu from 'components/ProfileMenu'
import useAuthUser from 'hooks/useAuthUser'

const Avatar = dynamic(() => import('components/Avatar'), { ssr: false })

const MiniProfile = () => {
   const [isClicked, setIsClicked] = useState(false)
   const { userData } = useAuthUser()

   if (!userData.user.email) return null
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
               {!userData.user.name ? (
                  <span className="miniprofile-loader"></span>
               ) : (
                  <span className="font-bold">{userData.user.name}</span>
               )}

               <div className="miniprofile-name">
                  @{userData.user.name.replace(' ', '_')}
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
               <ProfileMenu />
            </>
         )}
      </div>
   )
}

export default MiniProfile
