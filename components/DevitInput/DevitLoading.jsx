import { Flex, Spinner } from '@chakra-ui/react'
import { UPLOADING_STATES } from 'helpers/constants'
import useZtndStore from 'ztndStore'
const { UPLOADING } = UPLOADING_STATES

const DevitLoading = () => {
   const devitStates = useZtndStore(state => state.devitStates)
   if (devitStates !== UPLOADING) return null

   return (
      <Flex
         top={0}
         right={0}
         left={0}
         bottom={0}
         w="full"
         h="full"
         bg="rgba(0 0 0 / 30%)"
         justify="center"
         align="center"
         pos="absolute"
         backdropFilter="blur(10px)"
      >
         <Spinner color="red.500" />
      </Flex>
   )
}

export default DevitLoading
