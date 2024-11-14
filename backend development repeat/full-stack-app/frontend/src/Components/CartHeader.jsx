import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductProvider";

const CartHeader = ({ total }) => {
  const { cart } = useContext(ProductContext);

  return (
    <div>
      {cart ? (
        <h2>You have {cart.length} of products in your cart</h2>
      ) : (
        <h2>Your cart is empty</h2>
      )}
      <h3>Total price in the cart is {total.toFixed(2)}</h3>
    </div>
  );
};

export default CartHeader;
