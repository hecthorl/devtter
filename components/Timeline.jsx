import { Center, Flex, Spinner } from '@chakra-ui/react'
import SeoHead from './SeoHead'
import useTimeline from 'hooks/useTimeline'
import Devit from './Devit'
import DevitInput from './DevitInput'

const Timeline = () => {
   const timeline = useTimeline()

   return (
      <>
         <SeoHead title="Inicio / Devtter" />
         <Flex minH="200vh" direction="column" w="full">
            <DevitInput />
            {timeline.length ? (
               timeline.map(devit => <Devit key={devit.id} devit={devit} />)
            ) : (
               <Center pt={10}>
                  <Spinner color="leela.500" />
               </Center>
            )}
         </Flex>
      </>
   )
}

export default Timeline
