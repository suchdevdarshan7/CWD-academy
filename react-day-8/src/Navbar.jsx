import { memo } from "react";

const Navbar = () => {
  console.log("The navbar is rerendered");
  return (
    <nav>
      <h1>This is a navbar</h1>
    </nav>
  );
};

export default memo(Navbar);
