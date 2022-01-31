import { Button, Text } from '@chakra-ui/react'
import useSendDevit from 'hooks/useSendDevit'

const DevitSubmitBtn = () => {
   const { handleSubmit, isBtnDisable } = useSendDevit()
   return (
      <Button
         onClick={handleSubmit}
         h="36px"
         rounded="full"
         disabled={isBtnDisable}
         bg="leela.500"
         _disabled={{
            pointerEvents: 'none',
            opacity: 0.5
         }}
         _hover={{
            opacity: 0.9
         }}
      >
         <Text textColor="white">Devittear</Text>
      </Button>
   )
}

export default DevitSubmitBtn
