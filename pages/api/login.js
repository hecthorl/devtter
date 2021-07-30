import { setAuthCookies } from 'next-firebase-auth'
import initAuth from 'firebase/InitAuth'

initAuth()

const handler = async (req, res) => {
   try {
      await setAuthCookies(req, res)
   } catch (error) {
      console.log(error)
      return res.status(500).json({
         error: 'Error inesperado'
      })
   }
   return res.status(200).json({ success: true })
}

export default handler
