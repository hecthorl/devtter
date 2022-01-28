import { Flex } from '@chakra-ui/react'
import useTimeline from 'hooks/useTimeline'
import Devit from './Devit'

const Timeline = () => {
   const timeline = useTimeline()

   return (
      <Flex
         as="article"
         borderLeftColor="#38444d"
         borderRightColor="#38444d"
         borderRightWidth="1px"
         borderLeftWidth="1px"
         direction="column"
      >
         {timeline.length
            ? timeline.map(devit => <Devit key={devit.id} devit={devit} />)
            : 'esperando'}
      </Flex>
   )
}

export default Timeline
