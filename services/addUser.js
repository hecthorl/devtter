import { db } from './firebaseClient'
import { collection, doc, setDoc } from 'firebase/firestore'

/**
 * @param {object} user
 * @returns {Promise<void>}
 */
const addUser = user => {
   const devitRef = doc(collection(db, 'users'))
   return setDoc(devitRef, user)
}
export default addUser
