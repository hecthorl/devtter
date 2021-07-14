import { FiX } from 'react-icons/fi'

const OnImage = ({ imgURL, setImgURL }) => {
   if (!imgURL) return null
   return (
      <div className="relative">
         <button
            onClick={() => setImgURL(null)}
            className="absolute bg-black bg-opacity-50 top-3 left-3 text-2xl p-2 rounded-full"
         >
            <FiX className="text-white" />
         </button>
         <img className="rounded-2xl" src={imgURL} alt={imgURL} />
      </div>
   )
}

export default OnImage
