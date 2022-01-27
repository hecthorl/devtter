import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from 'helpers/constants'

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
