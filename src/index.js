import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import ComponentRoutes from "./Components/routing/Routes";
import { RouterProvider } from "react-router-dom";
import Firebase from "./Components/firebase/Firebase";
import App from "./Components/app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ComponentRoutes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
