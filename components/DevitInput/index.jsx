import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineFileGif } from 'react-icons/ai'
import {
   Avatar,
   Box,
   Button,
   Flex,
   HStack,
   Icon,
   Link as ChakraLink,
   Text
} from '@chakra-ui/react'
import useUserAuth from 'hooks/useAuthUser'
import DevitInputTextarea from './DevitInputTextarea'
import DevitLoading from './DevitLoading'
import useSendDevit from 'hooks/useSendDevit'
import usePreview from 'hooks/usePreview'
import OnImage from './OnImage'
import ImgUploadBtn from './ImgUploadBtn'
import { useRouter } from 'next/router'

const DevitInput = () => {
   const { push, asPath } = useRouter()
   const { imageDrop, preview, setPreview } = usePreview()
   const [textareaMsg, setTextareaMsg] = useState('')
   const { userData } = useUserAuth()
   const { handleSubmit, isBtnDisable } = useSendDevit(
      textareaMsg,
      setTextareaMsg
   )

   return (
      <Box
         display={['none', 'flex']}
         w="full"
         px="16px"
         pb="12px"
         pos="relative"
         h="full"
      >
         <Box>
            <Link passHref href={`/${userData?.nickname.slice(1)}`}>
               <ChakraLink shadow="unset !important">
                  <Avatar
                     mr="12px"
                     src={userData?.image}
                     name={userData?.name}
                  />
               </ChakraLink>
            </Link>
         </Box>
         <Flex direction="column" width="full" height="full">
            <Box w="full">
               <DevitInputTextarea
                  value={textareaMsg}
                  onChange={e => setTextareaMsg(e.target.value)}
                  onDrop={imageDrop}
               />
               <OnImage preview={preview} setPreview={setPreview} />
            </Box>
            <Box w="full" borderBottom="1px solid #38444d" my={1} />
            <Flex pt="12px" justify="space-between" align="center" w="full">
               <HStack spacing={6}>
                  <ImgUploadBtn onChange={imageDrop} />
                  <Box
                     onClick={() =>
                        push(`${asPath}?gif=true`, asPath, { shallow: true })
                     }
                     as="button"
                     color="leela.500"
                     fontSize="xl"
                     shadow="unset !important"
                  >
                     <Icon as={AiOutlineFileGif} />
                  </Box>

                  <Box>🐱‍💻</Box>
                  <Box>🐱‍🐉</Box>
                  <Box>🐱‍👓</Box>
               </HStack>
               <Button
                  onClick={handleSubmit}
                  h="36px"
                  rounded="full"
                  disabled={isBtnDisable}
                  bg="leela.500"
                  _disabled={{ pointerEvents: 'none', opacity: 0.5 }}
                  _hover={{ opacity: 0.9 }}
               >
                  <Text textColor="white">Devittear</Text>
               </Button>
            </Flex>
         </Flex>
         <DevitLoading />
      </Box>
   )
}

export default DevitInput
