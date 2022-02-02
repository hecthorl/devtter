import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebaseClient'

/**
 * Buscar un usario en la DB
 * @param {String} field Recibe un email o un nickname
 * @returns {Promise<import('firebase/firestore').DocumentData>} De no encontrar un usario en Firestore, retorna undefined, sino un objeto
 */
const findUser = async field => {
   const collRef = collection(db, 'users')
   const queryField = field.includes('@') ? 'email' : 'nickname'
   const myQuery = where(queryField, '==', field)
   const docSnap = await getDocs(query(collRef, myQuery))

   return docSnap.docs.map(doc => doc.data())[0]
}

export default findUser
