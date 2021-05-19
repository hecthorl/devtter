import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const configFirebase = {
   apiKey: 'AIzaSyBBDq8aN58spe3fEcYmngFU1m143VcE8Qs',
   authDomain: 'chat-app-hector.firebaseapp.com',
   projectId: 'chat-app-hector',
   storageBucket: 'chat-app-hector.appspot.com',
   messagingSenderId: '835835726435',
   appId: '1:835835726435:web:827febe7c8f24cd92a0656'
}

const app = !firebase.apps.length && firebase.initializeApp(configFirebase)

const { GithubAuthProvider } = firebase.auth

const mapUserFromFirebase = user => {
   if (!user) return
   const { email, photoURL, displayName, uid } = user

   return { avatar: photoURL, email, username: displayName, uid }
}

export const authStateChanged = onChange => {
   if (firebase.apps.length !== 0) {
      return app.auth().onAuthStateChanged(user => {
         const normalizeUser = user ? mapUserFromFirebase(user) : null
         onChange(normalizeUser)
      })
   }
}

export const githubPovider = () => {
   const githubProv = new GithubAuthProvider()
   return (
      app
         .auth()
         .signInWithPopup(githubProv)
         // .then(mapUserFromFirebase)
         .catch(err => console.error(err))
   )
}
// export const googleProvider = new app.auth.GoogleAuthProvider();
export const addDevit = ({ avatar, content, userId, img, username }) => {
   if (firebase.apps.length !== 0) {
      return app.firestore().collection('devits').add({
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
      console.log('app.firestore()')
   }
}

const mapDevitfromFirebase = doc => {
   const data = doc.data()
   return {
      id: doc.id,
      ...data
   }
}

export const listenLatestDevits = callback => {
   if (firebase.apps.length !== 0) {
      return (
         app
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

// export const fetchLatestDevits = () => {
//    if (firebase.apps.length !== 0) {
//       return app
//          .firestore()
//          .collection('devits')
//          .orderBy('createdAt', 'desc')
//          .limit(2)
//          .get()
//          .then(snapShot => snapShot.docs.map(mapDevitfromFirebase))
//    }
// }

export const uploadImage = file => {
   if (firebase.apps.length !== 0) {
      const ref = app.storage().ref(`images/${file.name}`)
      const task = ref.put(file)
      return task
   }
}
