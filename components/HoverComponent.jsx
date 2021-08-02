import { useAuthUser } from 'next-firebase-auth'
import Avatar from './Avatar'
import { GiCheckMark } from 'react-icons/gi'

const HoverComponent = () => {
   const { displayName, signOut } = useAuthUser()
   return (
      <div
         onClick={e => e.stopPropagation()}
         className="absolute w-[300px] h-[222px] top-[-234px] left-0 cursor-auto bg-[#15202b] rounded-2xl shadow-float"
      >
         <div className="relative py-3 divide-y divide-[rgba(255,255,255,0.2)] w-full text-base">
            <div className="py-3 px-4 flex justify-between items-center">
               <div className="w-[48px]">
                  <Avatar />
               </div>
               <div className=" flex flex-col">
                  <span className="font-bold">{displayName}</span>
                  <span className="text-white text-opacity-30">
                     @{displayName.replace(' ', '_')}
                  </span>
               </div>
               <span className="text-[lime] text-lg">
                  <GiCheckMark />
               </span>
            </div>
            <div className="py-3 px-4 hover:bg-[#ffffff0d]">
               Agregar otra cuenta 👌
            </div>
            <button
               onClick={() => signOut()}
               className="py-3 px-4 w-[inherit] hover:bg-[#ffffff0d]"
            >
               Cerrar la sessión de
               <span className="block">@{displayName.replace(' ', '_')}</span>
            </button>
         </div>
         <div
            style={{
               backgroundColor: 'inherit',
               position: 'absolute',
               width: '20px',
               height: '11px',
               bottom: -11,
               right: 'calc(50% - 20px)',
               clipPath: 'polygon(100% 0, 0 0, 50% 99%)',
               boxShadow:
                  'rgb(136 153 166 / 20%) 0px 0px 15px, rgb(136 153 166 / 15%) 0px 0px 3px 1px'
            }}
         ></div>
      </div>
   )
}

export default HoverComponent
