import Link from 'next/link'
import { Flex, Icon, Link as LinkChacra, Text } from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'

const AppBarItem = ({ icon, title, href }) => {
   const { userData } = useUserAuth()
   const justProfile = title === 'Perfil' ? `/${userData.nickname}` : href
   return (
      <Link href={justProfile} passHref>
         <LinkChacra
            w={{
               base: 'fit-content',
               xl: 'full'
            }}
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
               p="12px"
               w="fit-content"
               _groupHover={{
                  bg: 'rgba(255 255 255 / 10%)'
               }}
            >
               <Icon as={icon} />
               <Text
                  display={{
                     base: 'none',
                     xl: 'block'
                  }}
                  ml="20px"
                  mr="16px"
               >
                  {title}
               </Text>
               {/* {width > 1282 && (
               )} */}
            </Flex>
         </LinkChacra>
      </Link>
   )
}

export default AppBarItem
