import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuhProvider({children}){
    const [currentUser,setCurrentUser] = useState(null)
    const [userLoggenIn,setUserLoggenIn] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,intializeUser);
        return unsubscribe
    },[])

    async function intializeUser(user){
        if(user){
            setCurrentUser({...user})
            setUserLoggenIn(true)
        }
        else{
            setCurrentUser(null)
            setUserLoggenIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLoggenIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}