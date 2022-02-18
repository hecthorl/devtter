import { Box, Icon, Tooltip } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'

const OptionsBtn = () => (
   <Box
      onClick={e => e.stopPropagation()}
      lineHeight="17px"
      role="group"
      as="div"
      h="18px"
      w="18px"
      fontSize="lg"
      pos="relative"
      cursor="pointer"
   >
      <Icon
         as={BsThreeDots}
         _groupHover={{
            textColor: 'rgba(29 155 240 / 100%)'
         }}
      />
      <Tooltip
         gutter={0}
         openDelay={600}
         label="Más opciones"
         aria-label="Más opciones"
         fontSize="12px"
      >
         <Box
            zIndex={0}
            rounded="full"
            bg="rgba(29 155 240 / 0%)"
            w="34.75px"
            h="34.75px"
            pos="absolute"
            _hover={{
               bg: 'rgba(29 155 240 / 10%)'
            }}
            transform="translate(-23%, -81%)"
         />
      </Tooltip>
   </Box>
)

export default OptionsBtn
