import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {products.map((el) => {
        return <li id={el.id}>{el.title}</li>;
      })}
    </div>
  );
};

export default Products;
