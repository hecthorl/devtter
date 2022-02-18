import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from './firebaseClient'

/**
 * Buscar un usario en la DB
 * @param {String} field Recibe un email o un nickname
 * @returns {Promise<DocumentData> | null} Retorna el objeto usuario de Firestore o null.
 */
const findUser = async field => {
   const collRef = collection(db, 'users')
   const queryField = /(.+)@(.+){2,}\.(.+){2,}/.test(field)
      ? 'email'
      : 'nickname'
   const myQuery = where(queryField, '==', field)
   const docSnap = await getDocs(query(collRef, myQuery))

   return docSnap.docs.map(doc => doc.data())[0] || null
}

export default findUser
