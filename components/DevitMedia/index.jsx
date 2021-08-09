import { useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const DevitMedia = ({ img }) => {
   const [isLoaded, setIsLoaded] = useState(false)
   const { pathname } = useRouter()

   const imageContainer = classNames('devit_media-container', {
      'h-[283px]': pathname.includes('home')
   })

   const toimage = classNames('devit_media-img', {
      'opacity-100': isLoaded,
      'opacity-0': !isLoaded
   })

   const toFallbackImg = classNames('.devit_media-fallback', {
      'opacity-100': !isLoaded,
      'opacity-0': isLoaded
   })

   return (
      <>
         {img === 'No image' ? null : (
            <div onClick={e => e.stopPropagation()} className={imageContainer}>
               <img
                  onLoad={() => setIsLoaded(true)}
                  loading="lazy"
                  className={toimage}
                  src={img}
                  alt={img}
               />
               <div className={toFallbackImg}></div>
            </div>
         )}
      </>
   )
}

export default DevitMedia
