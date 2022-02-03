import { Avatar, Box, Flex } from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'
import FollowBtn from 'components/Buttons/FollowBtn'
import MessageBtn from 'components/Buttons/MessageBtn'
import OptionsBtn from 'components/Buttons/OptionsBtn'
import EditProfileBtn from 'components/Buttons/EditProfileBtn'

const HeadingProfile = ({ user }) => {
   const { userData } = useUserAuth()

   return (
      <Flex justify="space-between">
         <Box
            bg="brand"
            rounded="full"
            mt="-15%"
            border="4px solid"
            borderColor="#15202b"
            // TODO: Poner mediaqueries a w/h
            w="141.5px"
            h="141.5px"
         >
            <Avatar w="full" h="full" name={user.name} src={user?.img} />
         </Box>
         {user.nickname === userData.nickname ? (
            <EditProfileBtn />
         ) : (
            <Flex gap={3}>
               <OptionsBtn />
               <MessageBtn />
               <FollowBtn />
            </Flex>
         )}
      </Flex>
   )
}

export default HeadingProfile
