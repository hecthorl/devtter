import { db } from './firebaseClient'
import { collection, doc, setDoc } from 'firebase/firestore'

const addUser = user => {
   const devitRef = doc(collection(db, 'users'))
   return setDoc(devitRef, user)
}
export default addUser
