import { db } from './firebaseClient'
import { doc, getDoc } from 'firebase/firestore'

/**
 * Consulta a la base de datos Firestore, si el email se encuentra en la coleción.
 * @param {String} email Email del usuario que esta ingresando
 * @returns {Promise<boolean>} Retorna un booleano
 */
const isUserInDB = async email => {
   const docRef = doc(db, 'users', email)
   const docSnap = await getDoc(docRef)
   return docSnap.exists()
}

export default isUserInDB
