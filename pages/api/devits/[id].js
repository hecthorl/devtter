// import { firestore } from 'firebase/admin'

export default (req, res) => {
   // const { id } = req.query
   // firestore
   //    .collection('devits')
   //    .doc(id)
   //    .get()
   //    .then(doc => {
   //       const data = doc.data()
   //       const id = doc.id
   //       return res.status(200).json({ ...data, id })
   //    })
   //    .catch(err => {
   //       console.log(err)
   //       return res.status(400).json({ error: true })
   //    })
   return res.status(404).json({ msg: 'Que haces aqui? >:v' })
}
