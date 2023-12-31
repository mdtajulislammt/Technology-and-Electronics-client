import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Rating } from 'primereact/rating';
import Swal from "sweetalert2";

const ProductDetail = () => {
     const {id} = useParams();
     const [product, setProduct] = useState({});
     const productData = useLoaderData();
     const {name,img,brandname,type,price,rating,description} = product || {};

     useEffect(()=>{
          const findProductData = productData?.find(productItem =>productItem._id== id)
          setProduct(findProductData)

     },[id,productData])

     const handleAddToCart = ()=>{
          const newProduct = {
               name:name,
               img:img,
               brandname:brandname,
               type:type,
               price:price,
               rating:rating,
               description:description

          }
          console.log(newProduct);
       //server 
     fetch("https://technology-and-electronics-server-a79lbuqf1.vercel.app/myCarts",{
          method:"POST",
          headers:{
               "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
     })
     .then(res=>res.json())
     .then(data=>{
          if(data.insertedId){
             Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Product Added Success',
               showConfirmButton: false,
               timer: 1500
             })  
          }
          
     })   
    
     }

     
     return (
          <div className=" pt-10 dark:bg-black px-5  lg:px-28">
               <div className="flex justify-between">
               <Link to={`/brand/${brandname}`} className="flex  mb-5  px-4 items-center gap-3  bg-[#ff7e00] rounded-md text-white font-medium p-2 "><AiOutlineArrowLeft/> Go back</Link>
               <Link  onClick={handleAddToCart} className=" flex mb-5  items-center text-center gap-3 px-4 bg-[#ff7e00] hover:text-black rounded-md text-white font-medium p-2 ">Add to Cart</Link>
               </div>
               
          <div  className="   bg-[#ff7e00] rounded-xl items-center  p-10">
          <img className="object-cover w-full  h-full lg:h-96 rounded-xl" src={img} alt=""/>
          
          <div className="flex dark:bg-black dark:text-white flex-col bg-white mt-4 rounded-xl justify-between p-4 leading-normal">
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <div className=" ">
               <p>Brand Name : {brandname}</p>
               <h1 className=" text-xl font-bold"><span>Price :$ </span>{price}</h1>
               <h1 className=" text-lg font-semibold">Type: {type}</h1>
               <div className="flex items-center gap-3 ">
                    
                    <Rating className="text-[#ff7e00] " value={rating}  cancel={false} />
                    
                    <p className="  text-lg dark:text-white font-semibold">  {rating}</p>
               </div>
               
          </div>
               <p className="mb-3 text-lg font-medium mt-4">{description}</p>
          </div>
          </div>

          </div>
     );
};

export default ProductDetail;