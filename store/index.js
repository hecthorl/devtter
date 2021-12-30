import { DRAG_IMAGE_STATES, UPLOADING_STATES } from 'helpers/constants'
import create from 'zustand'

const useStore = create(set => ({
   devitStates: UPLOADING_STATES.NONE,
   dragStates: DRAG_IMAGE_STATES.NONE,
   popUp: false,
   setDevitStates: newState => set(() => ({ devitStates: newState })),
   setDragStates: newState => set(() => ({ dragStates: newState })),
   setPopUp: bool => set(() => ({ popUp: bool }))
}))

export default useStore
