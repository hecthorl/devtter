import Link from 'next/link'
// import { FiHome } from 'react-icons/fi'

const AppBarItem = ({ icon, title, href }) => {
   return (
      <Link href={href}>
         <a className="flex w-full group justify-center 2xl:justify-start">
            <div className="group-hover:bg-green-600 group-hover:bg-opacity-10 pl-3 sm:pr-3 2xl:pr-6 py-3 rounded-full group transition-colors flex 2xl:gap-3 justify-center 2xl:justify-start">
               {icon}
               <span className="hidden 2xl:block group-hover:text-green-500 transition-colors w-full">
                  {title}
               </span>
            </div>
         </a>
      </Link>
   )
}

export default AppBarItem
