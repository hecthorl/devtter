import appBarItem from 'helpers/appBarItem'
import { ICONS } from 'helpers/devitIcons'
import useWindowSize from 'hooks/useWindowSize'
import { useRouter } from 'next/router'
import { GiFeather } from 'react-icons/gi'
import useStore from 'store'

const AppbarNavigation = ({ isUser }) => {
   const mobileSize = ICONS.slice(0, 4)
   const notUser = ICONS.slice(0, 2)
   const { width } = useWindowSize()
   const setPopUp = useStore(state => state.setPopUp)

   const { push } = useRouter()

   const devittearBtn = () => {
      width <= 500 ? push('/compose/tweet') : setPopUp(true)
   }

   if (!isUser) return notUser.map(appBarItem)

   return (
      <>
         <div className="app-navigation-container">
            {width <= 500 ? mobileSize.map(appBarItem) : ICONS.map(appBarItem)}
         </div>
         <button
            className="devitear-btn"
            onClick={devittearBtn}
            role="button"
            aria-label="Devitear"
         >
            <GiFeather aria-hidden className="devitear-btn-svg" />
            <span className="devitear-btn-name">Devittear</span>
         </button>
      </>
   )
}

export default AppbarNavigation
