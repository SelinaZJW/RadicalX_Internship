import React, {createContext, useContext, useEffect, useState} from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";

const AuthContext = createContext();


//useAuth context that can be used across the app to access functionalities
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider ({children}) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    //get current user if auth state changed
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user?.uid)
    })
    
    console.log(auth.currentUser)

  }, [])


  const value = {
    currentUser,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}