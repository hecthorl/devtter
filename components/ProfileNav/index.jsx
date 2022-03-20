import { Box, Flex, Text } from '@chakra-ui/react'

const ProfileNav = () => {
   return (
      <Box overflow="hidden">
         <Flex
            scrollSnapType="x mandatory"
            as="nav"
            borderBottom="1px solid #38444d"
            mt={1}
            overflowY="hidden"
            overflowX="auto"
         >
            <Acc title="Devits" />
            <Acc title="Devits y respuestas" />
            <Acc title="Fotos y videos" />
            <Acc title="Me gusta" />
         </Flex>
      </Box>
   )
}

export default ProfileNav

function Acc({ title }) {
   return (
      <Flex
         scrollSnapAlign="start"
         whiteSpace="nowrap"
         transition="background-color 0.2s ease"
         _hover={{ bg: 'rgba(255 255 255 / 10%)' }}
         as="div"
         direction="column"
         align="center"
         flex={1}
      >
         <Box textAlign="center" p="0 16px">
            <Text p="16px 0">{title}</Text>
            <Box minW="56px" h="4px" rounded="full" w="full" bg="leela.500" />
         </Box>
      </Flex>
   )
}

/**
  <Box textAlign="center" w="fit-content" px="16px">
            <Text textColor="white" py="16px">
               {title}
            </Text>
            <Box minW="56px" h="4px" rounded="full" w="full" bg="leela.500" />
         </Box>
 */
