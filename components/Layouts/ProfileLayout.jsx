import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import BodyInfo from 'components/BodyInfo'
import HeadingProfile from 'components/HeadingProfile'
import ProfileNav from 'components/ProfileNav'

const ProfileLayout = ({ user }) => {
   const imgBanner =
      user.preferences.img_banner ||
      'https://pbs.twimg.com/profile_banners/333176262/1628715538/1500x500'
   return (
      <Box textColor="#8899a6" w="full" mt="0 !important">
         <Flex direction="column">
            <Box
               // Por alguna razón, no funciona el backgroundSize="cover"
               // Solución: shorthand
               h="200px"
               bg={`#3d5466 url(${imgBanner}) center/cover no-repeat`}
            >
               <Image
                  opacity="0"
                  src="https://pbs.twimg.com/profile_banners/333176262/1628715538/1500x500"
               />
            </Box>
            <VStack
               fontSize="15px"
               spacing="12px"
               align="stretch"
               p="12px 16px"
            >
               <HeadingProfile user={user} />
               <Box>
                  <Text textColor="white" fontSize="20px" fontWeight="bold">
                     {user.name}
                  </Text>
                  <Text opacity={0.8}>@{user.nickname}</Text>
               </Box>
               <Box textColor="white">{user.preferences.bio}</Box>
               <BodyInfo user={user} />
               <Box>
                  <Text>
                     <Text mr={2} fontWeight="bold" color="white" as="span">
                        149
                     </Text>
                     Siguiendo
                     <Text mx={2} fontWeight="bold" color="white" as="span">
                        1,1 M
                     </Text>
                     Seguidores
                  </Text>
               </Box>
            </VStack>
         </Flex>
         <ProfileNav />
         <Flex justify="center">
            <Image
               src="https://pbs.twimg.com/media/EsxacSLXcAYGN97?format=jpg&name=large"
               p={4}
            />
         </Flex>
      </Box>
   )
}

export default ProfileLayout
