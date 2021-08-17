import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import { configFirebase } from 'helpers/constants'
import { mapDevitfromFirebase } from 'helpers/devitsFromFirestore'

const { GithubAuthProvider } = firebase.auth

export const githubPovider = () => {
   const githubProv = new GithubAuthProvider()
   return firebase
      .app()
      .auth()
      .signInWithPopup(githubProv)
      .catch(err => console.error(err))
}

export const addDevit = ({ avatar, content, userId, img, username }) => {
   if (firebase.apps.length !== 0) {
      return firebase.app().firestore().collection('devits').add({
         username,
         avatar,
         content,
         userId,
         img,
         createdAt: new Date().getTime(),
         likesCount: [],
         sharedCounts: []
      })
   } else {
      throw Error('Error iterno')
   }
}

export const listenLatestDevits = upDateDevitts => {
   if (firebase.apps.length !== 0) {
      return (
         firebase
            .app()
            .firestore()
            .collection('devits')
            .orderBy('createdAt', 'desc')
            // .limit(2)
            .onSnapshot(({ docs }) => {
               const newDevits = docs.map(mapDevitfromFirebase)
               upDateDevitts(newDevits)
            })
      )
   }
}

export const uploadImage = file => {
   if (firebase.apps.length !== 0) {
      const ref = firebase
         .app()
         .storage(configFirebase.storageBucket)
         .ref(`images/${file.name}`)
      const task = ref.put(file)
      return task
   }
}

export const likeDevitt = (user, doc) => {
   const devitRef = firebase.app().firestore().collection('devits').doc(doc)
   return devitRef.update({
      likesCount: firebase.firestore.FieldValue.arrayUnion(user)
   })
}
export const unLikeDevitt = (user, doc) => {
   const devitRef = firebase.app().firestore().collection('devits').doc(doc)
   return devitRef.update({
      likesCount: firebase.firestore.FieldValue.arrayRemove(user)
   })
}

export const devittStats = docId => {
   const devitRef = firebase.app().firestore().collection('devits').doc(docId)
   return devitRef.get()
}
