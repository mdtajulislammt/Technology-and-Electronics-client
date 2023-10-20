import { Outlet } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import SellProducts from "./SellProducts/SellProducts";
import { useEffect, useState } from "react";




const Root = () => {
     const [theme, setTheme] = useState('light')

     useEffect(()=>{
          document.body.className = theme ;
     },[theme])
     return (
          <div className=" font-poppins">
               <Navbar theme={theme} setTheme={setTheme}></Navbar>
               <Outlet></Outlet>
               <SellProducts></SellProducts>
               <Footer></Footer>
               <ToastContainer />
                
          </div>
     );
};

export default Root;