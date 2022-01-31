import { Box, Button, Flex } from '@chakra-ui/react'
import { ICONS } from 'helpers/iconsArray'
import AppBarItem from './AppBarItem'
import BrandIcon from 'components/DevitIcons/BrandIcon'
import MiniProfile from 'components/MiniProfile'

const AppBar = () => {
   return (
      <Flex
         direction="column"
         as="header"
         maxW="275px"
         w="full"
         h={`${window.innerHeight}px`}
         textColor="white"
         mx="12px"
      >
         <Flex
            justify="space-between"
            direction="column"
            h="full"
            position="fixed"
            top={0}
            w="full"
            maxWidth="275px"
         >
            <Flex direction="column" align="flex-start">
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
               <Button
                  mt={2}
                  rounded="full"
                  bg="leela.500"
                  _disabled={{
                     pointerEvents: 'none',
                     opacity: 0.5
                  }}
                  _hover={{
                     opacity: 0.9
                  }}
                  w="90%"
                  h="52px"
                  fontSize="xl"
                  fontWeight="bold"
               >
                  Devittear
               </Button>
            </Flex>
            <MiniProfile />
         </Flex>
      </Flex>
   )
}

export default AppBar
