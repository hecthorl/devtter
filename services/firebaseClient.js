import { initializeApp } from 'firebase/app'
import {
   // arrayUnion,
   collection,
   doc,
   getFirestore,
   // onSnapshot,
   // orderBy,
   // query,
   setDoc
   // updateDoc
} from 'firebase/firestore'
import { configFirebase } from 'helpers/constants'
// import { mapDevitfromFirebase } from 'helpers/devitsFromFirestore'
// import throwError from 'helpers/throwError'

const app = initializeApp(configFirebase)
export const db = getFirestore(app)

/**
 * Función para añadir devit a la colección.
 * @param {Object} devitInputs - Información que conforma el cuerpo de un devit.
 * @param {string} devitInputs.avatar - URL, Foto del usuario que crea el devit.
 * @param {string} devitInputs.content - Texto plano. Puede venir o no
 * @param {string} devitInputs.userId - ID del usuario, dado por firebase.
 * @param {string} devitInputs.img - URL, Imágen que usuario sube con el devit. Puede venir o no.
 * @param {string} devitInputs.username - Nombre del usuario en Github.
 * @returns {Promise} Retorna una promesa de firebase para agregar una nuevo devit a la colección.
 */
export const addDevit = devit => {
   const devvitsReff = doc(collection(db, 'devits'))
   return setDoc(devvitsReff, devit)
}

// /**
//  * Función para obtener la lista de devits actualizada desde firebase.
//  * @param {Function} upDateDevitts Callback para actualizar el array de devits en el timeline.
//  * @returns {Array} Retorna toda la colección de objetos.
//  */
// export const listenLatestDevits = upDateDevitts => {
//    const consulta = query(
//       collection(db, 'devits'),
//       orderBy('createdAt', 'desc')
//    )
//    const unSubscribe = onSnapshot(consulta, querySnapshot => {
//       const newDevits = querySnapshot.docs.map(mapDevitfromFirebase)
//       upDateDevitts(newDevits)
//    })
//    return unSubscribe
// }

// /**
//  * funcion que sirve para demostrar que aún soy un JR sad
//  * @param {string} user ID del usuario
//  * @param {string} doc ID del devit
//  * @returns {Promise} Retorna una promesa si se actualizó correctamente.
//  */
// export const likeDevitt = async (user, docId) => {
//    // const collInstance = collection(db, 'devits')
//    const docRef = doc(db, 'devits', docId)
//    await updateDoc(docRef, {
//       likesCount: arrayUnion(user)
//    })
//    // const devitRef = firebase.app().firestore().collection('devits').doc(docId)
//    // return devitRef.update({
//    //    likesCount: firebase.firestore.FieldValue.arrayUnion(user)
//    // })
// }

// /**
//  * funcion que sirve para demostrar que aún soy un JR sad
//  * @param {string} user ID del usuario
//  * @param {string} doc ID del devit
//  * @returns {Promise} Retorna una promesa si se actualizó correctamente.
//  */
// export const unLikeDevitt = (user, doc) => {
//    // const devitRef = firebase.app().firestore().collection('devits').doc(doc)
//    // return devitRef.update({
//    //    likesCount: firebase.firestore.FieldValue.arrayRemove(user)
//    // })
// }

// /**
//  * Función para consultar los datos de un solo devit
//  * @param {string} docId ID del documento del que se extrae la info
//  * @returns {Promise<object>} Promesa que resuelve un objeto con la info del devit
//  */
// export const devittStats = docId => {
//    // const devitRef = firebase.app().firestore().collection('devits').doc(docId)
//    // return devitRef.get()
// }
