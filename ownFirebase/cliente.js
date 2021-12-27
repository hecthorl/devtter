import { initializeApp } from 'firebase/app'
import {
   collection,
   doc,
   getDoc,
   getDocs,
   getFirestore,
   onSnapshot,
   orderBy,
   query
} from 'firebase/firestore'
import 'firebase/storage'
import { configFirebase } from 'helpers/constants'
import { mapDevitfromFirebase } from 'helpers/devitsFromFirestore'
import throwError from 'helpers/throwError'

const app = initializeApp(configFirebase)
const db = getFirestore(app)

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
export const addDevit = ({ avatar, content, userId, img, username }) => {
   // if (firebase.apps.length !== 0) {
   //    return firebase.app().firestore().collection('devits').add({
   //       username,
   //       avatar,
   //       content,
   //       userId,
   //       img,
   //       createdAt: new Date().getTime(),
   //       likesCount: [],
   //       sharedCounts: []
   //    })
   // } else {
   //    throwError('Error al agregar devit')
   // }
}

/**
 * Función para obtener la lista de devits actualizada desde firebase.
 * @param {Function} upDateDevitts Callback para actualizar el array de devits en el timeline.
 * @returns {Promise<Array>} Retorna una promesa con toda la colección de objetos.
 */
export const listenLatestDevits = async upDateDevitts => {
   const devitsRef = collection(db, 'devits')
   const consulta = query(devitsRef, orderBy('createdAt', 'desc'))
   const devitSnap = await getDocs(consulta)
   upDateDevitts(devitSnap.docs.map(mapDevitfromFirebase))

   // if (true) {
   //    return (
   //       firebase
   //          .app()
   //          .firestore()
   //          .collection('devits')
   //          .orderBy('createdAt', 'desc')
   //          // .limit(2)
   //          .onSnapshot(({ docs }) => {
   //             const newDevits = docs.map(mapDevitfromFirebase)
   //             upDateDevitts(newDevits)
   //          })
   //    )
   // } else {
   //    throwError('Error al obtener colección de devit')
   // }
}

/**
 * Función con la que se obtiene la url de la imágen que se acaba de subir
 * @param {Object} file Referencia a la imagen
 * @returns Retorna una tarea de firebase.
 */
export const uploadImage = file => {
   // if (firebase.apps.length !== 0) {
   //    const ref = firebase
   //       .app()
   //       .storage(configFirebase.storageBucket)
   //       .ref(`images/${file.name}`)
   //    const task = ref.put(file)
   //    return task
   // }
}

/**
 * funcion que sirve para demostrar que aún soy un JR sad
 * @param {string} user ID del usuario
 * @param {string} doc ID del devit
 * @returns {Promise} Retorna una promesa si se actualizó correctamente.
 */
export const likeDevitt = (user, doc) => {
   // const devitRef = firebase.app().firestore().collection('devits').doc(doc)
   // return devitRef.update({
   //    likesCount: firebase.firestore.FieldValue.arrayUnion(user)
   // })
}

/**
 * funcion que sirve para demostrar que aún soy un JR sad
 * @param {string} user ID del usuario
 * @param {string} doc ID del devit
 * @returns {Promise} Retorna una promesa si se actualizó correctamente.
 */
export const unLikeDevitt = (user, doc) => {
   // const devitRef = firebase.app().firestore().collection('devits').doc(doc)
   // return devitRef.update({
   //    likesCount: firebase.firestore.FieldValue.arrayRemove(user)
   // })
}

/**
 * Función para consultar los datos de un solo devit
 * @param {string} docId ID del documento del que se extrae la info
 * @returns {Promise<object>} Promesa que resuelve un objeto con la info del devit
 */
export const devittStats = docId => {
   // const devitRef = firebase.app().firestore().collection('devits').doc(docId)
   // return devitRef.get()
}
