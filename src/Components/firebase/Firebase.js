import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

function Firebase() {
  const { setCurrentUser, setLoading } = useAuth();
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyCOJjM4P-4w_o9aIABZpy_bcCDAMpapg7o",
    authDomain: "auth-development-1107a.firebaseapp.com",
    projectId: "auth-development-1107a",
    storageBucket: "auth-development-1107a.appspot.com",
    messagingSenderId: "709789744441",
    appId: "1:709789744441:web:619927750743a13c7b3ce8",
  });
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  useEffect(() => {
    // setAuth(auth);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("on Auth State Change -", user);
      setCurrentUser(user);
      setLoading(false);
      navigate("/");
    });

    // return unsubscribe;
  }, []);
}

export default Firebase;
