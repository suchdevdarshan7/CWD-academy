import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ element, image, price, title, handleAddToCart, id }) => {
  const navigate = useNavigate();

  function handleNavigate(e) {
    e.stopPropagation();
    navigate(`/product/${id}`);
  }

  return (
    <div className="product-container" onDoubleClick={handleNavigate}>
      <div className="absolute top product-box">
        <h3>{title}</h3>
      </div>
      <img src={image} alt="" />
      <div className="absolute bottom product-box">
        <h4>$ {price}</h4>
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(element);
            }}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
