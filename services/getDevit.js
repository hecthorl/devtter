import { db } from './firebaseClient'
import { doc, getDoc } from 'firebase/firestore'

/**
 * @param {string} id
 * @returns {Promise<object>}
 */
const getDevit = async id => {
   const docRef = doc(db, 'devits', id)
   const docSnap = await getDoc(docRef)

   if (docSnap.exists()) return docSnap.data()
   throw new Error('No existe documento')
}

export default getDevit
