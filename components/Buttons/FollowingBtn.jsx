import { Button } from '@chakra-ui/react'
import useZtndStore from 'ztndStore'

const FollowingBtn = () => {
   const show = useZtndStore(state => state.show)
   console.log({ show })
   if (show) return null
   return (
      <Button
         rounded="full"
         border="1px solid #536471"
         bg="transparent"
         textColor="white"
         _before={{
            content: "'Siguiendo'"
         }}
         _hover={{
            borderColor: 'rgb(103, 7, 15)',
            color: 'rgb(244, 33, 46)',
            _before: {
               content: "'Dejar de seguir'"
            }
         }}
      />
   )
}

export default FollowingBtn
