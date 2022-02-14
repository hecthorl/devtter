import { Button } from '@chakra-ui/react'
import FollowingBtn from './FollowingBtn'

const FollowBtn = ({ isFollowIt }) =>
   isFollowIt ? (
      <FollowingBtn />
   ) : (
      <Button
         textColor="#0f1419"
         minW="77px"
         h="36px"
         rounded="full"
         _hover={{
            opacity: '0.8'
         }}
      >
         Seguir
      </Button>
   )

export default FollowBtn
