const Banner = () => {
  return (
    <div className="mb-28 ">
      <div>
        <img
          className="  w-full h-[50vh] md:h-[70vh] lg:h-full border"
          src="https://i.ibb.co/SVYFpB4/ezgif-com-webp-to-jpg.jpg"
          alt=""
        />
      </div>
      <div className=" -mt-44 md:-mt-60 lg:-mt-80 ml-5 lg:ml-20">
        <p className=" text-[10px] md:text-sm lg:text-lg font-medium">Sale Offer <span className=" text-[#eb6b62]">- 20% Off</span> This Week</p>
        <h1 className=" md:text-2xl lg:text-5xl font-bold my-2 md:my-3 lg:my-5">Featured Product <br /> Apple Accessories 2024</h1>
        <p className=" text-[10px] md:text-xs lg:text-lg font-medium">Starting at <span className=" text-[#eb6b62] text-sm md:text-xl lg:text-3xl font-bold">$1209.00</span></p>
        <button className=" btn text-xs lg:text-md bg-[#ff7e00] mt-3">Shopping Now</button>
      </div>
    </div>
  );
};

export default Banner;
