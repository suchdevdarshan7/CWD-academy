import React, { useContext } from "react";
import Button from "./Button";
import { counterContext } from "../Context/counterContext";

const Counter = () => {
  const { count, setCount } = useContext(counterContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Button />
    </div>
  );
};

export default Counter;
