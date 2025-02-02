import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'register',
            element: <Register/>
        },
        {
          path: 'signIn',
          element: <SignIn/>
        },
      ]
    },
  ]);
  
  export default router