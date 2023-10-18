import { FaMotorcycle ,FaCreditCard  ,FaComments} from 'react-icons/fa';
import { BsShieldShaded} from 'react-icons/bs';

const OrderSection = () => {
     return (
          <div className=' mt-14 px-5'>
               <div className=' grid md:grid-cols-2 lg:grid-cols-4 text-center border-t-2 border-b-2 p-7  '>
                    <div className=' text-center lg:border-r-2 p-4 '>
                         <FaMotorcycle className=' mx-auto text-5xl '/>
                         <h2 className=' text-2xl font-semibold my-3'>Free Delivery</h2>
                         <p className=' text-md font-medium'>And free returns. See checkout for delivery dates.</p>
                    </div>
                    <div className=' text-center lg:border-r-2 p-4 '>
                         <FaCreditCard className=' mx-auto text-5xl '/>
                         <h2 className=' text-2xl font-semibold my-3'>Safe Payment</h2>
                         <p className=' text-md font-medium'>Pay with the world’s most popular and secure payment methods.</p>
                    </div>
                    <div className=' text-center lg:border-r-2 p-4 '>
                         <BsShieldShaded className=' mx-auto text-5xl '/>
                         <h2 className=' text-2xl font-semibold my-3'>Shop With Confidence</h2>
                         <p className=' text-md font-medium'>Our Buyer Protection covers your Purchasefrom click to delivery.</p>
                    </div>
                    <div className=' text-center p-4 '>
                         <FaComments className=' mx-auto text-5xl '/>
                         <h2 className=' text-2xl font-semibold my-3'>24/7 Help Center</h2>
                         <p className=' text-md font-medium'>Have a question? Call a Specialist or chat online.</p>
                    </div>
               </div>
          </div>
     );
};

export default OrderSection;