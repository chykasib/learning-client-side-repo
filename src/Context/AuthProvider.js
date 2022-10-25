import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const singInGoogle = () => {
        setUser(true)
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            return setUser(currentUser)
            // if (currentUser === null || currentUser.emailVerified) {

            // }
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const userInfo = {
        user,
        loading,
        setLoading,
        singInGoogle
    };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;