import { Button, Icon, Text } from '@chakra-ui/react'
// import useWindowSize from 'hooks/useWindowSize'
import { GiFeather } from 'react-icons/gi'

const DevitearBtn = () => {
   // const { width } = useWindowSize()
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
            base: '50px',
            xl: '90%'
         }}
         h="50px"
         fontWeight="bold"
      >
         {/* {width < 1282 ? <Icon fontSize="2xl" as={GiFeather} /> : 'Devittear'} */}
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
}

export default DevitearBtn
