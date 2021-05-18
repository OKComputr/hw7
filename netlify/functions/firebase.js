const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAeZEtx1YhXrNggJWrsAZ5qxbnGHV8gCvs",
authDomain: "course-database-5a564.firebaseapp.com",
projectId: "course-database-5a564",
storageBucket: "course-database-5a564.appspot.com",
messagingSenderId: "1082293711664",
appId: "1:1082293711664:web:28dbd8656dbc9df34ccef5"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase