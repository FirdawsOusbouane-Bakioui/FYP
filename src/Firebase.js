// import firebase from "firebase/app" doesnt work anymore
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

import { getFirestore } from 'firebase/firestore'

const app = firebase.initializeApp({
    //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    apiKey: "AIzaSyC3VvE9z-iXJCISOEDO1hbhMGEn87-Id3A",
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    authDomain: "auth-dev-4881c.firebaseapp.com",
    projectId: "auth-dev-4881c",
    storageBucket: "auth-dev-4881c.appspot.com",
    messagingSenderId: "755498442094",
    appId: "1:755498442094:web:ff3c2999ad91a6c8f4f57f"
})

// const db = getFirestore(app)
// export const DBevents = doc(db, 'events/newevent')

export const db =  getFirestore(app);

//export const db = app.firestore()

export const auth = app.auth()
export default app