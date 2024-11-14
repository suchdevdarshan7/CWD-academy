import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductProvider";
import { useParams } from "react-router";

const Product = () => {
  const { slug } = useParams();

  const { product, setProduct, getProduct } = useContext(ProductContext);

  useEffect(() => {
    getProduct(slug);
  }, [slug]);

  return (
    <div>
      <img src={product.image} alt="" />
    </div>
  );
};

export default Product;
