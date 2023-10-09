import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBYG6NRQ6P5Utl1Ttbcd1Nc1Ac8qP5qp7k",
  authDomain: "deakin-web-app-4bfbc.firebaseapp.com",
  projectId: "deakin-web-app-4bfbc",
  storageBucket: "deakin-web-app-4bfbc.appspot.com",
  messagingSenderId: "915802194620",
  appId: "1:915802194620:web:d1ecede210900b0b39c6b9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
            prompt:"select_account"
        });

    export const auth = getAuth();
    export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
    export const db = getFirestore();   


    export const createUserDocFromAuth = async (userAuth, additionalInformation ={}) =>{
        
        if(!userAuth.email) return;
        const userDocRef = doc(db,'users', userAuth.uid );
        const userSnapshot = await getDoc(userDocRef);


     if (! userSnapshot.exists()){
        const{displayName, email} = userAuth;
        const createdAt = new Date();
    

      try{
            await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
            })
        }
        catch(error){
        console.log('error in creating', error.message)
        }

        return userDocRef;
    }
}



export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if(! email | !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);


}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    try {
      // Use Firebase's signInWithEmailAndPassword method
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      // Return the user credential, which contains user information
      return userCredential;
    } catch (error) {
      console.error('Sign-in failed:', error.message);
    }
  };
  
  