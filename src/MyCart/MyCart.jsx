import { Rating } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
     const myCarts = useLoaderData()
     return (
          <div>
               <div className=" grid md:grid-cols-3 lg:grid-cols-4 mx-14 mt-10 gap-5">
                    {
                         myCarts?.map((myCart) =><>
               <div className="card  bg-[#ff7e00] shadow-xl">
               <Link><button className="bg-[#ff7e00] border rounded-full  relative -top-4 -ml-3  text-black hover:text-white px-3 p-2 font-semibold hover:bg-[#000000] w-10 h-10"><AiOutlineClose/></button></Link>
               <figure className="p-4" ><img className=" w-full md:h-32 lg:h-52 rounded-lg" src={myCart.img}  alt={myCart.name} /></figure>
               <div className="p-4 border-2 rounded-xl border-[#ff7e00] bg-white">
               
               <h2 className="card-title text-[#ff7e00] text-2xl">{myCart.name}</h2>
               <h2 className=" text-[#ff7e00] text-lg font-medium">Brand Name :{myCart.brandname}</h2>
               <p className=" text-xl font-semibold">Price :{myCart.price}</p>
               <p className=" text-[#ff7e00]">Type :{myCart.type}</p>
               <p className=" flex items-center gap-3 text-lg font-semibold"> <Rating className="text-[#ff7e00] flex " value={4} /> {myCart.rating}</p>
               
               </div>
               <div className="card-actions  justify-center mt-3 ">
                    
                    <Link to={`/brand/Apple/${myCart._id}`}><button className="bg-[#ff7e00] rounded-lg hover:text-black text-white px-3 p-2 font-semibold ">Details</button></Link>
               </div>
               </div>
                                        </>)
                    }
               </div>
          </div>
     );
};

export default MyCart;