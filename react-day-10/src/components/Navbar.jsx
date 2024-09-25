import React from "react";

const Navbar = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-5">
      <div className="h-16 w-16 bg-blue-300 border-black border-solid  border-4 rounded-xl hover:bg-orange-400"></div>
      <div className="h-16 w-16 bg-blue-300 border-black border-solid  border-4 rounded-xl hover:bg-orange-400"></div>
      <div className="h-16 w-16 bg-blue-300 border-black border-solid  border-4 rounded-xl hover:bg-orange-400"></div>

      <h1 className="text-4xl font-bold ">
        This text is form testing purposes
      </h1>

      <span className="loading loading-spinner loading-lg"></span>
      <button className="btn btn-accent">Click me</button>
    </div>
  );
};

export default Navbar;

// link
// visited
// hover
// active
