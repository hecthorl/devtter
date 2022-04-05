import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Box, CloseButton, Flex, Input, Text } from '@chakra-ui/react'
import randomBG from 'helpers/randomBG'
import getGifsTrends from 'services/getGifsTrends'
import Error from './Error'
import SearchingResults from './SearchingResults'

export default function TrendingGifs() {
   const { data: gifs, error } = useSWR(43, getGifsTrends)
   const [searchTerm, setSearchTerm] = useState('')
   const { push, query, asPath } = useRouter()
   const [list, setList] = useState([])
   const item = Object.keys(query)

   const handleChange = newValue => {
      setSearchTerm(
         typeof newValue === 'string' ? newValue : newValue.target.value
      )
   }

   useEffect(() => {
      if (item.length !== 0) {
         setList([...list, item[0]])
      }
      return () => setList([])
   }, [query])

   if (!gifs) return <Box>LOADING...</Box>
   if (error) return <Error />
   return (
      <Box w="full" overflowY="scroll" h="full">
         <Flex
            pos="sticky"
            top={0}
            zIndex={3}
            backdropFilter="blur(12px)"
            backgroundColor="#15202bbf"
            h="53px"
            px="16px"
            justifyContent="center"
            alignItems="center"
         >
            <Box minW="56px">
               <CloseButton
                  onClick={() => {
                     push(asPath, null, { shallow: true })
                  }}
                  rounded="full"
                  _hover={{
                     backgroundColor: 'rgba(255 255 255 / 10%)'
                  }}
               />
            </Box>
            <Input
               value={searchTerm.trim()}
               onChange={handleChange}
               borderColor="#425364"
               rounded="full"
               _hover={{ borderColor: '#425364' }}
            />
         </Flex>
         {!searchTerm.trim() ? (
            <Box
               display="grid"
               gridTemplateColumns="1fr 1fr"
               gridTemplateRows="repeat(22, 150px)"
               gap={1}
            >
               {gifs.map(({ displayName, img, id }, i) => (
                  <Box
                     cursor="pointer"
                     onClick={() => handleChange(displayName)}
                     gridColumn={i === 42 ? '1 / -1' : null}
                     pos="relative"
                     key={id}
                     backgroundColor={randomBG()}
                  >
                     <img
                        style={{
                           objectFit: 'cover',
                           width: '100%',
                           height: '100%'
                        }}
                        src={img}
                     />
                     <Box
                        pos="absolute"
                        background="linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))"
                        color="white"
                        zIndex={2}
                        bottom={0}
                        width="full"
                        fontSize="2xl"
                        padding="8px"
                     >
                        <Text>{displayName}</Text>
                     </Box>
                  </Box>
               ))}
            </Box>
         ) : (
            <SearchingResults keyWord={searchTerm} />
         )}
      </Box>
   )
}
