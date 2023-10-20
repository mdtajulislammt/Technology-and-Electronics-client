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
import ProductDetail from './Components/ProductDetail';
import MyCart from './MyCart/MyCart';
import AddProduct from './AddProduct/AddProduct';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import SingUp from './Components/LogIn/SingUp';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivedRoute from './PrivedRoute/PrivedRoute';

 

 const router = createBrowserRouter([
  {
  path: "/",
  errorElement:<ErrorPage></ErrorPage>,
   element:<Root></Root>,
   loader: ()=> fetch('/sellProducts.json'),
   children:[
    {
      path: "/",
       element:<Home></Home>,
       loader: ()=> fetch('https://technology-and-electronics-server-5y2vicyzi.vercel.app/brand')
    },
    {
      path: "/brand/:brandname",
       element:<BrandProducts></BrandProducts>,
       loader: ()=> fetch('https://technology-and-electronics-server-5y2vicyzi.vercel.app/brand/products')
    },
    {
      path:"/brand/products/:id",
      element:<PrivedRoute><UpdateProduct></UpdateProduct></PrivedRoute>,
      loader: ({params})=> fetch(`https://technology-and-electronics-server-5y2vicyzi.vercel.app/brand/products/${params.id}`)
    },
    {
      path:"/brand/Apple/:id",
      element:<PrivedRoute><ProductDetail></ProductDetail></PrivedRoute>,
      loader: ()=> fetch('https://technology-and-electronics-server-5y2vicyzi.vercel.app/brand/products')
    },
   
    {
      path:"/myCarts",
      element:<PrivedRoute><MyCart></MyCart></PrivedRoute>,
      loader: ()=> fetch(`https://technology-and-electronics-server-5y2vicyzi.vercel.app/myCarts`)
     
    },
    {
      path:"/addProduct",
      element:<PrivedRoute><AddProduct></AddProduct></PrivedRoute>,
     
    },
    {
      path:'/login',
      element:<LogIn></LogIn>
    },
    {
      path:'/singUp',
      element:<SingUp></SingUp>
    }
   ]
   },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />  
    </AuthProvider>
    
  </React.StrictMode>,
)
