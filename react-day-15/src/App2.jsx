import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "inc") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "dec") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "reset") {
    return {
      count: 0,
    };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, cartTotal: 1000 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "inc" })}>
        Click to increase The count
      </button>

      <button onClick={() => dispatch({ type: "dec" })}>
        Click to Decrement The count
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <p>Count: {state.count}</p>
    </div>
  );
};

export default App;
