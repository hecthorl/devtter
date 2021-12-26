import Avatar from './Avatar'
import { GiCheckMark } from 'react-icons/gi'

const ProfileMenu = () => {
   // signOut y displayName
   return (
      <div
         onClick={e => e.stopPropagation()}
         className="profile-menu"
         role="dialog"
      >
         <div className="profile-menu-container">
            <div className="profile-menu-info">
               <div className="w-[48px]">
                  <Avatar />
               </div>
               <div className="profile-menu-username">
                  <span className="font-bold">{displayName}</span>
                  <span className="text-white text-opacity-30">
                     @{displayName.replace(' ', '_')}
                  </span>
               </div>
               <GiCheckMark aria-hidden className="check-mark-icon" />
            </div>
            <div className="profile-menu-option_1">Agregar otra cuenta 👌</div>
            <button onClick={() => signOut()} className="profile-menu-option_2">
               Cerrar la sessión de
               <span className="block">@{displayName.replace(' ', '_')}</span>
            </button>
         </div>
         <div
            className="pointer"
            style={{ clipPath: 'polygon(100% 0, 0 0, 50% 99%)' }}
         ></div>
      </div>
   )
}

export default ProfileMenu
