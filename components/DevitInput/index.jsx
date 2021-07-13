import WordsCounter from 'components/WordsCounter'
import TextareaAutosize from 'react-textarea-autosize'
import { addDevit, uploadImage } from 'firebase/cliente'
import { COMPOSE_STATES, DRAG_IMAGE_STATES } from 'helpers/constants'
import useGlobalContext from 'hooks/useGlobalContext'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FiX } from 'react-icons/fi'
const DevitInput = () => {
   const [message, setMessage] = useState('')
   const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
   const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
   const [task, setTask] = useState(null)
   const [imgURL, setImgURL] = useState(null)
   const { push } = useRouter()
   const user = useUser()
   const { setpopUp, popUp } = useGlobalContext()

   useEffect(() => {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
         task.snapshot.ref.getDownloadURL().then(setImgURL)
      }

      if (task) {
         task.on('state_changed', onProgress, onError, onComplete)
      }
   }, [task])

   const handleMessage = event => {
      setMessage(event.target.value)
   }

   const handleSubmit = () => {
      const devit = message.trim()

      setStatus(COMPOSE_STATES.LOADING)

      addDevit({
         avatar: user.avatar,
         content: devit,
         userId: user.uid,
         username: user.username,
         img: imgURL || 'No image'
      })
         .then(() => {
            popUp ? setpopUp(false) : push('/home')
         })
         .catch(err => {
            console.log(err)
            setStatus(COMPOSE_STATES.ERROR)
         })
   }
   const isButtonDisable = !message.length || status === COMPOSE_STATES.LOADING

   const handleDragEnter = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
   }
   const handleDragLeave = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.NONE)
   }
   const handleDrop = event => {
      event.preventDefault()
      setDrag(DRAG_IMAGE_STATES.NONE)
      const [file] = event.dataTransfer.files
      const task = uploadImage(file)
      setTask(task)
   }

   const border =
      drag === DRAG_IMAGE_STATES.DRAG_OVER
         ? 'border-dashed border-2 border-green-500'
         : 'border-b border-secondary'
   return (
      <div
         onClick={() => setpopUp(false)}
         className="fixed top-0 right-0 w-screen h-screen bg-white bg-opacity-20"
      >
         <dialog
            onClick={e => e.stopPropagation()}
            className="w-[600px] bg-primary rounded-2xl mt-10 p-0"
            open
         >
            <div className="border-b border-secondary w-full py-2 px-4">
               <button
                  onClick={() => {
                     setpopUp(false)
                  }}
                  className="text-2xl text-green-500 p-2 rounded-full bg-green-500 bg-opacity-0 hover:bg-opacity-20 transition-colors"
               >
                  <FiX />
               </button>
            </div>
            <div className="px-4 py-2 flex gap-x-2">
               <div className="w-12 ml-2">
                  {user?.avatar ? (
                     <img
                        loading="lazy"
                        src={user.avatar}
                        alt="user avatar"
                        className="rounded-full"
                     />
                  ) : (
                     <div className="rounded-full bg-secondary h-10 w-10"></div>
                  )}
               </div>
               <div className="w-full">
                  <div>
                     <TextareaAutosize
                        className={`${border} text-lg w-full resize-none p-2 focus:outline-none bg-transparent text-white`}
                        onChange={handleMessage}
                        value={message}
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        placeholder="¿Qué está pasando?"
                     />
                     <div className="flex justify-between items-center mt-2">
                        <div className="flex text-lg gap-x-2">
                           <span className="p-2 bg-green-500 rounded-full hover:bg-opacity-20 bg-opacity-0 transition-colors cursor-pointer">
                              🎟
                           </span>
                           <span className="p-2 bg-green-500 rounded-full hover:bg-opacity-20 bg-opacity-0 transition-colors cursor-pointer">
                              💄
                           </span>
                           <span className="p-2 bg-green-500 rounded-full hover:bg-opacity-20 bg-opacity-0 transition-colors cursor-pointer">
                              🏆
                           </span>
                           <span className="p-2 bg-green-500 rounded-full hover:bg-opacity-20 bg-opacity-0 transition-colors cursor-pointer">
                              🪁
                           </span>
                           <span className="p-2 bg-green-500 rounded-full hover:bg-opacity-20 bg-opacity-0 transition-colors cursor-pointer">
                              🏀
                           </span>
                        </div>
                        <div className="flex items-center justify-center gap-x-2">
                           <WordsCounter
                              words={message.length}
                              maxValue={280}
                           />
                           <button
                              onClick={handleSubmit}
                              disabled={message.length > 280 || isButtonDisable}
                              className="py-2 px-3 bg-green-500 rounded-full disabled:bg-opacity-20 text-white font-semibold disabled:text-opacity-20 disabled:cursor-default"
                           >
                              Devitterar
                           </button>
                        </div>
                     </div>
                  </div>
                  {imgURL && (
                     <section className="relative">
                        <button
                           onClick={() => setImgURL(null)}
                           className="absolute bg-black bg-opacity-50 top-3 left-3 text-2xl p-2 rounded-full"
                        >
                           <FiX className="text-white" />
                        </button>
                        <img
                           className="rounded-2xl"
                           src={imgURL}
                           alt={imgURL}
                        />
                     </section>
                  )}
               </div>
            </div>
         </dialog>
      </div>
   )
}

export default DevitInput
