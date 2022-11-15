// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
import{ getFirestore,doc,getdoc,setdoc, getDoc, setDoc}from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBgTZjn-8vC0cuSVwDdjgsnzzZGB8ImAjc",
  authDomain: "my-ecom-db-40a5f.firebaseapp.com",
  projectId: "my-ecom-db-40a5f",
  storageBucket: "my-ecom-db-40a5f.appspot.com",
  messagingSenderId: "524805465360",
  appId: "1:524805465360:web:7b1d9ea3e26a7c0f15f195"
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt:"select_account"
})
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db=getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid)
                //parameters : 1 database 2 collections 3 uniqueIdentifier
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)
                            //getDoc will try to get get data from a document
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
                    // exists method tells that if the instance of data/document exists or not

                    //if user data does not exist
                    //create / set the document with data from userAuth in my collection         
   if(!userSnapshot.exists()){
    //if doesn't exist we create user with fields displayName,email,CreatedAt
        const { displayName, email}=userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating user ',error.message);
        }
    }

    //if user data exists
    //return  userDocRef
    return userDocRef
}