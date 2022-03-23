import { Box } from '@chakra-ui/react'
import Img from 'components/Img'
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
         // maxW="504px"
         // minH="504px"
         // width="full"
         // height="full"
         style={{
            aspectRatio: '1 / 1'
         }}
      >
         <Img alt="nada" onClick={() => handleState(true)} src={img} />
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
