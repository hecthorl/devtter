import { Flex, Icon, Tooltip } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'

const GoBackBtn = () => {
   return (
      <Tooltip
         gutter={0}
         openDelay={600}
         fontSize="12px"
         label="Atrás"
         aria-label="Atrás"
      >
         <Flex
            bg="transparent"
            justify="center"
            align="center"
            w="36px"
            h="36px"
            rounded="full"
            textColor="white"
            fontSize="xl"
            _hover={{
               bg: 'rgba(239 243 244 / 10%)'
            }}
         >
            <Icon as={FiArrowLeft} />
         </Flex>
      </Tooltip>
   )
}

export default GoBackBtn
