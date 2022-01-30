import { Box, Flex, Image } from '@chakra-ui/react'
import DevitHeading from './DevitHeading'
import DevitReactions from '../DevitReactions'
import DevitMedia from 'components/DevitMedia'

const Devit = ({ devit }) => {
   const {
      avatar,
      content,
      createdAt,
      devitResponses,
      img,
      likesCount,
      sharedCounts,
      username
   } = devit

   return (
      <Flex
         px="16px"
         py="12px"
         color="white"
         w="full"
         borderBottomWidth="1px"
         borderBottomColor="#38444d"
         cursor="pointer"
         transitionDuration="0.2s"
         _hover={{
            bg: 'rgba(255 255 255 / 3%)'
         }}
      >
         <Image mr="12px" boxSize="48px" rounded="full" src={avatar} />
         <Flex direction="column" w="full" fontSize="16px">
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
