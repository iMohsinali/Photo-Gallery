// Your web app's Firebase configuration
import * as firbase from './firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD3i9V11-sm11Oe8gUcnmnIbSzemDrxmmY",
    authDomain: "gilgitbaltistan-6fc54.firebaseapp.com",
    projectId: "gilgitbaltistan-6fc54",
    storageBucket: "gilgitbaltistan-6fc54.appspot.com",
    messagingSenderId: "308929947806",
    appId: "1:308929947806:web:1127e64ada4f7f2f7af38f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectstore = firbase.storage()
const projectbase = firbase.firestore()
export { projectbase, projectstore }