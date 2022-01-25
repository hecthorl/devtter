import { firestore } from 'services/firebaseAdmin'

/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async (req, res) => {
   const algo = firestore.collection('devits')

   await algo
      .add({
         content: 'Prueba de Texto para el nuevo componente',
         img: 'No image',
         avatar: 'https://avatars.githubusercontent.com/u/67394936?v=4',
         userId: 'Oo7mMIls6HfCJSWLQq2d5oqLGPt2',
         sharedCounts: [],
         likesCount: [],
         createdAt: 1626209988217,
         username: 'hector vargas'
      })
      .catch(console.log)

   // seed.forEach(async doc => {
   //    const imageSchema = {
   //       img_url: doc.img.img_url,
   //       dominant_color: doc.img.dominant_color
   //    }
   //    const imgUpdated = doc.img !== 'No image' ? imageSchema : 'No image'
   //    const docRef = algo.doc(doc.id)
   //    await docRef
   //       .update({
   //          img: imgUpdated
   //       })
   //       .then(a => {
   //          console.log(a)
   //       })
   //       .catch(err => {
   //          console.log({ err })
   //       })
   // })
   // const seed = await algo.get()
   // const data = seed.docs.map(doc => doc.data())
   // const data = await algo.get()
   // const seed = data.docs.map(doc => {
   //    return {
   //       ...doc.data(),
   //       id: doc.id
   //    }
   // })
   // await writeFile('./zeed.js', JSON.stringify(seed, null, 2))
   // await clientdb.connect()
   // const devitsColl = clientdb.db().collection('Devits')
   // const data = await devitsColl.insertMany(seed)
   res.json({ ok: true, data: 'lol' })
}
