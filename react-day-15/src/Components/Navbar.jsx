import React, { useContext } from "react";
import { counterContext } from "../Context/CounterContext";

const Navbar = () => {
  const { state, dispatch } = useContext(counterContext);

  return (
    <div>
      Hi i am a navbar my count value is {state.count} and my totalprice is{" "}
      {state.TotalPrice};
    </div>
  );
};

export default Navbar;
