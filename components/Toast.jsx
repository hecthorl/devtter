import { Flex, Text, Link } from '@chakra-ui/react'

const Toast = () => (
   <Flex
      width="fit-content"
      p="12px 20px"
      columnGap="13px"
      textColor="white"
      bg="leela.500"
      rounded="md"
   >
      <Text>Tu devit se envió.</Text>
      <Link fontWeight="bold" href="/home">
         Ver
      </Link>
   </Flex>
)

export default Toast
