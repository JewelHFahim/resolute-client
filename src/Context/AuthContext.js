import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const UserContext = createContext();

const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updatedProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // const [dbImgs, setDbImgs] = useState([]);
  // useEffect(()=>{
  //   fetch(`https://crud-task-server.vercel.app/users`)
  //   .then(res => res.json())
  //   .then(data => setDbImgs(data))
  // },[])

  // const userImg = dbImgs.map(uimg => <li key = {uimg._id}>{uimg}</li>)

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut,
    googleLogin,
    updatedProfile,
    loading,
  };

  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
