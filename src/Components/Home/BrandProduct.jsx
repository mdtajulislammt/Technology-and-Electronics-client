import { Rating } from "@material-tailwind/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandProduct = ({ products }) => {
  return (
    <div className="dark:bg-black">
      
      <div className="carousel w-full lg:h-[400px] ">
  <div id="slide1" className="carousel-item relative w-full">
  <div className=" absolute ml-5 mt-10 md:ml-20 lg:mt-20">
            <h1 className=" text-[#ff7e00] text-xs  md:text-3xl font-semibold">Type C to 3.5mm Jack Earphone  Converter <br /> samsung headphone converter</h1>
            <p className="text-xl text-white md:my-4">Price <span className=" text-[#eb6b62]">$12.00</span></p>
            <button className="bg-white px-2 rounded md:btn md:px-10 mt-3">Visit</button>
          </div>
    <img src="https://i.ibb.co/Jnky0cF/ads2.webp" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative w-full">
          
        <img src="https://i.ibb.co/sCsnGsV/ads1.webp" className="w-full" />

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    

  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className=" absolute ml-5 mt-10 md:ml-20 lg:mt-20">
            <h1 className=" text-[#ffffff] text-xs  md:text-3xl font-semibold">Iphone X and Xs Discount Running</h1>
            <p className="text-xl text-white md:my-4">Price <span className=" text-[#ffffff]">$780.00</span></p>
            <button className="bg-white px-2 rounded md:btn md:px-10 mt-3">Visit</button>
          </div>
    <img src="https://i.ibb.co/yf7BkXk/pngtree-cool-new-mobile-phone-promotion-purple-banner-image-183067.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
<Link to={"/"} className=" flex items-center gap-3 w-40 bg-[#ff7e00] rounded-md text-white mx-auto mt-4 font-medium p-2 "><AiOutlineArrowLeft/> Go back Home</Link>
     <div className=" grid  md:grid-cols-3 lg:grid-cols-4 mx-14 mt-10 gap-5"> 
     {products.map((productItem) => {
        return (
          <>
            <div className="card  bg-[#ff7e00] shadow-xl">
  <figure className="p-4" ><img className=" w-full md:h-32 lg:h-52 rounded-lg" src={productItem.img}  alt={productItem.name} /></figure>
  <div className="p-4 border-2 rounded-xl border-[#ff7e00] bg-white dark:bg-black">
    
    <h2 className="card-title text-[#ff7e00] text-lg">{productItem.name}</h2>
    <h2 className=" text-[#ff7e00] text-lg font-medium">Brand Name :{productItem.brandname}</h2>
    <p className=" text-md font-semibold dark:text-white">Price :{productItem.price}</p>
    <p className=" text-[#ff7e00]">Type :{productItem.type}</p>
    <p className=" flex items-center dark:text-white gap-3 text-lg font-semibold"> <Rating className="text-[#ff7e00]   " value={4} /> {productItem.rating}</p>
    
  </div>
  <div className="card-actions  justify-between mt-3 ">
      <Link to={`/brand/products/${productItem._id}`}><button className="bg-[#ff7e00] rounded-lg hover:text-black text-white px-3 p-2 font-semibold">Update</button></Link>
      <Link to={`/brand/Apple/${productItem._id}`}><button className="bg-[#ff7e00] rounded-lg hover:text-black text-white px-3 p-2 font-semibold ">Details</button></Link>
    </div>
</div>
          </>
        );
      })}
     </div>
      
    </div>
  );
};

BrandProduct.propTypes = {

  products: PropTypes.node,
  }
  
export default BrandProduct;
