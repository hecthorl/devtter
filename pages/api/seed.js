// import seed from 'helpers/seed'
// import { firestore } from 'ownFirebase/admin'
// import { writeFile } from 'fs/promises'
// import clientdb from 'services/db-client'
export default async (req, res) => {
   // const algo = firestore.collection('devits')
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
