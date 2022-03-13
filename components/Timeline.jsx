import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import useTimeline from 'hooks/useTimeline'
import Devit from './Devit'
import DevitInput from './DevitInput'

const Timeline = () => {
   const timeline = useTimeline()

   return (
      <Flex minH="200vh" direction="column" w="full">
         <DevitInput />
         <Box borderBottom="1px solid #38444d" />
         {timeline.length ? (
            timeline.map(devit => <Devit key={devit.id} devit={devit} />)
         ) : (
            <Center pt={10}>
               <Spinner color="leela.500" />
            </Center>
         )}
      </Flex>
   )
}

export default Timeline
