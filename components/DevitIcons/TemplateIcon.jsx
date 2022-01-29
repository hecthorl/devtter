import { Icon } from '@chakra-ui/react'

const TemplateIcon = ({ children }) => {
   return (
      <Icon
         style={{
            fontSize: '1.6rem'
         }}
         aria-hidden
         viewBox="0 0 24 24"
      >
         <g>{children}</g>
      </Icon>
   )
}

export default TemplateIcon
