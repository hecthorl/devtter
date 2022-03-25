import Link from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/react'

/**
 * @param {object} props
 * @param {string} props.str
 * @param {any} props.children
 * @returns {JSX.Element}
 */
const CuratedLink = ({ children, str }) => {
   const hrefPassed = str.includes('@') ? `/${str.slice(1)}` : `/${str}`
   return (
      <Link passHref href={hrefPassed}>
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
