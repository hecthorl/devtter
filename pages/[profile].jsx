import { getSession } from 'next-auth/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import SeoHead from 'components/SeoHead'
import useUserAuth from 'hooks/useAuthUser'
import findUser from 'services/findUser'
import Layouts from 'components/Layouts'
import Letterhead from 'components/Letterhead'
import ProfileLayout from 'components/Layouts/ProfileLayout'
import NotProfileUserFound from 'components/NotProfileFound'
import GoBackBtn from 'components/Buttons/GoBackBtn'
import FollowBtn from 'components/Buttons/FollowBtn'

const Profile = ({ user }) => {
   const { userData } = useUserAuth()
   const title = user
      ? `${user.name} (@${user.nickname}) / Devtter`
      : 'Perfil / Devtter'
   return (
      <>
         <SeoHead title={title} />
         <Layouts>
            <Letterhead>
               <Box minW="56px" minH="32px">
                  <GoBackBtn />
               </Box>
               <Flex
                  flex={1}
                  h="full"
                  direction="column"
                  justify="center"
                  align="start"
                  lineHeight="18px"
               >
                  <Text fontSize="xl" fontWeight="bold" color="white">
                     {user?.name || 'Perfil'}
                  </Text>
                  <Text fontSize="sm" opacity={0.5} color="white">
                     {user && 'Total de Devits :v'}
                  </Text>
               </Flex>
               <Box minW="56px" minH="32px">
                  {userData?.nickname !== user?.nickname && <FollowBtn />}
               </Box>
            </Letterhead>
            {user ? <ProfileLayout user={user} /> : <NotProfileUserFound />}
         </Layouts>
      </>
   )
}

export default Profile
/**
 * @param {import('next').GetServerSidePropsContext} context
 */
export async function getServerSideProps(context) {
   const session = await getSession(context)
   const profile = context.query.profile
   const user = await findUser(`@${profile}`)

   return {
      props: { session, user }
   }
}
