import { Route, Switch } from 'wouter'
import { Box, Text } from '@chakra-ui/react'
import Timeline from 'components/Timeline'
import SingleDevit from 'components/SingleDevit'
import Letterhead from 'components/Letterhead'
import GoBackBtn from 'components/Buttons/GoBackBtn'

const BodySwitch = () => {
   return (
      <Box w="full">
         <Switch>
            <Route path="/home">
               <Letterhead>
                  <Box
                     fontWeight="bold"
                     fontSize="xl"
                     textColor="white"
                     flex={1}
                  >
                     Inicio
                  </Box>
                  <Box fontSize="lg">✨</Box>
               </Letterhead>
               <Timeline />
            </Route>
            <Route path="/status/:devitId">
               <Letterhead>
                  <Box minW="56px" minH="32px">
                     <GoBackBtn />
                  </Box>
                  <Text flex={1} fontSize="xl" fontWeight="bold" color="white">
                     Devit
                  </Text>
               </Letterhead>
               <Box w="full" h="12px" />
               <SingleDevit />
            </Route>
         </Switch>
      </Box>
   )
}

export default BodySwitch

/**
 * Porque uso wouter en vez del useRouter de NextJS?
 * - Es mucho más rápido
 * Para que funcione, solo debe renderizarse en el Client-side
 * por ello en pages/home se usa dynamic para mostrar este componente.
 */
