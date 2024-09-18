import { useCallback, useState } from "react";

function App() {
  const [state, setState] = useState(200000000);

  const value = useCallback(() => setState((c) => c * 1000000), [state]);

  //! memoizing a function

  return (
    <div>
      <h2>The value of the state is : {state}</h2>
      <button onClick={() => value()}>Click me</button>
    </div>
  );
}

export default App;
