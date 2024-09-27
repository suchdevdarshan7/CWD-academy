import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "./Navbar.css";

const Navbar = () => {
  const { username, setIsLogin } = useContext(LoginContext);

  return (
    <nav>
      <h1>Hi, {username}</h1>

      <button onClick={() => setIsLogin(false)}>Logout</button>
    </nav>
  );
};

export default Navbar;
