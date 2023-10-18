import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
 } from "react-router-dom";
import Root from './Root.jsx';
import Home from './Components/Home.jsx';
import ErrorPage from './ErrorPage';
import BrandProducts from './Components/BrandProducts';
import LogIn from './Components/LogIn/LogIn';
 

 const router = createBrowserRouter([
  {
  path: "/",
  errorElement:<ErrorPage></ErrorPage>,
   element:<Root></Root>,
   children:[
    {
      path: "/",
       element:<Home></Home>,
       loader: ()=> fetch('http://localhost:5000/brand')
    },
    {
      path: "/brand/:brandname",
       element:<BrandProducts></BrandProducts>,
       loader: ()=> fetch('http://localhost:5000/brand/products')
    },
    {
      path:'/login',
      element:<LogIn></LogIn>
    }
   ]
   },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
