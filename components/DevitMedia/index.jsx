import { Box } from '@chakra-ui/react'
import Img from 'components/Img'
import useVisorImg from 'hooks/useVisorImg'
import VisorImg from './VisorImg'

const DevitMedia = ({ img, children }) => {
   const { visor, handleState } = useVisorImg()

   if (img === 'No image') return null

   return (
      <Box
         onClick={e => e.stopPropagation()}
         rounded="2xl"
         border="1px solid #38444d"
         overflow="hidden"
         style={{ aspectRatio: '1 / 1' }}
      >
         <Img alt="nada" onClick={() => handleState(true)} src={img} />
         {visor && (
            <VisorImg
               handleVisor={handleState}
               img={img.img_url}
               color={img.dominant_color}
            >
               {children}
            </VisorImg>
         )}
      </Box>
   )
}

export default DevitMedia
