import { MdOutlineNotificationAdd } from 'react-icons/md'
import { Icon } from '@chakra-ui/react'
import BtnWrapper from './BtnWrapper'

const BellBtn = () => {
   return (
      <BtnWrapper>
         <Icon fontSize="xl" as={MdOutlineNotificationAdd} />
      </BtnWrapper>
   )
}

export default BellBtn
