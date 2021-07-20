import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD35fO0W9EKyO3_phAH-sFtjGgWzmxDGlw",
    authDomain: "fir-3a784.firebaseapp.com",
    projectId: "fir-3a784",
    storageBucket: "fir-3a784.appspot.com",
    messagingSenderId: "271683272351",
    appId: "1:271683272351:web:63ff35516f755ba76c2caa",
    measurementId: "G-7YYEFK4YBP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };