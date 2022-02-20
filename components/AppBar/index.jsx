import Link from 'next/link'
import { Flex, Link as ChakraLink } from '@chakra-ui/react'
import { ICONS } from 'helpers/iconsArray'
import AppBarItem from './AppBarItem'
import BrandIcon from 'components/DevitIcons/BrandIcon'
import MiniProfile from 'components/MiniProfile'
import DevitearBtn from 'components/Buttons/DevitearBtn'
import AppBarMobile from 'components/AppBarMobile'

const AppBar = () => (
   <>
      <AppBarMobile />
      <Flex
         display={['none', 'flex']}
         as="header"
         direction="column"
         maxW={{ base: '88px', xl: '275px' }}
         w="full"
         h="100vh"
         textColor="white"
         mx={{
            base: '0',
            xl: '12px'
         }}
      >
         <Flex
            justify="space-between"
            direction="column"
            position="fixed"
            align={{ base: 'center', xl: 'unset' }}
            top={0}
            maxW="inherit"
            w="full"
            h="full"
         >
            <Flex
               px="12px"
               w="inherit"
               direction="column"
               align={{
                  base: 'center',
                  xl: 'flex-start'
               }}
            >
               <Link href="/home" passHref>
                  <ChakraLink
                     my="2px"
                     rounded="full"
                     pos="relative"
                     w="50px"
                     h="50px"
                     bg="inherit"
                     cursor="pointer"
                     _hover={{
                        bg: 'rgba(29 155 240 / 10%)'
                     }}
                  >
                     <BrandIcon
                        pos="absolute"
                        top="10px"
                        left="7px"
                        fontSize="3xl"
                     />
                  </ChakraLink>
               </Link>
               {ICONS.map(({ href, icon, title }) => (
                  <AppBarItem
                     key={title}
                     href={href}
                     icon={icon}
                     title={title}
                  />
               ))}
               <DevitearBtn />
            </Flex>
            <MiniProfile />
         </Flex>
      </Flex>
   </>
)

export default AppBar
