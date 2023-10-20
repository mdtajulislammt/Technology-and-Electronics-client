import { Rating } from 'primereact/rating';
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
     const myCarts = useLoaderData()

     const [updateProduct, setUpdateProduct] = useState(myCarts)

     const handleDelete = (_id) => {
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
             }).then((result) => {
               if (result.isConfirmed) {
             
               fetch(`https://technology-and-electronics-server-5y2vicyzi.vercel.app/myCarts/${_id}`,{
                    method: 'DELETE'
                  
   
               })
               .then(res=>res.json())
               .then(data=>{
                console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire(
                          'Deleted!',
                          'Your Product has been deleted.',
                        'success'
                        )
                        const remaining = updateProduct.filter(item =>item._id !==_id);
                        console.log(setUpdateProduct(remaining));
                    }
 
               })
               }
             })
         
     }
     return (
          <div className=' dark:bg-black'>
               {
                    updateProduct.length > 0 ? (<div className=" grid md:grid-cols-3 lg:grid-cols-4 mx-14 pt-10 gap-5">
                    {
                         updateProduct?.map((myCart) =><>
               <div className="card  bg-[#ff7e00] shadow-xl">
               <Link><button onClick={()=>handleDelete(myCart._id)} className="bg-[#ff7e00]  border rounded-full  relative -top-4 -ml-3  text-black hover:text-white px-3 p-2 font-semibold hover:bg-[#000000] w-10 h-10"><AiOutlineClose/></button></Link>
               <figure className="p-4" ><img className=" w-full md:h-32 lg:h-52 rounded-lg" src={myCart.img}  alt={myCart.name} /></figure>
               <div className="p-4 dark:bg-black border-2 rounded-xl border-[#ff7e00] bg-white">
               
               <h2 className="card-title text-[#ff7e00] text-lg">{myCart.name}</h2>
               <h2 className=" text-[#ff7e00] text-lg font-medium">Brand Name :{myCart.brandname}</h2>
               <p className=" text-xl dark:text-white font-semibold">Price :{myCart.price}</p>
               <p className=" text-[#ff7e00]">Type :{myCart.type}</p>
               
               <div className="flex items-center gap-3">
               <Rating className="text-[#ff7e00]" value={myCart.rating} cancel={false} />
               <p className="  text-lg font-semibold dark:text-white"> {myCart.rating}</p>
               </div>
               
               </div>
               <div className="card-actions  justify-center mt-3 ">
                    
                    <Link to={`/brand/Apple/${myCart._id}`}><button className="bg-[#ff7e00] rounded-lg hover:text-black text-white px-3 p-2 font-semibold ">Details</button></Link>
               </div>
               </div>
                                        </>)
                    }
               </div>):(
                     <>
                     <section className="relative z-10 bg-[#ff7e00] py-[120px] mt-8">
                       <div className="container">
                         <div className="flex -mx-4">
                           <div className="w-full px-4">
                             <div className="mx-auto max-w-[500px] text-center">
                               
                               <h4 className="mb-3 text-[30px] font-semibold leading-tight text-white">
                                 Oops! Data can not be found 
                               </h4>
                               <p className="mb-8 text-lg text-white">
                                 The page you are looking for it maybe deleted
                               </p>
                               <Link to="/"
                                 className="inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-primary"
                               >
                                 Go to Home
                               </Link>
                             </div>
                           </div>
                         </div>
                       </div>
                       <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
                         <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                         <div className="flex w-1/3 h-full">
                           <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                           <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                         </div>
                         <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                       </div>
                     </section>
                     </>
               )
               }
               
          </div>
     );
};

export default MyCart;