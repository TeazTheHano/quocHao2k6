import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3mzxuFsLUTxt5OZ9JNjI02OEwA1yLA1I",
    authDomain: "quochao2k6-203.firebaseapp.com",
    databaseURL: "https://quochao2k6-203-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "quochao2k6-203",
    storageBucket: "quochao2k6-203.appspot.com",
    messagingSenderId: "359129948135",
    appId: "1:359129948135:web:5132e55a065b6865ea6742",
    measurementId: "G-6HB23N4V0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { auth, db };