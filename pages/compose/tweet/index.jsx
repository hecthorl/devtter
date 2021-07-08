import Head from 'next/head'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { addDevit, uploadImage } from 'firebase/cliente'
import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'
import { HiArrowLeft } from 'react-icons/hi'

const COMPOSE_STATES = {
   USER_NOT_KNOW: 0,
   LOADING: 1,
   SUCCESS: -1,
   ERROR: 2
}

const DRAG_IMAGE_STATES = {
   ERROR: -1,
   NONE: 0,
   DRAG_OVER: 1,
   UPLOADING: 2,
   COMPLETE: 3
}

const Tweet = () => {
   const [message, setMessage] = useState('')
   const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
   const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
   const [task, setTask] = useState(null)
   const [imgURL, setImgURL] = useState(null)
   const { push, back } = useRouter()
   const user = useUser()

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
      const tweet = message.trim()

      setStatus(COMPOSE_STATES.LOADING)

      addDevit({
         avatar: user.avatar,
         content: tweet,
         userId: user.uid,
         username: user.username,
         img: imgURL
      })
         .then(() => {
            push('/home')
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
         : 'border-b border-blue-400'
   return (
      <>
         <Head>
            <title>Publicar nuevo Devit</title>
         </Head>
         <div>
            <header className="flex justify-between px-3 py-2 border-b border-blue-300">
               <button onClick={() => back()}>
                  <HiArrowLeft className="pointer-events-none text-2xl text-green-500" />
               </button>
               <button
                  onClick={handleSubmit}
                  type="submit"
                  className="rounded-full px-4 font-bold text-white py-1 bg-green-500 disabled:opacity-50"
                  disabled={isButtonDisable || message.length >= 280}
               >
                  Devittear
               </button>
            </header>
            <div className="flex px-3 py-2">
               <div className="w-16 mr-2">
                  {user?.avatar ? (
                     <img
                        src={user.avatar}
                        alt="user avatar"
                        className="rounded-full"
                     />
                  ) : (
                     <div className="rounded-full bg-blue-400 h-10 w-10"></div>
                  )}
               </div>
               <div className="w-full">
                  <textarea
                     className={`${border} text-lg w-full resize-none h-32 p-2 focus:outline-none bg-transparent text-white`}
                     onChange={handleMessage}
                     value={message}
                     onDragEnter={handleDragEnter}
                     onDragLeave={handleDragLeave}
                     onDrop={handleDrop}
                     placeholder="What's going on?"
                  ></textarea>
                  {message.length >= 280 && (
                     <span className="text-red-400">
                        Max length characteres exceded
                     </span>
                  )}
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
         </div>
      </>
   )
}

export default Tweet
