import { useLoaderData } from "react-router-dom";
import Banner from "./Home/Banner";
import Brand from "./Home/Brand";
import OrderSection from "./OrderSection/OrderSection";
import Offer from "./Offer/Offer";
import OfferBannnerads from "./Offer/OfferBannnerads";



const Home = () => {
     const brands = useLoaderData();
     return (
          <div className=" dark:bg-black">
               <Banner></Banner>
               <OfferBannnerads></OfferBannnerads>
               <h2 className=" text-2xl dark:text-white font-semibold ml-16 mb-5">Top Sale Brand</h2>
               <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7 px-14">
                    {
                         brands.map((brand) => (
                              <Brand key={brand.id} brand={brand} />
                         ))
                    }
               </div>
               
               <Offer></Offer>
               <OrderSection></OrderSection>
          </div>
     );
};

export default Home;