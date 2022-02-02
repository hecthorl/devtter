import Head from 'next/head'
import { getSession } from 'next-auth/react'
import {
   Avatar,
   Box,
   Button,
   Flex,
   Icon,
   Image,
   Text,
   VStack
} from '@chakra-ui/react'
import Layout from 'components/Layout'
import Letterhead from 'components/Letterhead'
import useUserAuth from 'hooks/useAuthUser'
import findUser from 'services/findUser'

const Profile = ({ user }) => {
   /**
    * No usar destructuring para el user y usar condicional:
    *    if (user === currentUserSession)
    *    if (user === otroUsario)
    *    if (noExisteUsuario)
    */
   const { userData } = useUserAuth()
   return (
      <>
         <Head>
            <title>Profile Page</title>
            <link rel="icon" href="/faviconLogo.ico" />
         </Head>
         <Layout>
            <Letterhead />
            <Box textColor="#8899a6" w="full">
               <Flex direction="column">
                  <Box h="200px" bg="#3d5466">
                     <Image src="https://pbs.twimg.com/profile_banners/333176262/1628715538/1500x500" />
                  </Box>
                  <VStack
                     fontSize="15px"
                     spacing="12px"
                     align="stretch"
                     p="12px 16px"
                  >
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
                           <Avatar
                              w="full"
                              h="full"
                              name={user.name}
                              src={user?.img}
                           />
                        </Box>
                        <Flex>
                           <Button
                              textColor="white"
                              maxH="36px"
                              fontWeight="bold"
                              bg="transparent"
                              border="1px solid #536471"
                              rounded="full"
                              _hover={{
                                 bg: 'rgba(239 243 244 / 10%)'
                              }}
                           >
                              <Text>
                                 {user.nickname === userData.nickname
                                    ? 'Editar perfil'
                                    : 'Seguir'}
                              </Text>
                           </Button>
                        </Flex>
                     </Flex>
                     <Box>
                        <Text
                           textColor="white"
                           fontSize="20px"
                           fontWeight="bold"
                        >
                           {user.name}
                        </Text>
                        <Text opacity={0.5}>@{user.nickname}</Text>
                     </Box>
                     <Box textColor="white">{user.preferences.bio}</Box>
                     <Flex gap={5}>
                        <Flex gap={2} align="center">
                           {user.preferences.location && (
                              <>
                                 <Icon />
                                 <Text>{user.preferences.location}</Text>
                              </>
                           )}
                        </Flex>
                        <Flex gap={2} align="center">
                           <Icon />
                           <Text>{user.github_url}</Text>
                        </Flex>
                        <Flex gap={2} align="center">
                           <Icon />
                           <Text as="span">
                              Se unió el
                              <Text as="time" ml={1}>
                                 {new Intl.DateTimeFormat('es-ES', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                 }).format(user.created_at)}
                              </Text>
                           </Text>
                        </Flex>
                     </Flex>
                     <Box>149 Siguiendo 1,1 M Seguidores</Box>
                  </VStack>
               </Flex>
               <Flex>Navegación</Flex>
               <Flex>Caja para el timeline</Flex>
            </Box>
         </Layout>
      </>
   )
}

export default Profile

export async function getServerSideProps(context) {
   const session = await getSession(context)
   const nickname = context.query.profile
   const user = await findUser(nickname)

   return {
      props: { session, user }
   }
}
