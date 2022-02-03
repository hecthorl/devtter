import { chakra } from '@chakra-ui/react'

const BtnWrapper = ({ children, fn }) => {
   return (
      <chakra.button
         textColor="white"
         display="flex"
         justifyContent="center"
         alignItems="center"
         minW="36px"
         maxH="36px"
         rounded="full"
         border="1px solid #536471"
         transitionDuration="0.2s"
         _hover={{
            bg: 'rgba(239 243 244 / 10%)'
         }}
      >
         {children}
      </chakra.button>
   )
}

export default BtnWrapper
