import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebaseClient'

/**
 * Buscar un usario en la DB
 * @param {String} field Recibe un email o un nickname
 * @returns {Promise<DocumentData> | null} De no encontrar un usario en Firestore, retorna null, sino un objeto
 */
const findUser = async field => {
   const collRef = collection(db, 'users')
   const queryField = field.includes('@') ? 'email' : 'nickname'
   const myQuery = where(queryField, '==', field)
   const docSnap = await getDocs(query(collRef, myQuery))

   return docSnap.docs.map(doc => doc.data())[0] || null
}

export default findUser
