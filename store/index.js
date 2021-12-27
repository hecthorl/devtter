import { DRAG_IMAGE_STATES, UPLOADING_STATES } from 'helpers/constants'
import create from 'zustand'

const useStore = create(set => ({
   devitStates: UPLOADING_STATES.NONE,
   dragStates: DRAG_IMAGE_STATES.NONE,
   popUp: false,
   setDevitStates: () => set(state => ({ devitStates: state })),
   setDragStates: () => set(state => ({ dragStates: state })),
   setPopUp: () => set(state => ({ popUp: state }))
}))

export default useStore
