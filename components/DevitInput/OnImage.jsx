import useGlobalContext from 'hooks/useGlobalContext'
import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import useStore from 'store'

const OnImage = ({ preview, setPreview }) => {
   const devitStates = useStore(state => state.devitStates)
   useEffect(() => {
      setPreview(null)
   }, [devitStates])

   if (!preview) return null

   return (
      <div className="relative">
         <button
            onClick={() => setPreview(null)}
            className="absolute bg-black bg-opacity-50 top-3 left-3 text-2xl p-2 rounded-full"
         >
            <FiX className="text-white" />
         </button>
         <img
            className="rounded-2xl h-72 w-full object-cover"
            src={preview}
            alt="image"
         />
      </div>
   )
}

export default OnImage
