import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAQm_-qLCd3dSkcFgRUHwLF9E-m2-JLAHs",
    authDomain: "social-media-app-d0535.firebaseapp.com",
    projectId: "social-media-app-d0535",
    storageBucket: "social-media-app-d0535.appspot.com",
    messagingSenderId: "26107210505",
    appId: "1:26107210505:web:c51b3375e733bd05b181d8",
    measurementId: "G-D6QVES7JKF"
};

firebase.initializeApp(firebaseConfig)
let db=firebase.firestore();
let auth=firebase.auth();
let timestamp =firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp,auth}