import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, forwardRef, Spinner } from '@chakra-ui/react'
import debounce from 'just-debounce-it'
import Masonry from 'react-masonry-css'
import getSearchingGifResults from 'services/getSearchingGifResults'
import randomBG from 'helpers/randomBG'

const BoxRootRef = forwardRef((props, ref) => <Box {...props} ref={ref} />)

/**
 * @param {React.ComponentProps} props
 * @param {string} props.keyWord
 * @returns
 */
export default function SearchingResults({ keyWord }) {
   const [gifs, setGifs] = useState([])
   const [lote, setLote] = useState(0)
   const rootRef = useRef(null)
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
      <div
         id="rootRef"
         ref={rootRef}
         style={{ height: 'auto', minHeight: '100%' }}
      >
         <Masonry
            style={{
               display: 'flex',
               marginLeft: '-1px',
               width: 'auto'
            }}
            columnClassName="my-masonry-grid_column_xd"
            breakpointCols={5}
         >
            {!!gifs.length && gifs.map(GifsMap)}
         </Masonry>
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

/**
 * @param {object} gifObjec
 * @param {import('types/img480w_still').img480w_still} gifObjec.img
 * @param {number} index
 * @returns
 */
function GifsMap({ id, displayName, img }, index) {
   return (
      <Box
         paddingLeft="1px"
         backgroundClip="padding-box"
         backgroundColor={randomBG()}
         key={id}
      >
         <img
            style={{
               objectFit: 'cover',
               width: `${img.width}px`,
               height: `${img.height}px`
            }}
            src={img.url}
            alt={displayName}
         />
      </Box>
   )
}
