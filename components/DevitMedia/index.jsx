import { Box, Image } from '@chakra-ui/react'
import useVisorImg from 'hooks/useVisorImg'
import VisorImg from './VisorImg'

const DevitMedia = ({ img, id, likesCount }) => {
   const { visor, handleState } = useVisorImg()

   if (img === 'No image') return null
   return (
      <Box
         onClick={e => e.stopPropagation()}
         rounded="2xl"
         border="1px solid #38444d"
         overflow="hidden"
      >
         <Image
            cursor="pointer"
            objectFit="cover"
            onClick={() => handleState(true)}
            loading="lazy"
            src={img.img_url}
         />
         {visor && (
            <VisorImg
               handleVisor={handleState}
               img={img.img_url}
               id={id}
               likesCount={likesCount}
               color={img.dominant_color}
            />
         )}
      </Box>
   )
}

export default DevitMedia
