import { Flex, Stack } from '@chakra-ui/react'
import { ICONS } from 'helpers/iconsArray'
import AppBarItem from './AppBarItem'

const AppBar = () => {
   return (
      <Flex
         direction="column"
         as="header"
         maxW="275px"
         w="full"
         position="sticky"
         left={0}
         textColor="white"
      >
         <Flex direction="column">
            {ICONS.map(({ href, icon, title }) => (
               <AppBarItem key={title} href={href} icon={icon} title={title} />
            ))}
         </Flex>
         <div>mini-profile</div>
      </Flex>
   )
}

export default AppBar
