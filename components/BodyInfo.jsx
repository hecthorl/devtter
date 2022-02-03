import { Flex, Icon, Link, Text } from '@chakra-ui/react'
import { BsCalendar3 } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { ImLink } from 'react-icons/im'

const Comp = ({ children, data }) => {
   if (!data) return null
   return (
      <Flex gap={2} align="center">
         {children}
      </Flex>
   )
}

const BodyInfo = ({ user }) => {
   return (
      <Flex gap={5}>
         <Comp data={user.preferences.location || 2222}>
            <Icon as={HiOutlineLocationMarker} />
            <Text>{user.preferences.location || 222}</Text>
         </Comp>
         <Comp data={user.github_url}>
            <Icon as={ImLink} />
            <Link textColor="leela.500" href={user.github_url} isExternal>
               {user.github_url}
            </Link>
         </Comp>
         <Comp data={user.created_at}>
            <Icon as={BsCalendar3} />
            <Text as="span">
               Se unió el
               <Text as="time" ml={1}>
                  {new Intl.DateTimeFormat('es-ES', {
                     day: 'numeric',
                     month: 'short',
                     year: 'numeric'
                  }).format(user.created_at)}
               </Text>
            </Text>
         </Comp>
      </Flex>
   )
}

export default BodyInfo
