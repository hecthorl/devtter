import { Button, Icon } from '@chakra-ui/react'
import useWindowSize from 'hooks/useWindowSize'
import { GiFeather } from 'react-icons/gi'

const DevitearBtn = () => {
   const { width } = useWindowSize()
   return (
      <Button
         mt={2}
         rounded="full"
         bg="leela.500"
         _disabled={{
            pointerEvents: 'none',
            opacity: 0.5
         }}
         _hover={{
            opacity: 0.9
         }}
         w={{
            sm: '50px',
            md: '50px',
            lg: '50px',
            xl: '90%'
         }}
         h="50px"
         fontWeight="bold"
      >
         {width < 1282 ? <Icon fontSize="2xl" as={GiFeather} /> : 'Devittear'}
      </Button>
   )
}

export default DevitearBtn
