import { useState } from "react";

function App() {
  // If it has use as prefix it is more likely a hook

  const [Car, setCar] = useState("Lamborghini");
  const [Value, setValue] = useState(0);

  function handleClick() {
    setCar("Bugatti Chiron");
  }

  let handleButtonClick = () => {
    setValue(Value + 1);
  };

  console.log("App is rerendered");

  return (
    <div className="container">
      <Navbar />
      <h1 onClick={handleClick}>{Car}</h1>
      <button onClick={handleButtonClick}>{Value}</button>
    </div>
  );
}

function Navbar() {
  console.log("Navbar is renredered");
  return (
    <nav>
      <h1>I am navbar</h1>
      <Button />
    </nav>
  );
}

function Button() {
  const [Value, setValue] = useState(0);

  let handleButtonClick = () => {
    setValue(Value + 1);
  };

  console.log("button is renredered");
  return (
    <div>
      <button onClick={handleButtonClick}>I am button {Value}</button>
      {Value <= 3 && <Car />}
    </div>
  );
}

function Car() {
  console.log("Car is rerendered");

  return <p>My car is the best</p>;
}

function Bike() {
  return <p>My bike is the best</p>;
}

export default App;
