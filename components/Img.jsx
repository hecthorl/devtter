import { Box, Image } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import useBool from 'hooks/useBool'

const MotionBox = motion(Box)

export default function Img({ src, alt, onClick }) {
   const [flagRef, setFlagRef] = useBool(true)
   return (
      <Box
         onClick={onClick}
         width="100%"
         height="100%"
         pos="relative"
         cursor="pointer"
      >
         <Image
            onLoad={setFlagRef.off}
            objectFit="cover"
            width="inherit"
            height="inherit"
            loading="lazy"
            src={src.img_url}
            alt={alt}
         />
         <AnimatePresence>
            {flagRef && (
               <MotionBox
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  pos="absolute"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                  backgroundColor={src.dominant_color}
               />
            )}
         </AnimatePresence>
      </Box>
   )
}
