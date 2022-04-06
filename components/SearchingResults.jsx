import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Flex, forwardRef, Spinner } from '@chakra-ui/react'
import debounce from 'just-debounce-it'
import getSearchingGifResults from 'services/getSearchingGifResults'
import randomBG from 'helpers/randomBG'
import { useRouter } from 'next/router'

const BoxRootRef = forwardRef((props, ref) => <Box {...props} ref={ref} />)

/**
 * @param {React.ComponentProps} props
 * @param {string} props.keyWord
 * @returns
 */
export default function SearchingResults({ keyWord }) {
   const [gifs, setGifs] = useState([])
   const [lote, setLote] = useState(0)
   const visorRef = useRef(null)

   const limit = 20
   const offset = lote * limit

   const debounceNextLote = useCallback(
      debounce(() => {
         setLote(prev => prev + 1)
      }, 1e3),
      []
   )

   useEffect(() => {
      getSearchingGifResults(keyWord, limit, offset).then(newGifs => {
         setGifs([...new Set([...gifs, ...newGifs])])
      })

      function onObserve(entries) {
         if (entries[0].isIntersecting) {
            debounceNextLote()
         } else {
            console.log('fuera del IF')
         }
      }

      /**
       * @type {IntersectionObserverInit}
       */
      const options = {
         root: null,
         rootMargin: '10px'
      }

      const observer = new IntersectionObserver(onObserve, options)

      if (visorRef.current) {
         observer.observe(visorRef.current)
      }

      return () => {
         observer.disconnect()
      }
   }, [keyWord, lote])

   return (
      <div id="rootRefxd" style={{ height: 'auto', minHeight: '100%' }}>
         <Flex gap="1px" wrap="wrap">
            {!!gifs.length && gifs.map(GifsMap)}
         </Flex>
         <div
            id="visor"
            style={{
               width: '100%',
               display: 'flex',
               justifyContent: 'center',
               padding: '10px 0'
            }}
            ref={visorRef}
         >
            <Spinner />
         </div>
      </div>
   )
}

function GifsMap({ displayName, imgData, freezeImg, img, gifId }, index) {
   const width = imgData.width > 388 ? 583 / 2 : imgData.width
   const { push } = useRouter()
   return (
      <Box
         h="150px"
         cursor="pointer"
         width={`${width}px`}
         margin="0"
         flex="1 0 auto"
         backgroundColor={randomBG()}
         key={gifId}
         onClick={() => {
            push(`/home?imgUrl=${img}`, '/home', { shallow: true })
            /**
             * - Funcion para enviar la url a los hooks
             * - Ademas crear funcion para saber si debe cerrar el popup
             *   o retroceder al devitInput
             */
         }}
      >
         <img
            style={{
               objectFit: 'cover',
               width: '100%',
               height: '100%'
            }}
            src={freezeImg}
            alt={displayName}
         />
      </Box>
   )
}
