import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Rating } from "@material-tailwind/react";

const ProductDetail = () => {
     const {id} = useParams();
     const [product, setProduct] = useState({});
     const productData = useLoaderData();
     const {_id,name,img,brandname,type,price,rating,description} = product || {};

     useEffect(()=>{
          const findProductData = productData?.find(productItem =>productItem._id== id)
          setProduct(findProductData)

     },[id,productData])
     return (
          <div className=" mt-10 ">
               <div className="flex justify-between">
               <Link to={`/brand/${brandname}`} className="flex  mb-5 mx-28 px-4 items-center gap-3  bg-[#ff7e00] rounded-md text-white font-medium p-2 "><AiOutlineArrowLeft/> Go back</Link>
               <Link to={`/myCart${_id}`} className=" flex mb-5 mx-28 items-center text-center gap-3 px-4 bg-[#ff7e00] rounded-md text-white font-medium p-2 ">Add to Cart</Link>
               </div>
               
          <div  className="  mx-28 bg-[#ff7e00] rounded-xl items-center  p-10">
          <img className="object-cover w-full  h-full lg:h-96 rounded-xl" src={img} alt=""/>
          
          <div className="flex flex-col bg-white mt-4 rounded-xl justify-between p-4 leading-normal">
               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          <div>
               <p>Brand Name : {brandname}</p>
               <h1 className=" text-xl font-bold"><span>Price :$ </span>{price}</h1>
               <h1 className=" text-lg font-semibold">Type: {type}</h1>
               <p className=" flex items-center gap-3 text-lg font-semibold"> <Rating className="text-[#ff7e00] flex  my-4" value={rating} /> {rating}</p>
          </div>
               <p className="mb-3 text-lg font-medium mt-4">{description}</p>
          </div>
          </div>

          </div>
     );
};

export default ProductDetail;