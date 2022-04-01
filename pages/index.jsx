import { getSession } from 'next-auth/react'
import { Button, Flex, Icon, Text, VStack } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'
import SeoHead from 'components/SeoHead'
import useUserAuth from 'hooks/useAuthUser'
import BrandIcon from 'components/DevitIcons/BrandIcon'

const Index = () => {
   const { signIn } = useUserAuth()

   return (
      <>
         <SeoHead title="Devtter" />
         <Flex direction={{ md: 'row', base: 'column-reverse' }} minH="100vh">
            <Flex
               bg="#006fd6"
               justify="center"
               align="center"
               backgroundPosition="center"
               backgroundRepeat="no-repeat"
               flex={1}
               backgroundImage="url('/devtterWall.png')"
            >
               <Icon
                  as={BrandIcon}
                  w="80%"
                  h="80%"
                  p="32px"
                  textColor="white"
               />
            </Flex>
            <Flex flex={1} p="16px" align="center" bg="black">
               <VStack
                  spacing={10}
                  p="20px"
                  w="full"
                  align="flex-start"
                  textColor="#d9d9d9"
               >
                  <Icon as={BrandIcon} fontSize="5xl" />
                  <Text as="span" fontSize="7xl" fontWeight="bold">
                     Lo que está pasando ahora
                  </Text>
                  <Text as="span" fontSize="3xl" fontWeight="bold">
                     Únete a Devtter hoy mismo.
                  </Text>
                  <Button
                     rounded="full"
                     width="full"
                     maxW={300}
                     border="1px"
                     borderColor="white"
                     textColor="white"
                     bg="black"
                     _hover={{ bg: 'white', textColor: 'black' }}
                     onClick={() => signIn()}
                  >
                     <Icon as={GoMarkGithub} w={6} h={6} marginRight={2} />
                     Ingresa
                  </Button>
               </VStack>
            </Flex>
         </Flex>
      </>
   )
}

export async function getServerSideProps(context) {
   const session = await getSession(context)

   const authenticated = {
      redirect: {
         destination: '/home',
         permanent: false
      }
   }
   const unAuth = { props: {} }

   return session ? authenticated : unAuth
}

export default Index
