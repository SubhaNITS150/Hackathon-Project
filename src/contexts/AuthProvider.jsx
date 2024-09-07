import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Backend/firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    //create account
    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
      
    }

    //signup with gmail
    const signUpWithGmail = () => {
      return signInWithPopup(auth, googleProvider);
    }

    //login using email and password
    const login = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }

    //Logout
    const logOut = () => {
      signOut(auth);
    }

    //update profile
    const updateUserProfile = ({name, photoURL}) => {
      updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
    }

    useEffect(() => {
        console.log("User:", user);  // Logs "Subha" when the component mounts 
        //To be updated on navbar
    }, [user]);

    //signin user
    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setloading(false);
        } else {
          // User is signed out
          // ...
        }
      });

      return () => {
        return unsubscribe();
      }
    }, [])

    const authInfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile
    }

  return (

    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
