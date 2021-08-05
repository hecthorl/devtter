import BookmarksIcon from 'components/DevtterIcons/BookmarksIcon'
import ExploreIcon from 'components/DevtterIcons/ExploreIcon'
import HomeIcon from 'components/DevtterIcons/HomeIcon'
import ListsIcon from 'components/DevtterIcons/ListsIcon'
import MessagesIcon from 'components/DevtterIcons/MessagesIcon'
import NotificationsIcon from 'components/DevtterIcons/NotificationsIcon'
import OptionsIcon from 'components/DevtterIcons/OptionsIcon'
import ProfileIcon from 'components/DevtterIcons/ProfileIcon'

/**
 * @constant {array} ICONS - Array con la información para mapear en un componente.
 */
export const ICONS = [
   {
      title: 'Inicio',
      href: '/home',
      icon: <HomeIcon />
   },
   {
      title: 'Explorar',
      href: '/',
      icon: <ExploreIcon />
   },
   {
      title: 'Notificaciones',
      href: '/',
      icon: <NotificationsIcon />
   },
   {
      title: 'Mensajes',
      href: '/',
      icon: <MessagesIcon />
   },
   {
      title: 'Guardados',
      href: '/',
      icon: <BookmarksIcon />
   },
   {
      title: 'Lista',
      href: '/',
      icon: <ListsIcon />
   },
   {
      title: 'Perfil',
      href: '/',
      icon: <ProfileIcon />
   },
   {
      title: 'Más opciones',
      href: '/',
      icon: <OptionsIcon />
   }
]
