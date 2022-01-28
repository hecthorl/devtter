import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'

const FollowItem = () => {
   return (
      <Flex py="12px" px="16px" align="center">
         <Avatar
            mr="15px"
            src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
            name="ReactJS"
         />
         <Flex flex={1} align="center" justify="space-between">
            <Box color="white">
               <Text>ReactJS</Text>
               <Text>@ReactJS</Text>
            </Box>
            <Button minW="77px" h="32px" rounded="full">
               Seguir
            </Button>
         </Flex>
      </Flex>
   )
}

export default FollowItem
