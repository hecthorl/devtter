import { Box, Text } from '@chakra-ui/react'
import SingleDevit from 'components/SingleDevit'
// import { useRouter } from 'next/router'

const StatusPage = () => {
   // const router = useRouter()
   // console.log(router)
   return (
      <Box w="full">
         <Text fontSize="7xl">Sou Paulo</Text>
         <SingleDevit />
      </Box>
   )
}

export default StatusPage

// export async function getServerSideProps() {
//    //
// }
