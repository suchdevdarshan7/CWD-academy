import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Product.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import PopUp from "./PopUp";

const Product = () => {
  const { slug } = useParams();

  const [showModal, setShowModal] = useState(false);

  const { data: product, loading } = useFetch(
    `https://fakestoreapi.com/products/${slug}`
  );

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      {showModal && <PopUp />}

      <Link to={"/products"}>Products</Link>
      <h1>{product?.title}</h1>
      <h2>{product?.price} $</h2>
      <img src={product?.image} alt="" />
      <p>{product?.description}</p>

      <button onClick={() => setShowModal(!showModal)}>
        click to show the pop up{" "}
      </button>
    </div>
  );
};

export default Product;
