import { Flex, Box, Image } from '@chakra-ui/react'

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
   console.log({ devitResponses })
   return (
      <Flex direction="column" color="white">
         <Box>{img}</Box>
         <Box>{content}</Box>
         <Box>{createdAt}</Box>
         <Box>{devitResponses.length || 'xd'}</Box>
         <Image src={avatar} boxSize="48px" rounded="full" />
         <Box>{likesCount.length || 'xd'}</Box>
         <Box>{sharedCounts.length || 'xd'}</Box>
         <Box>{username}</Box>
      </Flex>
   )
}

export default Devit
