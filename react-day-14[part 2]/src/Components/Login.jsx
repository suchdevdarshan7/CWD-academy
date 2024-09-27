import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

const Login = () => {
  const { setUsername, setIsLogin } = useContext(LoginContext);
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => setIsLogin(true)}>Submit</button>
    </div>
  );
};

export default Login;
