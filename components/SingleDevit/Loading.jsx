const { Spinner, Center } = require('@chakra-ui/react')

const Loading = () => {
   return (
      <Center w="full">
         <Spinner color="leela.500" />
      </Center>
   )
}

export default Loading
