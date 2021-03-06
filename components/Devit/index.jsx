import { useRouter } from 'next/router'
import { Avatar, Box, Flex } from '@chakra-ui/react'
import DevitHeading from './DevitHeading'
import DevitReactions from '../DevitReactions'
import DevitMedia from 'components/DevitMedia'
import CuratedLink from 'components/CuratedLink'

const Devit = ({ devit }) => {
   const { push } = useRouter()

   const {
      userInfo,
      content,
      createdAt,
      devitResponses,
      img,
      likesCount,
      sharedCounts,
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
         _hover={{ bg: 'rgba(255 255 255 / 3%)' }}
         cursor="pointer"
      >
         <CuratedLink str={userInfo.nickname}>
            <Avatar src={userInfo.avatar} name={userInfo.name} />
         </CuratedLink>
         <Flex minW={0} direction="column" w="full" fontSize="16px">
            <DevitHeading
               nickname={userInfo.nickname}
               username={userInfo.name}
               createdAt={createdAt}
            />
            <Box as="p">{content}</Box>
            <DevitMedia img={img} id={1} likesCount={likesCount} />
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
