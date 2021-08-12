import { Storage } from '@google-cloud/storage'
import { configFirebase } from 'helpers/constants'

const storage = new Storage()

export default async function (req, res) {
   try {
      await storage
         .bucket(configFirebase.storageBucket)
         .setCorsConfiguration([])
   } catch (err) {
      console.log(err)
      res.status(400).json({ ok: false })
   }
   res.status(200).json({ ok: true })
}
