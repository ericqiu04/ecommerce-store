import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
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
 
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  facebookProvider.setCustomParameters({
    prompt: "select_account"
  })
  googleProvider.setCustomParameters({
    prompt: "select_account"
  }) 

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const signInWithFacebookPopup = () => signInWithPopup(auth, facebookProvider);
  export const signInWithFacebookRedirect = () => signInWithPopup(auth, facebookProvider);
  export const db = getFirestore();

  export const createUserDocFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;

        const createAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createAt});
        }
        catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userDocRef;


      // if user does not exist
      //create / set document with data from userAuth from collection


      //if the user data exists
      //return userDocRef


  }