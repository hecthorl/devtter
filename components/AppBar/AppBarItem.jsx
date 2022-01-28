import Link from 'next/link'
import { Flex, Icon, Link as LinkChacra, Text } from '@chakra-ui/react'

const AppBarItem = ({ icon, title, href }) => {
   return (
      <Link href={href} passHref>
         <LinkChacra
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
               <Text ml="12px" mr="16px">
                  {title}
               </Text>
            </Flex>
         </LinkChacra>
      </Link>
   )
}

export default AppBarItem
