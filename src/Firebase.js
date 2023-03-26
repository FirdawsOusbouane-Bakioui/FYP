// import firebase from "firebase/app" doesnt work anymore
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    //apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    apiKey: "AIzaSyC3VvE9z-iXJCISOEDO1hbhMGEn87-Id3A",
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app