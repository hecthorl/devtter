import { getSession } from 'next-auth/react'
import { Box, Text } from '@chakra-ui/react'
import SeoHead from 'components/SeoHead'
import Layouts from 'components/Layouts'
import SingleDevit from 'components/SingleDevit'
import Letterhead from 'components/Letterhead'
import GoBackBtn from 'components/Buttons/GoBackBtn'
import getDevit from 'services/getDevit'

const StatusPage = ({ devit }) => {
   const title = devit
      ? `${devit.userInfo.name} en Devtter: ${devit.content}`
      : 'No se encontró la página / Devtter'
   return (
      <>
         <SeoHead title={title} />
         <Layouts>
            <Letterhead>
               <Box minW="56px" minH="32px">
                  <GoBackBtn />
               </Box>
               <Text flex={1} fontSize="xl" fontWeight="bold" color="white">
                  Devit
               </Text>
            </Letterhead>
            <Box w="full" h="12px" />
            <SingleDevit />
         </Layouts>
      </>
   )
}

export default StatusPage

/**
 * @param {import('next').GetServerSidePropsContext} context
 */
export async function getServerSideProps(context) {
   const session = await getSession(context)

   try {
      const devit = await getDevit(context.query.devitId)
      return { props: { session, devit } }
   } catch (error) {
      return { props: { session, devit: null } }
   }
}
