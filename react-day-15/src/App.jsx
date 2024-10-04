import { useReducer, useState } from "react";
import { counterContext } from "./Context/CounterContext";
import Navbar from "./Components/Navbar";

function reducer(state, action) {
  if (action.type === "sum") {
    return { ...state, count: state.count + 10 };
  } else if (action.type === "diff") {
    return { ...state, TotalPrice: state.TotalPrice + 10000 };
  } else if (action.type === "total") {
    return {
      ...state,
      CartProducts: state.CartProducts.map((element) => {
        let sum = 0;
        return sum + element;
      }),
    };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    Products: [],
    CartProducts: [],
    TotalCartValue: 0,
  });

  // const [Products,setProducts] = useState([]);
  // const [CartProducts,setCartProducts] = useState([]);
  // const [TotalCartValue,setTotalCartValue] = useState(0);

  return (
    <counterContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <div>
        <h1 onClick={() => dispatch({ type: "sum" })}>
          Count is {state.count}
        </h1>
        <h2 onClick={() => dispatch({ type: "diff" })}>
          Total Price is {state.TotalPrice}
        </h2>
      </div>
    </counterContext.Provider>
  );
};

export default App;
