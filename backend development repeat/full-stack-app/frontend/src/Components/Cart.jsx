import React, { useCallback, useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductProvider";
import CartHeader from "./CartHeader";
import CartCard from "./CartCard";
import "../css/Cart.css";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, el) => acc + el.price, 0));
  }, [cart]);

  return (
    <div>
      <CartHeader total={total} />

      <div className="cart-main-container">
        {cart.map((item) => (
          <CartCard
            image={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
