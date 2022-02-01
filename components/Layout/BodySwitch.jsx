import { Box } from '@chakra-ui/react'
import Error from 'components/Error'
import Timeline from 'components/Timeline'
import SingleDevit from 'components/SingleDevit'
import { useRouter } from 'next/router'

const COMPONENTS = {
   home: <Timeline />,
   status: <SingleDevit />
}
const BodySwitch = () => {
   const router = useRouter()

   const path = aspath => {
      if (aspath.includes('home')) return 'home'
      if (aspath.includes('status')) return 'status'
   }
   return <Box w="full">{COMPONENTS[path(router.asPath)] || <Error />}</Box>
}

export default BodySwitch
