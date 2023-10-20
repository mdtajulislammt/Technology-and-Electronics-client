import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./Home/BrandProduct";

const BrandProducts = () => {
  const { brandname } = useParams();
  const [products, setProducts] = useState({});
  const brandProducts = useLoaderData();
 

  useEffect(() => {
    const findProductData = brandProducts?.filter(
      (product) => product.brandname.toLowerCase() === brandname.toLowerCase()
    );
    
    setProducts(findProductData);
  }, [brandname, brandProducts]);
  return (
    <div>
      {products.length > 0 ? (
        <>
          <BrandProduct products={products}></BrandProduct>
        </>
      ) : (
       
      <>
      <section className="relative z-10 bg-[#ff7e00] py-[120px] mt-8">
        <div className="container">
          <div className="flex -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto  text-center">
                
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

      )}
    </div>
  );
};

export default BrandProducts;
