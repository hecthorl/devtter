import Link from 'next/link'

const AppBarItem = ({ icon, title, href }) => {
   return (
      <Link href={href}>
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
