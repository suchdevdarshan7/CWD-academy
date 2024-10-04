import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const navigate = useNavigate();
  const { data: products } = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      {products?.map((el) => {
        return (
          <li key={el.id} onClick={() => navigate(`/products/${el.id}`)}>
            {el.title}
          </li>
        );
      })}
    </div>
  );
};

export default Products;
