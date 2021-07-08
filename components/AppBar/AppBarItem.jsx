import Link from 'next/link'
import { FiHome } from 'react-icons/fi'

const AppBarItem = ({ icon, title, href, className }) => {
   return (
      <Link href={href}>
         <a
            className={
               className +
               ' hover:bg-green-600 hover:bg-opacity-20 px-3 py-2 rounded-full group transition-colors'
            }
         >
            {icon || <FiHome className="pointer-events-none text-green-500" />}
            <span className="hidden 2xl:block group-hover:text-green-500 transition-colors">
               {title}
            </span>
         </a>
      </Link>
   )
}

export default AppBarItem
