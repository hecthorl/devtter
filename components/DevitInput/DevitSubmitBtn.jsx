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
         bg="orange.700"
      >
         <Text textColor="white">Devittear</Text>
      </Button>
   )
}

export default DevitSubmitBtn
