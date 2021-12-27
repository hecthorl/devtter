import dynamic from 'next/dynamic'
import DevitInputTextarea from './DevitInputTextarea'
import { UPLOADING_STATES } from 'helpers/constants'
import useStore from 'store'

const Avatar = dynamic(() => import('components/Avatar'), { ssr: false })

const DevitInput = () => {
   const devitStates = useStore(state => state.devitStates)

   const { UPLOADING } = UPLOADING_STATES
   return (
      <>
         <div className="devit-input-container">
            <div className="w-[48px] h-[48px]">
               <Avatar />
            </div>
            <DevitInputTextarea />
            {devitStates === UPLOADING && (
               <div className="devit-input-loading">
                  <h1>CARGANDO...</h1>
               </div>
            )}
         </div>
      </>
   )
}

export default DevitInput
