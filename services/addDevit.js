import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from './firebaseClient'

/**
 * @param {object} devit
 * @returns {Promise<void>}
 */
const addDevit = devit => {
   const devitRef = doc(collection(db, 'devits'))
   return setDoc(devitRef, devit)
}

export default addDevit
