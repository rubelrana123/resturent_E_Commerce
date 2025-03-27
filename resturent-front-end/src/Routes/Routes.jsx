import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
 
 
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Signout from "../Pages/SignIn/Signin";
import Signin from "../Pages/SignIn/Signin";
import Shop from "../Pages/OurShop/Shop/Shop";
 

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      //children route
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path : "menu",
          element : <Menu></Menu>,
    
        },
        {
          path : "shop",
          element : <Shop></Shop>,
    
        },
        // {
        //   path : "signout",
        //   element : <Signin></Signin>,
    
        // },

        // {
        //   path : "login",
        //   element : <Login></Login>,
    
        // }
      ]
    },
  ]);