import { Button, Icon, Text } from '@chakra-ui/react'
import { GiFeather } from 'react-icons/gi'

const DevitearBtn = () => (
   <Button
      mt={2}
      rounded="full"
      bg="leela.500"
      _disabled={{
         pointerEvents: 'none',
         opacity: 0.5
      }}
      _hover={{ opacity: 0.9 }}
      w={{
         base: '50px',
         xl: '90%'
      }}
      h="50px"
      fontWeight="bold"
   >
      <Text
         display={{
            base: 'none',
            xl: 'block'
         }}
      >
         Devittear
      </Text>
      <Icon
         display={{
            base: 'inline-block',
            xl: 'none'
         }}
         fontSize="2xl"
         as={GiFeather}
      />
   </Button>
)

export default DevitearBtn
