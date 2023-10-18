import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./Home/BrandProduct";

const BrandProducts = () => {
  const { brandname } = useParams();
  const [products, setProducts] = useState({});
  const brandProducts = useLoaderData();

  useEffect(() => {
    const findProductData = brandProducts?.filter(
      (product) => product.brandname == brandname
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
        "Loading..."
      )}
    </div>
  );
};

export default BrandProducts;
