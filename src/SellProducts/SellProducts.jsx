
import { useLoaderData } from "react-router-dom";

const SellProducts = () => {
     const sellProducts = useLoaderData()
     console.log(sellProducts);
  return (
    <div className="dark:bg-black  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-5 lg:px-16">
     {
     sellProducts?.map(sellProduct =>
        <>
        <div className="card  bg-base-100 shadow-xl image-full my-10">
            <figure>
              <img
              className="  "
                src={sellProduct.img}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-lg font-semibold">{sellProduct.title}</h2>
             
            </div>
          </div>
        </>  
          )
     }
      
          

    </div>
  );
};

export default SellProducts;
