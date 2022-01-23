import { pusher } from 'services/pusher'
import clientdb from 'services/db-client'

export default async (req, res) => {
   await clientdb.connect()
   const devitsColl = clientdb.db().collection('Devits')

   if (req.method === 'GET') {
      const changeStream = devitsColl.watch()
      changeStream.on('change', next => {
         pusher.trigger('my-chann', 'my-event', {
            data: next.fullDocument
         })
      })
      // Esto va a tener que ser con streaming >:(
      const devits = await devitsColl
         .find({})
         .sort({
            createdAt: -1
         })
         .limit(5)
         .toArray()
      res.status(200).send(devits)
      return
   }

   if (req.method === 'POST') {
      try {
         const parsedDevit = JSON.parse(req.body)
         const dvt = await devitsColl.insertOne(parsedDevit)
         if (dvt.insertedId) res.status(201).send('ok')
         res.status(500).send('Error al intentar insertar en DB')
         return
      } catch (error) {
         console.log(error)
         return
      }
   }

   if (req.method === 'PUT') {
      /**
       * Aqui hay un problema: Se van a actualizar muchas cosas, entonces, como lo hago 🤔??
       */
      const query = { name: 'Deli Llama' }
      const update = { $set: { name: 'Deli Llama', address: '3 Nassau St' } }
      const options = { upsert: true }
      const dvt = await devitsColl.updateOne(query, update, options)
      if (dvt.upsertedId) res.status(202).send('ok')
      res.status(500).send('Error al intentar insertar en DB')
   }
}
