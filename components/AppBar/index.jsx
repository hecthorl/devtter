import Link from 'next/link'
import AppbarNavigation from './AppBarNavigation'
import MiniProfile from 'components/MiniProfile'

const AppBar = () => {
   return (
      <header className="appbar-container">
         <nav
            className="nav-container"
            style={{ lineHeight: 'inherit' }}
            aria-label="Navegacion Principal"
            role="navigation"
         >
            <Link href="/">
               <a className="logo-link" aria-label="Devtter" role="link">
                  <img
                     src="/logoDevvter.svg"
                     className="logo-img"
                     aria-hidden
                  />
               </a>
            </Link>
            <AppbarNavigation isUser={true} />
         </nav>
         <MiniProfile />
      </header>
   )
}

export default AppBar
