import { Box, Flex, Text } from '@chakra-ui/react'

const ProfileNav = () => {
   return (
      <Flex as="nav" borderBottom="1px solid #38444d" mt={1}>
         <Acc title="Devits" />
         <Acc title="Devits y respuestas" />
         <Acc title="Fotos y videos" />
         <Acc title="Me gusta" />
      </Flex>
   )
}

export default ProfileNav

function Acc({ title }) {
   return (
      <Flex
         transition="background-color 0.2s ease"
         _hover={{ bg: 'rgba(255 255 255 / 10%)' }}
         as="button"
         direction="column"
         align="center"
         flex={1}
      >
         <Box textAlign="center" w="fit-content">
            <Text textColor="white" py="16px">
               {title}
            </Text>
            <Box minW="56px" h="4px" rounded="full" w="full" bg="leela.500" />
         </Box>
      </Flex>
   )
}
