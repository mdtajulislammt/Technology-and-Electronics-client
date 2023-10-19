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
      path:"/brand/products/:id",
      element:<PrivedRoute><UpdateProduct></UpdateProduct></PrivedRoute>,
      loader: ({params})=> fetch(`http://localhost:5000/brand/products/${params.id}`)
    },
    {
      path:"/brand/Apple/:id",
      element:<PrivedRoute><ProductDetail></ProductDetail></PrivedRoute>,
      loader: ()=> fetch('http://localhost:5000/brand/products')
    },
    {
      path:"/myCarts",
      element:<PrivedRoute><MyCart></MyCart></PrivedRoute>,
      loader: ()=> fetch(`http://localhost:5000/myCarts`)
     
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
