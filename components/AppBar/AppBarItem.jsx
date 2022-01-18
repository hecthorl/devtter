import useAuthUser from 'hooks/useAuthUser'
import Link from 'next/link'

const AppBarItem = ({ icon, title, href }) => {
   const { userData } = useAuthUser()
   const justProfile = title === 'Perfil' ? '/[profile]' : href
   return (
      <Link href={justProfile} as={`/${userData.user.username}`}>
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
