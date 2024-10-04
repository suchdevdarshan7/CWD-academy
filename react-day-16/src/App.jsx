import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/CounterSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Subtract</button>
      <h1>count is: {count}</h1>
    </div>
  );
}
