import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Amazon</h1>
      <ul>
        <li>
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
