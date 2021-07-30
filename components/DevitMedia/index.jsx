import { useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const DevitMedia = ({ img }) => {
   const [isLoaded, setIsLoaded] = useState(false)
   const { pathname } = useRouter()

   const imageContainer = classNames(
      'w-full',
      'overflow-hidden',
      'relative',
      'rounded-2xl',
      {
         'h-[283px]': pathname.includes('home')
      }
   )

   const toimage = classNames(
      'break-all',
      'min-w-full',
      'h-full',
      'object-cover',
      {
         'opacity-100': isLoaded,
         'opacity-0': !isLoaded
      }
   )

   const toFallbackImg = classNames(
      'absolute',
      'top-0',
      'w-full',
      'h-full',
      'bg-blue-600',
      {
         'opacity-100': !isLoaded,
         'opacity-0': isLoaded
      }
   )

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
