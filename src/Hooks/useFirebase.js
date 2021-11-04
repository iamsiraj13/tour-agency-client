
import initialAuth from '../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

initialAuth();

const useFirebase = () => {
    const [user, setUser] = useState({}); 
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)

    }

    // sign out 
    const logout = () => {
       return signOut(auth)
           
    }

    // save logged user data 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth]);


    return {
        signInUsingGoogle,
        user,
        error,
        logout,
        setUser,
        setError

    }

};

export default useFirebase;