import React, { useContext } from "react";

import { LoginContext } from "./Context/LoginProvider";
import Login from "./Components/Login";
import Products from "./Components/Products";

const App = () => {
  const { loggedIn } = useContext(LoginContext);
  return <div>{loggedIn ? <Products /> : <Login />}</div>;
};

export default App;
