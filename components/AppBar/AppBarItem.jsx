import useAuthUser from 'hooks/useAuthUser'
import Link from 'next/link'

const AppBarItem = ({ icon, title, href }) => {
   const { userData } = useAuthUser()
   const justProfile = title === 'Perfil' ? `/${userData.user.username}` : href
   return (
      <Link href={justProfile}>
         <a aria-label={title} role="link" className="app_bar_item group">
            <div className="app_bar_item-container group">
               <div className="app_bar_item-icon">{icon}</div>
               <span className="app_bar_item-content">{title}</span>
            </div>
         </a>
      </Link>
   )
}

export default AppBarItem
