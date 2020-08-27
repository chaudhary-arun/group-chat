import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB6mGQ8sM-DCTCiHeoQFAE9Y1q5LUDnqLw",
        authDomain: "messenger-clone-24e3a.firebaseapp.com",
        databaseURL: "https://messenger-clone-24e3a.firebaseio.com",
        projectId: "messenger-clone-24e3a",
        storageBucket: "messenger-clone-24e3a.appspot.com",
        messagingSenderId: "472907477010",
        appId: "1:472907477010:web:77e730a561fc8b6b3be8cb",
        measurementId: "G-31HDQ4NTCG"
});

const db = firebaseApp.firestore();

export default db;