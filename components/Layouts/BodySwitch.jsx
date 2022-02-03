import { Route, Switch } from 'wouter'
import { Box } from '@chakra-ui/react'
import Timeline from 'components/Timeline'
import SingleDevit from 'components/SingleDevit'

const BodySwitch = () => {
   return (
      <Box w="full">
         <Switch>
            <Route path="/home" component={Timeline} />
            <Route path="/status/:devitId" component={SingleDevit} />
         </Switch>
      </Box>
   )
}

export default BodySwitch

/**
 * Porque uso wouter en vez del useRouter de NextJS?
 * - Es mucho más rápido
 * Para que funcione solo debe renderizarse en el Client-side
 * por ello en page/home.js se usa dynamic para mostrar este componente.
 */
