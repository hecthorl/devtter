import { useState } from 'react'
import classNames from 'classnames'
// import { BsThreeDots } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
import DevitReactions from 'components/DevitReactions'

const VisorImg = ({ handleVisor, img, id, likesCount }) => {
   document.body.onkeyup = e => {
      if (e.code === 'Escape') handleVisor(false)
   }
   const [toggleWindow, setToggleWindow] = useState(!false)

   const aside = classNames('visor_img-aside', {
      hidden: toggleWindow
   })

   return (
      <div
         style={{
            gridTemplateColumns: toggleWindow ? '1fr' : '1fr 350px'
         }}
         className="visor_img-container"
      >
         <div onClick={() => handleVisor(false)} className="visor_img-content">
            <div
               onClick={e => e.stopPropagation()}
               className="visor_img-buttons"
            >
               <button onClick={() => handleVisor(false)}>
                  <MdClose aria-hidden />
               </button>
               <button
                  aria-label={toggleWindow ? 'Ver devit' : 'Ocultar devit'}
                  onClick={() => setToggleWindow(!toggleWindow)}
               >
                  {/* <BsThreeDots aria-hidden /> */}
                  {!toggleWindow ? (
                     <HiChevronDoubleRight aria-hidden />
                  ) : (
                     <HiChevronDoubleLeft aria-hidden />
                  )}
               </button>
            </div>
            <div className="visor_img-image__container">
               <img onClick={e => e.stopPropagation()} src={img} />
            </div>
            <div
               onClick={e => e.stopPropagation()}
               className="w-full px-8 max-w-[600px] flex justify-between h-full max-h-[48px] items-center"
            >
               <DevitReactions id={id} likesCount={likesCount} />
            </div>
         </div>
         <div className={aside}></div>
      </div>
   )
}

export default VisorImg
