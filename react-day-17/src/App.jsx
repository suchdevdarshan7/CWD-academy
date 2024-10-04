import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to={"/products"}>Products</Link>I am a application
    </div>
  );
};

export default App;
