import { Box, Button, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import Layout from 'components/Layout'
import Letterhead from 'components/Letterhead'
import { getSession } from 'next-auth/react'
import Head from 'next/head'

const Profile = () => {
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
                  <Box h="200px" bg="leela.500">
                     Para la Imagen
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
                        ></Box>
                        <Flex>
                           <Button bg="leela.500" rounded="full">
                              config
                           </Button>
                        </Flex>
                     </Flex>
                     <Box>
                        <Text
                           textColor="white"
                           fontSize="20px"
                           fontWeight="bold"
                        >
                           Nombre de Usuario
                        </Text>
                        <Text opacity={0.5}>@NombreConArroba</Text>
                     </Box>
                     <Box textColor="white">
                        Desde Alemania para América Latina. Todo lo que necesita
                        saber del mundo. Aquí y ahora. Señal en vivo 24/7
                        http://youtube.com/dwespanol
                     </Box>
                     <Flex gap={5}>
                        <Flex gap={2} align="center">
                           <Icon />
                           <Text>Berlin, Germany</Text>
                        </Flex>
                        <Flex gap={2} align="center">
                           <Icon />
                           <Text>DW.com</Text>
                        </Flex>
                        <Flex gap={2} align="center">
                           <Icon />
                           <Text>Se unió en mayo de 2007</Text>
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

   return {
      props: { session }
   }
}
