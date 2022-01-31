import { db } from './firebaseClient'
import { doc, getDoc } from 'firebase/firestore'

const getDevit = async id => {
   const docRef = doc(db, 'devits', id)
   const docSnap = await getDoc(docRef)

   return docSnap.exists() ? docSnap.data() : Error('No existe documento')
}

export default getDevit
