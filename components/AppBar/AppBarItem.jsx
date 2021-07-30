import Link from 'next/link'

const AppBarItem = ({ icon, title, href }) => {
   return (
      <Link href={href}>
         <a className="flex w-full group justify-center 2xl:justify-start">
            <div className="group-hover:bg-green-600 group-hover:bg-opacity-10 rounded-full group transition-colors flex 2xl:gap-x-4 justify-center 2xl:justify-start p-2">
               {icon}
               <span className="hidden 2xl:block group-hover:text-green-500 transition-colors w-full mr-2">
                  {title}
               </span>
            </div>
         </a>
      </Link>
   )
}

export default AppBarItem
