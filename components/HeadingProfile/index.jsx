import { Avatar, Box, Flex } from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'
import FollowBtn from 'components/Buttons/FollowBtn'
import MessageBtn from 'components/Buttons/MessageBtn'
import EditProfileBtn from 'components/Buttons/EditProfileBtn'

const HeadingProfile = ({ user }) => {
   const { userData } = useUserAuth()
   const ress = { base: '75.5px', sm: '141.5px', md: '149.5px' }
   return (
      <Flex justify="space-between">
         <Box
            bg="brand"
            rounded="full"
            mt="-15%"
            border="4px solid"
            borderColor="#15202b"
            w={ress}
            h={ress}
         >
            <Avatar w="full" h="full" name={user.name} src={user?.img} />
         </Box>
         {!userData ? (
            <FollowBtn />
         ) : user.nickname === userData?.nickname ? (
            <EditProfileBtn />
         ) : (
            <>
               <MessageBtn />
               <FollowBtn />
            </>
         )}
      </Flex>
   )
}

export default HeadingProfile

/**
 user.nickname === userData?.nickname ? (
            <EditProfileBtn />
         ) : (
            <Flex gap={3}>
               {userData ? (
                  <>
                     <MessageBtn />
                     <FollowBtn />
                  </>
               ) : (
                  <FollowBtn />
               )}
            </Flex>
         )
 */
