import { Avatar, Box, Flex, Link as ChakraLink } from '@chakra-ui/react'
import DevitHeading from './DevitHeading'
import DevitReactions from '../DevitReactions'
import DevitMedia from 'components/DevitMedia'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useUserAuth from 'hooks/useAuthUser'

const Devit = ({ devit }) => {
   const { push } = useRouter()
   const { userData } = useUserAuth()
   const {
      avatar,
      content,
      createdAt,
      devitResponses,
      img,
      likesCount,
      sharedCounts,
      username,
      id: devitId
   } = devit

   return (
      <Flex
         onClick={() => {
            push(`/home?devitId=${devitId}`, `/status/${devitId}`, {
               shallow: true
            })
         }}
         as="article"
         p="12px 16px"
         color="white"
         borderBottom="1px solid #38444d"
         transitionDuration="0.2s"
         _hover={{
            bg: 'rgba(255 255 255 / 3%)'
         }}
         cursor="pointer"
      >
         <Link passHref href={`/${userData.nickname}`}>
            <ChakraLink
               mr="12px"
               h="fit-content"
               onClick={e => e.stopPropagation()}
            >
               <Avatar src={avatar} name={userData.name} />
            </ChakraLink>
         </Link>
         <Flex minW={0} direction="column" w="full" fontSize="16px">
            <DevitHeading username={username} createdAt={createdAt} />
            <Box as="p">{content}</Box>
            <Flex>
               <DevitMedia img={img} id={1} likesCount={likesCount} />
            </Flex>
            <DevitReactions
               devitResponses={devitResponses}
               likesCount={likesCount}
               sharedCounts={sharedCounts}
            />
         </Flex>
      </Flex>
   )
}

export default Devit
