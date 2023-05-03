import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut=()=>{
    return signOut(auth);

  }



  useEffect(() => {
  const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    });
    return ()=>{
      unSubscribe();
    }
  }, []);


  const updateProfileAndPhoto=(user,name,photo)=>{
   
    return updateProfile((user),{
      displayName:name,photoURL:photo,
    })

  }

  const authInfo = { user, createUser, signIn,logOut,updateProfileAndPhoto };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
