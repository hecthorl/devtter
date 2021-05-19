const admin = require('firebase-admin')

try {
   const serviceAccount = require('../admin_firebase.json')
   admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
   })
} catch {}

export const firestore = admin.firestore()
