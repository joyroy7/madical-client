


import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Maain from "../Layout/Maain";
import Home from "../pages/Home/Home/Home";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps/AvailableCamps";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
 

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Maain></Maain>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'AvailableCamps',
          element:<AvailableCamps></AvailableCamps>
        },
        {
          path: 'contact',
        element:<Contact></Contact>
        },
        {
          path:'login',
          element:<Login></Login>
        }

      ]
    },
  ]);