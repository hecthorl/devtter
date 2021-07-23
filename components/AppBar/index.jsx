import { GiFeather } from 'react-icons/gi'
import Link from 'next/link'
import useUser from 'hooks/useUser'
import AppBarItem from './AppBarItem'
import items from './items.json'
import useGlobalContext from 'hooks/useGlobalContext'
import { FiMoreHorizontal } from 'react-icons/fi'
import { useRouter } from 'next/router'
import Avatar from 'components/Avatar'

const AppBar = () => {
   const user = useUser()
   const { push } = useRouter()
   const { width, setpopUp } = useGlobalContext()
   const mobileSize = items.slice(0, 4)
   const DevvitearButton = () => {
      width <= 500 ? push('/compose/tweet') : setpopUp(true)
   }
   return (
      <header className="fixed sm:sticky w-full sm:w-auto bottom-0 sm:top-0 sm:left-0 pb-3 sm:px-3 bg-primary border-t sm:border-r border-secondary text-3xl sm:border-t-0 sm:h-screen sm:flex sm:flex-col sm:justify-between 2xl:max-w-251 2xl:w-full">
         <nav className="w-full flex justify-around items-start sm:flex-col sm:justify-between text-xl font-semibold h-3/4">
            <Link href="/">
               <a className="bg-green-500 bg-opacity-0 hover:bg-opacity-10 transition-colors hidden rounded-full w-12 h-12 sm:block relative">
                  <img
                     src="/logoDevvter.svg"
                     alt="Logo Devtter"
                     className="w-8 h-8 absolute top-2 right-3"
                  />
               </a>
            </Link>
            {width <= 500
               ? mobileSize.map((item, id) => (
                    <AppBarItem
                       key={id}
                       title={item.title}
                       href={item.href}
                       icon={item.icon}
                    />
                 ))
               : items.map((item, id) => (
                    <AppBarItem
                       key={id}
                       title={item.title}
                       href={item.href}
                       icon={item.icon}
                    />
                 ))}
            <button className="devitearBtn" onClick={DevvitearButton}>
               <GiFeather className="pointer-events-none 2xl:hidden" />
               <span className="hidden 2xl:inline text-base font-bold">
                  Devittear
               </span>
            </button>
         </nav>
         <div className="hidden sm:block sm:mt-5 2xl:flex 2xl:w-full 2xl:items-center gap-3 sm:pb-4 2xl:p-3 2xl:hover:bg-green-600 2xl:hover:bg-opacity-20 2xl:rounded-full 2xl:cursor-pointer transition-colors">
            <div className="w-[40px]">
               <Avatar />
            </div>
            <div className="hidden 2xl:flex text-sm w-full justify-between items-center">
               <div>
                  <div>
                     {user?.username ? (
                        user?.username
                     ) : (
                        <span className="w-full bg-secondary h-3"></span>
                     )}
                  </div>
                  <div className="text-white text-opacity-50">
                     @{user?.username.replace(' ', '_')}
                  </div>
               </div>

               <span className="text-2xl">
                  <FiMoreHorizontal className="pointer-events-none" />
               </span>
            </div>
         </div>
      </header>
   )
}

export default AppBar
