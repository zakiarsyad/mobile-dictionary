import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyA_3_SxlucEH0QhD829QhdBKYDrKHej3bQ",
    authDomain: "password-manager-d6d83.firebaseapp.com",
    projectId: "password-manager-d6d83"
})

export default ({
    firestore: firebase.firestore(),
    fireauth: firebase.auth()
})