import { GiFeather } from 'react-icons/gi'
import Link from 'next/link'
import useUser from 'hooks/useUser'
import AppBarItem from './AppBarItem'
import items from './items.json'
import useGlobalContext from 'hooks/useGlobalContext'

const AppBar = () => {
   const user = useUser()
   const { width } = useGlobalContext()
   const mobileSize = items.slice(0, 4)
   return (
      <header className="fixed sm:sticky w-full sm:w-auto bottom-0 sm:top-0 sm:left-0 py-3 sm:px-3 bg-primary border-t sm:border-r border-secondary text-3xl sm:border-t-0 sm:h-screen sm:flex sm:flex-col sm:justify-between 2xl:max-w-251 2xl:w-full">
         <nav className="w-full flex justify-around items-start sm:flex-col sm:justify-between text-xl font-semibold h-3/4">
            {width <= 500
               ? mobileSize.map((item, id) => (
                    <AppBarItem
                       key={id}
                       className="flex 2xl:gap-3 w-full justify-center 2xl:justify-start"
                       title={item.title}
                       href={item.href}
                       icon={item.icon}
                    />
                 ))
               : items.map((item, id) => (
                    <AppBarItem
                       key={id}
                       className="flex 2xl:gap-3 w-full justify-center 2xl:justify-start"
                       title={item.title}
                       href={item.href}
                       icon={item.icon}
                    />
                 ))}
            <Link href="/compose/tweet">
               <a className="icons-section">
                  <GiFeather className="pointer-events-none 2xl:hidden" />
                  <span className="hidden 2xl:inline text-base font-bold">
                     Devittear
                  </span>
               </a>
            </Link>
         </nav>
         <div className="hidden sm:block sm:mt-5 2xl:flex 2xl:w-full 2xl:items-center gap-3 sm:pb-4 2xl:p-2 2xl:hover:bg-green-600 hover:bg-opacity-20 2xl:rounded-full 2xl:cursor-pointer transition-colors">
            {user?.avatar ? (
               <img
                  src={user.avatar}
                  alt="user avatar"
                  className="rounded-full w-12"
               />
            ) : (
               <div className="rounded-full bg-blue-400 h-10 w-10"></div>
            )}
            <div className="hidden 2xl:block text-sm w-full">
               <div>{user?.username}</div>
               <div className="text-white text-opacity-50">
                  @{user?.username.replace(' ', '_')}
               </div>
            </div>
         </div>
      </header>
   )
}

export default AppBar
/**
 *
 <AppBarItem
               className="flex 2xl:gap-3 w-full justify-center 2xl:justify-start"
               title="Inicio"
               href="/"
            />
            <AppBarItem
               className="flex 2xl:gap-3 w-full justify-center 2xl:justify-start"
               title="Explorar"
               href="/"
               icon="💥"
            />
            <AppBarItem
               className="flex 2xl:gap-3 w-full justify-center 2xl:justify-start"
               title="Notificaciones"
               href="/"
               icon="🔱"
            />
            <AppBarItem
               className="flex 2xl:gap-3 w-full justify-center 2xl:justify-start"
               title="Mensajes"
               href="/"
               icon="🍷"
            />
            <AppBarItem
               className="sm:flex gap-3 w-full hidden justify-center 2xl:justify-start"
               title="Guardados"
               href="/"
               icon="🛒"
            />
            <AppBarItem
               className="sm:flex gap-3 w-full hidden justify-center 2xl:justify-start"
               title="Listas"
               href="/"
               icon="🍫"
            />
            <AppBarItem
               className="sm:flex gap-3 w-full hidden justify-center 2xl:justify-start"
               title="Perfil"
               href="/"
               icon="🥩"
            />
            <AppBarItem
               className="sm:flex gap-3 w-full hidden justify-center 2xl:justify-start"
               title="Más opciones"
               href="/"
               icon="🎉"
            />
*/
