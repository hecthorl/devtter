import { firestore } from 'firebase/admin'

export default (req, res) => {
   const { id } = req.query
   firestore
      .collection('devits')
      .doc(id)
      .get()
      .then(doc => {
         const data = doc.data()
         console.log(data, 'data de api')
         res.json(data)
      })
      .catch(err => {
         console.log(err)
         return res.status(404).end()
      })
}
