import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyA9--oBqtx0x13CdRxsvu5Wsa4ILKffRG4",
    authDomain: "vue-proyecto2.firebaseapp.com",
    databaseURL: "https://vue-proyecto2.firebaseio.com",
    projectId: "vue-proyecto2",
    storageBucket: "vue-proyecto2.appspot.com",
    messagingSenderId: "1068075623516",
    appId: "1:1068075623516:web:6aa4a2ec409ee81628b299"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();