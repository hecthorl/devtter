import create from 'zustand'
import { DRAG_IMAGE_STATES, UPLOADING_STATES } from 'helpers/constants'

const useZtndStore = create(set => ({
   // Drag_N_Drop_Image Management
   dragStates: DRAG_IMAGE_STATES.NONE,
   setDragStates: newState => set(() => ({ dragStates: newState })),
   // ImgFile_Management
   file: null,
   setFile: newState => set(() => ({ file: newState })),
   // Textarea_Management
   textareaMsg: '',
   setTextareaMsg: newState => set(() => ({ textareaMsg: newState })),
   // Devit_Management
   devitStates: UPLOADING_STATES.NONE,
   setDevitStates: newState => set(() => ({ devitStates: newState }))
}))

export default useZtndStore
