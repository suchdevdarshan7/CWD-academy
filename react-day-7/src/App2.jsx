import { useState, useRef } from "react";

const App = () => {
  //! let example = 0 ;

  let example = useRef(0);

  // console.log("The component rendered again");

  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count :{count}</p>
      <p>The variable is {example.current}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Click to increase the count{" "}
      </button>
      <button
        onClick={() => {
          ++example.current;
          console.log(example.current);
        }}>
        Click to increase example
      </button>
    </div>
  );
};

export default App;
