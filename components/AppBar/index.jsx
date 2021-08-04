import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GiFeather } from 'react-icons/gi'
import items from './items.json'
import useGlobalContext from 'hooks/useGlobalContext'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useAuthUser } from 'next-firebase-auth'
import HoverComponent from 'components/HoverComponent'
import { useState } from 'react'
import appBarItem from 'helpers/appBarItem'
import { ICONS } from 'helpers/devitIcons'

const Avatar = dynamic(() => import('components/Avatar'), { ssr: false })

const AppBar = () => {
   const { displayName } = useAuthUser()
   const [isClicked, setIsClicked] = useState(false)
   const { push } = useRouter()
   const { width, setpopUp } = useGlobalContext()
   const mobileSize = items.slice(0, 4)
   const notUser = items.slice(0, 2)

   const devittearBtn = () => {
      width <= 500 ? push('/compose/tweet') : setpopUp(true)
   }
   return (
      <header className="appbar-container">
         <nav className="nav-container" style={{ lineHeight: 'inherit' }}>
            <Link href="/">
               <a className="logo-link">
                  <img
                     src="/logoDevvter.svg"
                     alt="Logo Devtter"
                     className="w-8 h-8 absolute top-2 right-3"
                  />
               </a>
            </Link>
            {displayName ? (
               <>
                  <div className="flex sm:flex-col gap-y-2 w-full">
                     {/* {width <= 500
                        ? mobileSize.map(appBarItem)
                        : items.map(appBarItem)} */}
                     {ICONS.map(appBarItem)}
                  </div>
                  <button className="devitearBtn" onClick={devittearBtn}>
                     <GiFeather className="pointer-events-none text-2xl 2xl:hidden" />
                     <span className="hidden 2xl:inline text-base font-bold">
                        Devittear
                     </span>
                  </button>
               </>
            ) : (
               notUser.map(appBarItem)
            )}
         </nav>
         {displayName && (
            <div
               onClick={() => setIsClicked(!isClicked)}
               className="hidden relative sm:block sm:mt-5 2xl:flex 2xl:w-full 2xl:items-center gap-3 sm:pb-4 2xl:p-3 2xl:hover:bg-green-600 2xl:hover:bg-opacity-20 2xl:rounded-full 2xl:cursor-pointer transition-colors"
            >
               <div className="w-[40px] h-[40px] mx-auto">
                  <Avatar />
               </div>
               <div className="hidden 2xl:flex text-sm w-full justify-between items-center">
                  <div className="w-full">
                     {!displayName ? (
                        <span className="w-full bg-secondary rounded-full h-3 inline-block"></span>
                     ) : (
                        displayName
                     )}

                     <div className="text-white text-opacity-50">
                        @{displayName.replace(' ', '_')}
                     </div>
                  </div>

                  <span className="text-2xl">
                     <FiMoreHorizontal className="pointer-events-none" />
                  </span>
               </div>
               {isClicked && (
                  <>
                     <div className="fixed top-0 left-0 right-0 w-screen h-screen cursor-auto"></div>
                     <HoverComponent />
                  </>
               )}
            </div>
         )}
      </header>
   )
}

export default AppBar
