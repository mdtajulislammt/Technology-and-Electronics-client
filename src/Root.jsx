import { Outlet } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Footer from "./Components/Footer/Footer";



const Root = () => {
     return (
          <div className=" font-poppins">
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

export default Root;