import Head from 'next/head'
import Button from 'components/Button'
import useUser from 'hooks/useUser'
import { useEffect, useState } from 'react'
import { addDevit, uploadImage } from 'firebase/cliente'
import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'
import stylesTweet from 'components/stylesTweet'

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
   const { push } = useRouter()
   const user = useUser()

   useEffect(() => {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
         // console.log('completado')
         task.snapshot.ref.getDownloadURL().then(setImgURL)
      }

      if (task) {
         task.on('state_changed', onProgress, onError, onComplete)
      }
   }, [task])

   const handleMessage = event => {
      setMessage(event.target.value)
   }

   const handleSubmit = event => {
      event.preventDefault()
      const tweet = message.trim()

      setStatus(COMPOSE_STATES.LOADING)

      addDevit({
         avatar: user.avatar,
         content: tweet,
         userId: user.uid,
         username: user.username,
         img: imgURL
      })
         .then(algo => {
            // console.log(algo, 'del tweet componse')
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
         ? '3px dashed #09f'
         : '3px dashed transparent'
   return (
      <>
         <Head>
            <title>Tweet | 🍫</title>
         </Head>
         <form onSubmit={handleSubmit}>
            <textarea
               style={{ border }}
               onChange={handleMessage}
               value={message}
               onDragEnter={handleDragEnter}
               onDragLeave={handleDragLeave}
               onDrop={handleDrop}
               placeholder="What's going on?"
            ></textarea>
            {imgURL && (
               <section>
                  <button
                     onClick={() => setImgURL(null)}
                     className="img-button"
                  >
                     <FiX
                        style={{
                           fontSize: '20px',
                           color: 'white',
                           pointerEvents: 'none'
                        }}
                     />
                  </button>
                  <img src={imgURL} alt={imgURL} />
               </section>
            )}
            <Button disabled={isButtonDisable}>Devittear 🍫</Button>
         </form>
         <style jsx>{stylesTweet}</style>
      </>
   )
}

export default Tweet
