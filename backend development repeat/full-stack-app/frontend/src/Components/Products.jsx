import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductProvider";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import ProductCard from "./ProductCard";

import "../css/Products.css";

const Products = () => {
  const { products, getProducts, setCart, Cart } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  function handleAddToCart(el) {
    setCart((Cart) => [...Cart, el]);
  }

  return (
    <div>
      <Navbar />
      <section className="products-container">
        {products.map((el) => (
          <ProductCard
            handleAddToCart={handleAddToCart}
            key={el.id}
            title={el.title}
            image={el.image}
            price={el.price}
            element={el}
            id={el.id}
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
