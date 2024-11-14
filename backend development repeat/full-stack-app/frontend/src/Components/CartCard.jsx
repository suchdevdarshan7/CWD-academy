import React, { useContext } from "react";
import "../css/Cart.css";
import { ProductContext } from "../Context/ProductProvider";

const CartCard = ({ image, price, title, id }) => {
  const { setCart, cart } = useContext(ProductContext);

  return (
    <div className="cart-container">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>${price}</h3>
      </div>
      <div>
        <button onClick={() => setCart(cart.filter((el) => el.id !== id))}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
