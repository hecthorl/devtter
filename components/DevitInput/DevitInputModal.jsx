import { FiX } from 'react-icons/fi'
import useStore from 'store'
import DevitInput from '.'

const DevitInputModal = () => {
   const setPopUp = useStore(state => state.setPopUp)
   return (
      <div
         onClick={() => setPopUp(false)}
         className="fixed top-0 right-0 w-screen h-screen bg-white bg-opacity-20 z-50"
      >
         <dialog
            onClick={e => e.stopPropagation()}
            className="w-[600px] bg-primary rounded-2xl mt-10 p-0"
            open
         >
            <div className="border-b border-secondary w-full py-2 px-4">
               <button
                  onClick={() => {
                     setPopUp(false)
                  }}
                  className="text-2xl text-green-500 p-2 rounded-full bg-green-500 bg-opacity-0 hover:bg-opacity-20 transition-colors"
               >
                  <FiX />
               </button>
            </div>
            <DevitInput />
         </dialog>
      </div>
   )
}

export default DevitInputModal
