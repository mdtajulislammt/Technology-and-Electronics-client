import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiUser } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineSetting ,AiOutlineLogout} from 'react-icons/ai';
import { MdOutlineDashboardCustomize,MdNotificationsActive } from 'react-icons/md';


const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)
   const handleLogOut = ()=>{
    logOut()
   }


     const navLinks = <>
     <li><NavLink to='/'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#ffffff] hover:text-[#ffffff]  hover:bg-[#00000000] font-bold  underline" : "font-semibold "
              }>Home</NavLink></li>
     <li><NavLink to='/addProduct'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#ffffff] hover:text-[#ffffff]  hover:bg-[#00000000] font-bold  underline" : "font-semibold "
              }>Add Product</NavLink></li>
     <li><NavLink to='/myCarts'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#ffffff] hover:text-[#ffffff]  hover:bg-[#0000002b] font-bold  underline" : "font-semibold "
              }>My Cart</NavLink></li>
     </>
     return (
          <div>
              <div className="navbar bg-[#ff7e00] mb-0 px-5 md:px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to={'/'}><img src="https://i.ibb.co/7CLfL87/logo.webp" alt="" /></Link>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal gap-5 px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?  <div className="dropdown">
      <label tabIndex={0} className="  ">
        {
          user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#ffffff] h-10 w-10" /> : <CiUser className=" cursor-pointer border-2 border-[#ff7e00] text-black bg-slate-300 p-1 w-10 h-10 rounded-full"/>
        }
      
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content right-0 h-96 mt-5 w-80 z-[1] p-3 shadow border-2 border-[#ff7e00]  bg-slate-100  rounded-lg">
      {
          user.photoURL? <img src={user.photoURL} className="rounded-full border-2 border-[#ff7e00] mx-auto h-10 w-10" /> : <CiUser className=" cursor-pointer text-black bg-slate-300 p-1 w-10 h-10 mx-auto rounded-full"/>
        }
      <h2 className=" text-center text-lg font-semibold mt-2">{user.displayName}</h2>
      <div className=" border-t-2 my-2">
        <h2 className=" flex bg-[#ff8000af] hover:bg-[#ff7e00] p-2 rounded-lg text-black items-center gap-2 my-3 cursor-pointer "><CgProfile/> <span className="  hover:text-[#ffffff]">Profile</span></h2>
        <h2 className=" flex bg-[#ff8000af] hover:bg-[#ff7e00] p-2 rounded-lg text-black items-center gap-2 my-3 cursor-pointer "><MdOutlineDashboardCustomize/> <span className="  hover:text-[#ffffff]">Dashboard</span></h2>
        <h2 className=" flex bg-[#ff8000af] hover:bg-[#ff7e00] p-2 rounded-lg text-black items-center gap-2 my-3 cursor-pointer "><MdNotificationsActive/> <span className="  hover:text-[#ffffff]">Notifications</span></h2>
        <h2 className=" flex bg-[#ff8000af] hover:bg-[#ff7e00] p-2 rounded-lg text-black items-center gap-2 my-3 cursor-pointer "><AiOutlineSetting/> <span className="  hover:text-[#ffffff]">User Settings</span></h2>
       <button onClick={handleLogOut} className=" flex bg-[#ff8000af] hover:bg-[#ff7e00] w-full p-2 rounded-lg text-black items-center  gap-2 my-2 cursor-pointer text-b lack"><AiOutlineLogout/> <span className="  hover:text-[#ffffff]">LogOut</span></button>
      </div>
      
      </ul>
    </div>
      :<NavLink to='/login'  className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-[#ffffff] hover:text-[#ffffff]  hover:bg-[#00000000] font-bold  underline" : "font-semibold "
              }>LogIn</NavLink>
    }
    
    <div className=" ml-4">
    <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
    </div>
  </div>
    
</div>
          </div>
     );
};

export default Navbar;