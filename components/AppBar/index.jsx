import { Box, Flex, VStack } from '@chakra-ui/react'
import { ICONS } from 'helpers/iconsArray'
import AppBarItem from './AppBarItem'

const AppBar = () => {
   return (
      <Flex
         direction="column"
         as="header"
         maxW="275px"
         w="full"
         textColor="white"
      >
         <Box position="fixed" top={0}>
            <VStack spacing={0} align="flex-start">
               {ICONS.map(({ href, icon, title }) => (
                  <AppBarItem
                     key={title}
                     href={href}
                     icon={icon}
                     title={title}
                  />
               ))}
            </VStack>
            <div>mini-profile</div>
         </Box>
      </Flex>
   )
}

export default AppBar
