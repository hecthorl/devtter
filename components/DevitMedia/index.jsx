import { Box, Image } from '@chakra-ui/react'
import useVisorImg from 'hooks/useVisorImg'
// import { useState } from 'react'
import VisorImg from './VisorImg'

const DevitMedia = ({ img, id, likesCount }) => {
   // const [isLoaded, setIsLoaded] = useState(false)
   const { visor, handleState } = useVisorImg(img.img_url)
   // const { pathname } = useRouter()

   const dominantColor = img.dominant_color

   // const imageContainer = classNames('devit_media-container', {
   //    'h-[283px]': pathname.includes('home')
   // })

   if (img === 'No image') return null
   return (
      <Box
         rounded="2xl"
         border="1px solid #38444d"
         overflow="hidden"
         // onClick={e => e.stopPropagation()}
      >
         <Image
            objectFit="cover"
            // onLoad={() => setIsLoaded(true)}
            onClick={() => handleState(true)}
            loading="lazy"
            src={img.img_url}
         />
         {/* <div style={{ background: dominantColor }}></div> */}
         {visor && (
            <VisorImg
               handleVisor={handleState}
               img={img.img_url}
               id={id}
               likesCount={likesCount}
               color={dominantColor}
            />
         )}
      </Box>
   )
}

export default DevitMedia
