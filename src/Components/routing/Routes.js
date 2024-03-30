import React from "react";
import App from "../app/App";
import Signup from "../signup/Signup";
import Login from "../login/Login";
import { createBrowserRouter } from "react-router-dom";

// const appRoutes = (
//   <Routes>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/login" element={<Login />} />

//     <Route path="/signup" element={<Signup />} />
//   </Routes>
// );

//export default appRoutes; // Export the routes for use in your main app
const ComponentRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "signup",
    //     element: <Signup />,
    //   },
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    // ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default ComponentRoutes;
