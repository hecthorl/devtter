import appBarItem from 'helpers/appBarItem'
import { ICONS } from 'helpers/devitIcons'
import useGlobalContext from 'hooks/useGlobalContext'
import { useRouter } from 'next/router'
import { GiFeather } from 'react-icons/gi'

const AppbarNavigation = ({ isUser }) => {
   const mobileSize = ICONS.slice(0, 4)
   const notUser = ICONS.slice(0, 2)
   const { width, setpopUp } = useGlobalContext()
   const { push } = useRouter()

   const devittearBtn = () => {
      width <= 500 ? push('/compose/tweet') : setpopUp(true)
   }

   if (!isUser) return notUser.map(appBarItem)
   return (
      <>
         <div className="flex sm:flex-col gap-y-2 w-full">
            {width <= 500 ? mobileSize.map(appBarItem) : ICONS.map(appBarItem)}
         </div>
         <button className="devitearBtn" onClick={devittearBtn}>
            <GiFeather
               aria-hidden
               className="pointer-events-none text-2xl 2xl:hidden"
            />
            <span className="hidden 2xl:inline text-base font-bold">
               Devittear
            </span>
         </button>
      </>
   )
}

export default AppbarNavigation
