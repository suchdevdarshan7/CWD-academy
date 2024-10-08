import React, { useState } from "react";

const App = () => {
  const [state, setState] = useState(1);
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p onClick={() => setState(state + 1)}>{state}</p>
    </div>
  );
};

export default App;
