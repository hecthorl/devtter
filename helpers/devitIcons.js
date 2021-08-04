import BookmarksIcon from 'components/DevtterIcons/BookmarksIcon'
import ExploreIcon from 'components/DevtterIcons/ExploreIcon'
import HomeIcon from 'components/DevtterIcons/HomeIcon'
import ListsIcon from 'components/DevtterIcons/ListsIcon'
import MessagesIcon from 'components/DevtterIcons/MessagesIcon'
import NotificationsIcon from 'components/DevtterIcons/NotificationsIcon'
import OptionsIcon from 'components/DevtterIcons/OptionsIcon'
import ProfileIcon from 'components/DevtterIcons/ProfileIcon'

// const Home = () => <HomeIcon />
// const Explorer = () => <ExploreIcon />
// const Notifications = () => <NotificationsIcon />
// const Messages = () => <MessagesIcon />
// const Bookmarks = () => <BookmarksIcon />
// const Lists = () => <ListsIcon />
// const Profile = () => <ProfileIcon />
// const Options = () => <OptionsIcon />

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
