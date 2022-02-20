import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

const CuratedLink = ({ children, str }) => {
   return (
      <Link passHref href={`/${str.slice(1)}`}>
         <ChakraLink
            mr="12px"
            h="fit-content"
            onClick={e => e.stopPropagation()}
         >
            {children}
         </ChakraLink>
      </Link>
   )
}

export default CuratedLink
