import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider()
    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    console.log(user)

    const [estate, setEstate] = useState([])
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setEstate(data))
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const AuthInfo = { GoogleSignIn, user, estate, logOut }


    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;