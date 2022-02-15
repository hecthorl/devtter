import { getSession } from 'next-auth/react'
import { Box, Text } from '@chakra-ui/react'
import Layouts from 'components/Layouts'
import SingleDevit from 'components/SingleDevit'
import Letterhead from 'components/Letterhead'
import GoBackBtn from 'components/Buttons/GoBackBtn'

const StatusPage = () => {
   return (
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
   )
}

export default StatusPage

export async function getServerSideProps(context) {
   const session = await getSession(context)
   return {
      props: { session }
   }
}
