import React, { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { LoginContext } from "./Context/LoginContext";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <LoginContext.Provider
      value={{ isLogin, setIsLogin, username, setUsername }}>
      <div>{isLogin ? <Home /> : <Login />}</div>
    </LoginContext.Provider>
  );
};

export default App;
