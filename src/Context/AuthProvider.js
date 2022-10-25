import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInGoogle = () => {
        setUser(true)
        return signInWithPopup(auth, googleProvider);
    }

    const singInGithub = () => {
        setUser(true)
        return signInWithPopup(auth, githubProvider);
    }

    const createUser = (email, password) => {
        setUser(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSingIn = (email, password) => {
        setUser(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = () => {
        setUser(true)
        return signOut(auth)
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
        singInGoogle,
        singInGithub,
        signUp,
        createUser,
        userSingIn

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