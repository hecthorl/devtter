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
         likesCount: 0,
         sharedCounts: 0
      })
   } else {
      throw Error('Error iterno')
   }
}

export const listenLatestDevits = callback => {
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
               callback(newDevits)
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
