import { useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import VisorImg from 'components/VisorImg'
import useVisorImg from 'hooks/useVisorImg'

const DevitMedia = ({ img, id, likesCount }) => {
   const [isLoaded, setIsLoaded] = useState(false)
   const { visor, handleState } = useVisorImg(img.img_url)
   const { pathname } = useRouter()

   const dominantColor = img.dominant_color

   const imageContainer = classNames('devit_media-container', {
      'h-[283px]': pathname.includes('home')
   })

   const toimage = classNames('devit_media-img', {
      'opacity-100': isLoaded,
      'opacity-0': !isLoaded
   })

   const toFallbackImg = classNames('devit_media-fallback', {
      'opacity-100': !isLoaded,
      'opacity-0': isLoaded
   })

   if (img === 'No image') return null
   return (
      <div onClick={e => e.stopPropagation()} className={imageContainer}>
         <img
            onLoad={() => setIsLoaded(true)}
            onClick={() => handleState(true)}
            loading="lazy"
            className={toimage}
            src={img.img_url}
         />
         <div
            style={{ background: dominantColor }}
            className={toFallbackImg}
         ></div>
         {visor && (
            <VisorImg
               handleVisor={handleState}
               img={img.img_url}
               id={id}
               likesCount={likesCount}
               color={dominantColor}
            />
         )}
      </div>
   )
}

export default DevitMedia
