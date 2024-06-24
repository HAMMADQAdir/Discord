import { auth } from "./firebase";
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email,password)=>{
    try {
        
        return createUserWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
    }
}

export const doSignInWithEmailAndPassword =async (email,password)=>{
    try {
        
        return signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
    }
}

export const doSignInWithGoogle = async ()=>{
    try {
        
        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup(auth,provider)
        return result
    } catch (error) {
        console.log(error)
    }
}

export const doSignOut = async ()=>{
    try {
        
        return auth.signOut()
    } catch (error) {
        console.log(error)
    }
}