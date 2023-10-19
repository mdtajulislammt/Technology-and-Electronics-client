import { Outlet } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";




const Root = () => {
     return (
          <div className=" font-poppins">
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
               <ToastContainer />
                
          </div>
     );
};

export default Root;