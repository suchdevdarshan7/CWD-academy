import { useState } from "react";
import Navbar from "./Navbar";
import Button from "./Button";

const App = () => {
  console.log("The app is rerendered");

  const [state, setState] = useState(0);

  return (
    <div>
      {state}
      <Button onclick={() => setState(state + 1)}>Click</Button>

      <Navbar />
    </div>
  );
};

export default App;
