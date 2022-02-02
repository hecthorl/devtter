import Link from 'next/link'
import { Flex, Icon, Link as LinkChacra, Text } from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'

const AppBarItem = ({ icon, title, href }) => {
   const { userData } = useUserAuth()
   const justProfile = title === 'Perfil' ? `/${userData.nickname}` : href
   return (
      <Link href={justProfile} passHref>
         <LinkChacra
            w="full"
            rounded="full"
            _hover={{
               textDecoration: 'none'
            }}
            fontSize="xl"
            py="4px"
            role="group"
         >
            <Flex
               align="center"
               rounded="full"
               p="11px"
               w="fit-content"
               _groupHover={{
                  bg: 'rgba(255 255 255 / 10%)'
               }}
            >
               <Icon as={icon} />
               <Text ml="20px" mr="16px">
                  {title}
               </Text>
            </Flex>
         </LinkChacra>
      </Link>
   )
}

export default AppBarItem
