import React from "react";
import { useState } from "react";
import Counter from "./Components/Counter";
import { counterContext } from "./Context/counterContext";

const App = () => {
  const [count, setCount] = useState(0);

  //Redux

  //! passing props from parent to child to grandchild : -> props drilling
  return (
    <div>
      <counterContext.Provider value={{ count, setCount }}>
        <Counter />
      </counterContext.Provider>
    </div>
  );
};

export default App;
