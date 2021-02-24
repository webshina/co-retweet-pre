import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA18sVh1ftB71XXPly5ljNJdLKE46Ort9A",
    authDomain: "chat-app-76b70.firebaseapp.com",
    databaseURL: "https://chat-app-76b70-default-rtdb.firebaseio.com",
    projectId: "chat-app-76b70",
    storageBucket: "chat-app-76b70.appspot.com",
    messagingSenderId: "265801403310",
    appId: "1:265801403310:web:29955d745f204a02bd963f",
    measurementId: "G-2Y9R43K713"
  })
}

export default firebase