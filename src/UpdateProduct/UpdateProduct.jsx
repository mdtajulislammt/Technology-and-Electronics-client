import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
     const product = useLoaderData()
     console.log(product);

     const handleUpdateProduct=(e)=>{
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const brandname = form.brandname.value;
          const type = form.type.value;
          const price = form.price.value;
          const description = form.description.value;
          const rating = form.rating.value;
          const img = form.img.value;
          const newProduct = {name,brandname,type,price,description,rating,img}

           //server 
     fetch(`https://technology-and-electronics-server-5y2vicyzi.vercel.app/brand/products/${product._id}`,{
          method:"PUT",
          headers:{
               "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
     })
     .then(res=>res.json())
     .then(data=> {
      if(data.matchedCount){
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
          <div>
              <form onSubmit={handleUpdateProduct}>    
<div className="min-h-screen p-6 dark:bg-black bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>
     
          
      <div className="bg-[#ff7e00] rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="">
            <p className="font-medium text-xl ">Update Product</p>
            <p>Please fill out all the fields.</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-5">
                <label htmlFor="email">Product Name</label>
                <input type="name" defaultValue={product?.name}  name="name" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-5">
                <label htmlFor="email">Brand Name</label>
                <input type="text" defaultValue={product?.brandname}  name="brandname" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"/>
              </div>

              <div className="md:col-span-3">
                <label htmlFor="address">Product Type</label>
                <input type="text" defaultValue={product?.type}  name="type" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">Price</label>
                <input type="text" defaultValue={product?.price}  name="price" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
              </div>

              <div className="md:col-span-4">
                <label htmlFor="state">Image</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="img" defaultValue={product?.img}  id="state"  className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                  
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="state">Rating</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <input name="rating" defaultValue={product?.rating}  id="state"  className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                  
                </div>
              </div>
              
              <div className="md:col-span-5">
                <label htmlFor="country">Short description</label>
                <div className=" bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                  <textarea name="description" defaultValue={product?.description}  id="country"className="p-2 h-28 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                </div>
              </div>
             

      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <button className="bg-white hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</div>
          </form> 
          </div>
     );
};

export default UpdateProduct;