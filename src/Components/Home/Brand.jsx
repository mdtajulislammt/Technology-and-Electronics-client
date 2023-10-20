import { Link } from "react-router-dom";

const Brand = ({brand }) => {
  const {brandname, img } = brand || {};

  return (
    <div>
      <Link to={`/brand/${brandname}`} className="card border border-[#ff7e00] hover:bg-[#ff7e00] dark:bg-[#ffffffd5] dark:hover:bg-[#ff7e00]  shadow-xl cursor-pointer ">
        <figure className="h-60">
          <img
          className=" w-64  p-10"
            src={img}
           
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold py-2 rounded bg-black dark:bg-[#ff7e00]  text-[#ff7e00] dark:text-white  ">{brandname}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
