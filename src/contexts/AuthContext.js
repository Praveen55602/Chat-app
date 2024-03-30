import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  // const [auth, setAuth] = useState({});

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCOJjM4P-4w_o9aIABZpy_bcCDAMpapg7o",
    authDomain: "auth-development-1107a.firebaseapp.com",
    projectId: "auth-development-1107a",
    storageBucket: "auth-development-1107a.appspot.com",
    messagingSenderId: "709789744441",
    appId: "1:709789744441:web:619927750743a13c7b3ce8",
  });
  const auth = getAuth(firebaseApp);

  // useEffect(() => {
  //   // setAuth(auth);
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     console.log("on Auth State Change -", user);
  //     setCurrentUser(user);
  //     setLoading(false);
  //     //navigate("/");
  //   });

  //   return unsubscribe;
  // }, []);

  const value = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    auth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
