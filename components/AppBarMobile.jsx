import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import { GiFeather } from 'react-icons/gi'
import AppBarItem from './AppBar/AppBarItem'
import ExploreIcon from './DevitIcons/ExploreIcon'
import HomeIcon from './DevitIcons/HomeIcon'
import MessagesIcon from './DevitIcons/MessagesIcon'
import NotificationsIcon from './DevitIcons/NotificationsIcon'

const AppBarMobile = () => {
   return (
      <Box
         bg="#15202b"
         w="full"
         pos="fixed"
         display={['block', 'none']}
         bottom={0}
      >
         <Flex
            borderTop="1px solid #38444d"
            justify="space-evenly"
            pos="relative"
            textColor="white"
         >
            <AppBarItem title="Inicio" icon={HomeIcon} href="/home" />
            <AppBarItem title="Explorar" icon={ExploreIcon} href="/home" />
            <AppBarItem
               title="Notificaiones"
               icon={NotificationsIcon}
               href="/home"
            />
            <AppBarItem
               title="Mensajes directos"
               icon={MessagesIcon}
               href="/home"
            />
            <Btn />
         </Flex>
      </Box>
   )
}

const Btn = () => {
   return (
      <Button
         boxShadow="rgb(136 153 166 / 20%) 0px 0px 10px, rgb(136 153 166 / 25%) 0px 1px 3px 1px"
         top="-80px"
         right="30px"
         pos={['absolute', 'static']}
         mt={[0, 2]}
         rounded="full"
         bg="leela.500"
         _disabled={{
            pointerEvents: 'none',
            opacity: 0.5
         }}
         _hover={{
            opacity: 0.9
         }}
         w={{
            base: '56px',
            xl: '90%'
         }}
         h="56px"
         fontWeight="bold"
      >
         <Text
            display={{
               base: 'none',
               xl: 'block'
            }}
         >
            Devittear
         </Text>
         <Icon
            display={{
               base: 'inline-block',
               xl: 'none'
            }}
            fontSize="2xl"
            as={GiFeather}
         />
      </Button>
   )
}

export default AppBarMobile
