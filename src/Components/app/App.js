import LandingPage from "../landingPage/LandingPage";
import "./App.css";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Firebase from "../firebase/Firebase";
import ChatApp from "../chatapp/Chatapp";
import { RouterProvider } from "react-router-dom";
import ComponentRoutes from "../routing/Routes";

function App() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, loading, setLoading, auth } = useAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("on Auth State Change -", user);
      setCurrentUser(user);
      setLoading(false);
      // navigate("/");
    });

    // return unsubscribe;
  }, []);

  return (
    <div className="App">{currentUser ? <ChatApp /> : <LandingPage />}</div>
  );
}

export default App;
