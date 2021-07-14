import { addDevit } from 'firebase/cliente'
import { COMPOSE_STATES } from 'helpers/constants'
import useGlobalContext from 'hooks/useGlobalContext'
import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import { useState } from 'react'

const DevitInputBtn = ({ message, imgURL }) => {
   const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
   const { setpopUp, popUp, setMessage } = useGlobalContext()
   const user = useUser()
   const { push } = useRouter()

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
            if (!popUp) {
               setMessage('')
               setStatus(COMPOSE_STATES.USER_NOT_KNOW)
               return
            }
            push('/home')
            setpopUp(false)
         })
         .catch(err => {
            console.log(err)
            setStatus(COMPOSE_STATES.ERROR)
         })
   }

   const isButtonDisable =
      !message.length ||
      status === COMPOSE_STATES.LOADING ||
      message.length > 280

   return (
      <button
         onClick={handleSubmit}
         disabled={isButtonDisable}
         className="py-2 px-3 bg-green-500 rounded-full disabled:bg-opacity-20 text-white font-semibold disabled:text-opacity-20 disabled:cursor-default"
      >
         Devitterar
      </button>
   )
}

export default DevitInputBtn
