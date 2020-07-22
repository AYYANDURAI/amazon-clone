import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5z3Gevo2_HUadKuq4pimnHDEDoiBYZ6o",
    authDomain: "clone-37c4a.firebaseapp.com",
    databaseURL: "https://clone-37c4a.firebaseio.com",
    projectId: "clone-37c4a",
    storageBucket: "clone-37c4a.appspot.com",
    messagingSenderId: "274436855781",
    appId: "1:274436855781:web:96aa103e9de353123a410c",
    measurementId: "G-01HLYYHWJJ"
});

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };