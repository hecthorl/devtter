import BtnWrapper from './BtnWrapper'
import { Icon } from '@chakra-ui/react'
import { BsEnvelope } from 'react-icons/bs'

const MessageBtn = () => {
   return (
      <BtnWrapper>
         <Icon fontSize="lg" as={BsEnvelope} />
      </BtnWrapper>
   )
}

export default MessageBtn
