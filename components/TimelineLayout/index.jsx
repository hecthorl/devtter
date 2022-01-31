import { VStack } from '@chakra-ui/react'
import BodySwitch from './BodySwitch'
import Letterhead from './Letterhead'

const TimelineLayout = () => {
   return (
      <VStack
         borderLeft="1px solid #38444d"
         borderRight="1px solid #38444d"
         // w="full"
         w="600px"
      >
         <Letterhead />
         <BodySwitch />
      </VStack>
   )
}

export default TimelineLayout
