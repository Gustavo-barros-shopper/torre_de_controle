import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
})

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.addScope('profile')
googleProvider.addScope('email')
googleProvider.setCustomParameters({
    hd: process.env.REACT_APP_GSUITE_DOMAIN
})

export const storage = firebase.storage()

app.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default app
