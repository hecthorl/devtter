import { Flex, Icon, Tooltip } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'

const OptionsBtn = () => {
   return (
      <Tooltip
         gutter={0}
         openDelay={600}
         label="Más opciones"
         aria-label="Más opciones"
         fontSize="12px"
      >
         <Flex
            role="group"
            as="button"
            align="center"
            justify="center"
            fontSize="lg"
            rounded="full"
            bg="rgba(29 155 240 / 0%)"
            w="34.75px"
            h="34.75px"
            _hover={{
               bg: 'rgba(29 155 240 / 10%)'
            }}
         >
            <Icon
               as={BsThreeDots}
               _groupHover={{
                  textColor: 'rgba(29 155 240 / 100%)'
               }}
            />
         </Flex>
      </Tooltip>
   )
}

export default OptionsBtn
