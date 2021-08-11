import { BsThreeDots } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const VisorImg = ({ handleVisor, img }) => {
   return (
      <div
         onKeyUp={e => {
            if (e.code === 'Escape') handleVisor(false)
         }}
         className="fixed top-0 right-0 left-0 w-screen h-screen bg-primary sm:bg-transparent sm:backdrop-blur-sm z-50 cursor-default"
      >
         <div
            onClick={() => handleVisor(false)}
            className="w-full h-full flex flex-col items-center relative"
         >
            <div className="flex-1 h-full flex justify-center items-center ">
               <img
                  onClick={e => e.stopPropagation()}
                  src={img}
                  className="h-[fit-content] w-[fit-content] object-contain"
               />
            </div>
            <div
               onClick={e => e.stopPropagation()}
               className="absolute top-0 left-0 right-0 flex justify-between p-4 text-2xl"
            >
               <button onClick={() => handleVisor(false)}>
                  <MdClose aria-hidden />
               </button>
               <button>
                  <BsThreeDots aria-hidden />
               </button>
            </div>
            <div onClick={e => e.stopPropagation()} className="w-full">
               <div className="px-8 mx-auto max-w-[600px] flex justify-between">
                  <span>asda</span>
                  <span>asda</span>
                  <span>asda</span>
                  <span>asda</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default VisorImg
