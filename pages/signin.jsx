import SeoHead from 'components/SeoHead'
import { getProviders, signIn, getSession } from 'next-auth/react'
import { Button, CloseButton, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'

const SignIn = ({ providers }) => (
   <>
      <SeoHead title="Devtter App / SignIn" />
      <Flex h="100vh" w="full" bg="#242d34" align="center" justify="center">
         <Flex
            w="600px"
            h="650px"
            bg="black"
            align="center"
            rounded="xl"
            position="relative"
            direction="column"
            pt={3}
         >
            <CloseButton
               rounded="full"
               top="10px"
               left="10px"
               bg="inherit"
               textColor="white"
               position="absolute"
               w="40px"
               h="40px"
               _hover={{
                  bg: 'rgba(239, 243, 244, 0.1)'
               }}
            />
            <Image w={10} src="/faviconLogo.svg" />
            <Flex
               flex={1}
               direction="column"
               align="center"
               justify="center"
               gap="4rem"
            >
               <Text fontSize="4xl" color="white">
                  Inicia sesión en Devtter
               </Text>
               {Object.values(providers).map(provider => (
                  <Button
                     key={provider.name}
                     rounded="full"
                     width="full"
                     maxW={300}
                     border="1px"
                     borderColor="white"
                     textColor="white"
                     bg="black"
                     _hover={{
                        bg: 'white',
                        textColor: 'black'
                     }}
                     onClick={() =>
                        signIn(provider.id, {
                           redirect: true,
                           callbackUrl: '/home'
                        })
                     }
                  >
                     <Text>Inicia sesión con {provider.name}</Text>
                     <Icon as={GoMarkGithub} w={6} h={6} marginLeft={2} />
                  </Button>
               ))}
            </Flex>
         </Flex>
      </Flex>
   </>
)

export default SignIn

export async function getServerSideProps(context) {
   const session = await getSession(context)
   const providers = await getProviders()
   const authObjt = {
      redirect: {
         destination: '/home',
         permanent: false
      }
   }
   const unAuthObjt = { props: { providers } }

   return session ? authObjt : unAuthObjt
}
