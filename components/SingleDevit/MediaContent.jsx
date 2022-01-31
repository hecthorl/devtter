import { Image } from '@chakra-ui/react'

const MediaContent = ({ source }) => {
   if (source.img === 'No Image') return null

   const { img_url: img, dominant_color: fallBack } = source
   return <Image src={img} alt="X D" />
}

export default MediaContent
