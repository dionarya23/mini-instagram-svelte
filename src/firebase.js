import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
   //yout credential
}

firebase.initializeApp(firebaseConfig)

export let auth = firebase.auth()
export let googleProvider = new firebase.auth.GoogleAuthProvider()
export let db = firebase.firestore()
