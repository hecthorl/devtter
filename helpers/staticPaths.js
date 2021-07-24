import { firestore } from 'firebase/admin'
// import { writeFileSync } from 'fs'
// import { cwd } from 'process'

const paths = () => {
   const patas = firestore
      .collection('devits')
      .get()
      .then(snapshot =>
         snapshot.docs.map(doc => {
            // retorna un array de paths
            return { params: { id: doc.id } }
         })
      )
   patas.then(arrayOfPaths => {
      console.log(arrayOfPaths, 'arrayOfPaths')
      // console.log(cwd, 'cwd')
   })
}

export default paths
