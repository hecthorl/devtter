import { Flex } from '@chakra-ui/react'
import useTimeline from 'hooks/useTimeline'
import Devit from './Devit'
import DevitInput from './DevitInput'

const Timeline = () => {
   const timeline = useTimeline()

   return (
      <Flex as="article" direction="column" w="full">
         <DevitInput />
         {timeline.length
            ? timeline.map(devit => <Devit key={devit.id} devit={devit} />)
            : 'esperando'}
      </Flex>
   )
}

export default Timeline
