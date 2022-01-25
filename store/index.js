import { DRAG_IMAGE_STATES, UPLOADING_STATES } from 'helpers/constants'
import create from 'zustand'

const useStore = create(set => ({
   devitStates: UPLOADING_STATES.NONE,
   dragStates: DRAG_IMAGE_STATES.NONE,
   popUp: false,
   timeLine: [],
   setDevitStates: newState => set(() => ({ devitStates: newState })),
   setDragStates: newState => set(() => ({ dragStates: newState })),
   setPopUp: bool => set(() => ({ popUp: bool })),
   setTimeLine: data =>
      set(state => ({ timeLine: state.timeLine.concat(data) }))
}))

export default useStore
