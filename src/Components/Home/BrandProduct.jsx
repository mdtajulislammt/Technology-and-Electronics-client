const BrandProduct = ({ products }) => {
  return (
    <div>
      <div className="carousel w-full lg:h-[400px]">
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
     <div className=" grid md:grid-cols-3 lg:grid-cols-4 mx-14 mt-10 gap-5"> 
     {products.map((productItem) => {
        return (
          <>
            <div className="card  bg-[#ff7e00] shadow-xl">
  <figure className="p-4" ><img className=" w-full md:h-32 lg:h-52 rounded-lg" src={productItem.img}  alt={productItem.name} /></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{productItem.name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Update</div> 
      <div className="badge badge-outline">Details</div>
    </div>
  </div>
</div>
          </>
        );
      })}
     </div>
      
    </div>
  );
};

export default BrandProduct;
