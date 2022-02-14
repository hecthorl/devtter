import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import FollowBtn from 'components/Buttons/FollowBtn'

const FollowItem = () => (
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
         <FollowBtn />
      </Flex>
   </Flex>
)

export default FollowItem
