import AppBarItem from 'components/AppBar/AppBarItem'

const appBarItem = (item, id) => (
   <AppBarItem key={id} title={item.title} href={item.href} icon={item.icon} />
)

export default appBarItem
