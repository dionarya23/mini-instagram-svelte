import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDlaqwNzzqYahvxN4qf1f3Ut84-hJZXJw8",
    authDomain: "small-talk-42dc0.firebaseapp.com",
    databaseURL: "https://small-talk-42dc0.firebaseio.com",
    projectId: "small-talk-42dc0",
    storageBucket: "small-talk-42dc0.appspot.com",
    messagingSenderId: "1091250868353",
    appId: "1:1091250868353:web:0d9f1a6e7283ba52"
}

firebase.initializeApp(firebaseConfig)

export let auth = firebase.auth()
export let googleProvider = new firebase.auth.GoogleAuthProvider()
export let db = firebase.firestore()
