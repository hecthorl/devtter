import { MdOutlineNotificationAdd } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import BtnWrapper from './BtnWrapper'

const BellBtn = () => (
   <BtnWrapper>
      <Icon fontSize="xl" as={MdOutlineNotificationAdd} />
   </BtnWrapper>
)

export default BellBtn
