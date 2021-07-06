import Link from 'next/link'
import { GiFeather } from 'react-icons/gi'
import { FiHome } from 'react-icons/fi'
import useUser from 'hooks/useUser'

const AppBar = () => {
   const user = useUser()
   return (
      <header className="fixed sm:sticky w-full sm:w-auto bottom-0 sm:top-0 sm:left-0 py-3 sm:px-3 bg-blue-900 border-t sm:border-r border-blue-400 text-3xl sm:border-t-0 sm:h-screen">
         <ul className="w-full flex justify-around items-center sm:flex-col sm:justify-evenly h-4/5">
            <li>
               <Link href="/">
                  <a>
                     <FiHome className="pointer-events-none text-green-500" />
                  </a>
               </Link>
            </li>
            <li>
               <span>🥩</span>
            </li>
            <li>
               <span>🍷</span>
            </li>
            <li>
               <span>🧶</span>
            </li>
         </ul>
         <Link href="/compose/tweet">
            <a className="icons-section">
               <GiFeather className="pointer-events-none" />
            </a>
         </Link>
         <div className="w-12 hidden sm:block sm:mt-5">
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
      </header>
   )
}

export default AppBar
