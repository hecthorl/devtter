import dynamic from 'next/dynamic'
import DevitInputTextarea from './DevitInputTextarea'
import useGlobalContext from 'hooks/useGlobalContext'
import { UPLOADING_STATES } from 'helpers/constants'

const Avatar = dynamic(() => import('components/Avatar'), { ssr: false })

const DevitInput = () => {
   const { devitStates } = useGlobalContext()
   const { UPLOADING } = UPLOADING_STATES
   return (
      <>
         <div className="px-4 py-2 flex gap-x-2 relative">
            <div className="w-[48px] h-[48px]">
               <Avatar />
            </div>
            <DevitInputTextarea />
            {devitStates === UPLOADING && (
               <div className="absolute top-0 right-0 w-full h-full bg-blue-600 bg-opacity-20 flex items-center justify-center text-white backdrop-blur-sm">
                  <h1>CARGANDO...</h1>
               </div>
            )}
         </div>
      </>
   )
}

export default DevitInput
