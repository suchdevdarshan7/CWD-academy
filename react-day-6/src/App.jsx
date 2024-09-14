import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import NoNavbar from "./Components/NoNavbar";

function App() {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   alert("This useEffect runs on every render !");
  // });

  // useEffect(() => {
  //   alert("This useEffect runs on only one render !");
  // }, []);

  // useEffect(() => {
  //   alert("This useEffect when the state changes !");
  // }, [count]);

  return (
    <div className="container">
      {state < 2 ? <Navbar /> : <NoNavbar />}

      <button onClick={() => setState(state + 1)}>Increase</button>
      <h2>Count:{state}</h2>
      <button onClick={() => setState(state - 1)}>Decrease</button>
    </div>
  );
}

export default App;
