import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT-j2l5d9Io6a9oPyXif82fadrd_dy6NA",
    authDomain: "crwn-clothing-db-755ad.firebaseapp.com",
    projectId: "crwn-clothing-db-755ad",
    storageBucket: "crwn-clothing-db-755ad.appspot.com",
    messagingSenderId: "535681013981",
    appId: "1:535681013981:web:c81e43dda2a15ef3d8a334"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
 
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  }) 

  export const auth = getAuth();

  export const signInWithGooglePopup = () =>signInWithPopup(auth, provider);