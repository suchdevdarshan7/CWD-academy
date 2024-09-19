import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Next.js</h1>
      <ul>
        <li>
          <NavLink to="/">App</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>

        <NavLink to="/form" className={"btn"}>
          Get into secret page
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
