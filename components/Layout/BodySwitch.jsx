import { Box } from '@chakra-ui/react'
import Timeline from 'components/Timeline'
import SingleDevit from 'components/SingleDevit'
import { Route, Switch } from 'wouter'

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
