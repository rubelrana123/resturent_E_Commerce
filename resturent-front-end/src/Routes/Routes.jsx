import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
 
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
 

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element : <OurShop></OurShop>,
    
        },
        {
          path : "login",
          element : <Login></Login>,
    
        }
      ]
    },
  ]);