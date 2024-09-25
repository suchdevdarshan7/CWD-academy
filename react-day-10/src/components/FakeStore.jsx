import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Product from "./Product";
import Carousel from "./Carousel";

const FakeStore = () => {
  const [products, setProducts] = useState([]);

  const [loading, SetLoading] = useState(false);

  async function GetProductData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts((products) => data);
    SetLoading((loading) => false);
  }

  useEffect(() => {
    SetLoading((loading) => true);
    GetProductData();
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Product data={products} />}

      <section>
        <Carousel />
      </section>
    </div>
  );
};

export default FakeStore;
