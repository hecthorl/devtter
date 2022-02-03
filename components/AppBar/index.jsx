import { Box, Flex } from '@chakra-ui/react'
import { ICONS } from 'helpers/iconsArray'
import AppBarItem from './AppBarItem'
import BrandIcon from 'components/DevitIcons/BrandIcon'
import MiniProfile from 'components/MiniProfile'
import DevitearBtn from 'components/Buttons/DevitearBtn'

const AppBar = () => {
   return (
      <Flex
         as="header"
         direction="column"
         maxW={{
            sm: '88px',
            md: '88px',
            lg: '88px',
            xl: '275px'
         }}
         w="full"
         h={`${window.innerHeight}px`}
         textColor="white"
         mx="12px"
      >
         <Flex
            justify="space-between"
            direction="column"
            position="fixed"
            align={{
               sm: 'center',
               md: 'center',
               lg: 'center',
               xl: 'unset'
            }}
            top={0}
            maxW={{
               sm: '88px',
               md: '88px',
               lg: '88px',
               xl: '275px'
            }}
            w="full"
            h="full"
         >
            <Flex
               px="12px"
               w="inherit"
               direction="column"
               align={{
                  sm: 'center',
                  md: 'center',
                  lg: 'center',
                  xl: 'flex-start'
               }}
            >
               <Box
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
               </Box>
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
   )
}

export default AppBar
