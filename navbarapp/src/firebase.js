import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCyI0VIhT-Xw5WXppFgtAmAY2eDdPR9CHQ',
    authDomain: 'reactjstorage.firebaseapp.com',
    projectId: 'reactjstorage',
    storageBucket: 'reactjstorage.appspot.com',
    messagingSenderId: '170645714162',
    appId: '1:170645714162:web:9b13466c8047d235e10c6b'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const serverStamp = firebase.firestore.Timestamp;

