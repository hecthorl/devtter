import { Icon } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import BtnWrapper from './BtnWrapper'
const OptionsBtn = () => {
   return (
      <BtnWrapper>
         <Icon fontSize="xl" as={BsThreeDots} />
      </BtnWrapper>
   )
}

export default OptionsBtn
