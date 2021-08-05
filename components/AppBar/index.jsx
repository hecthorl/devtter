import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useAuthUser } from 'next-firebase-auth'
import HoverComponent from 'components/HoverComponent'
import { useState } from 'react'
import AppbarNavigation from './AppBarNavigation'

const Avatar = dynamic(() => import('components/Avatar'), { ssr: false })

const AppBar = () => {
   const { displayName } = useAuthUser()
   const [isClicked, setIsClicked] = useState(false)

   return (
      <header className="appbar-container">
         <nav
            className="nav-container"
            style={{ lineHeight: 'inherit' }}
            aria-label="Navegacion Principal"
            role="navigation"
         >
            <Link href="/">
               <a className="logo-link" aria-label="Devtter" role="link">
                  <img
                     src="/logoDevvter.svg"
                     className="logo-img"
                     aria-hidden
                  />
               </a>
            </Link>
            <AppbarNavigation isUser={displayName} />
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
