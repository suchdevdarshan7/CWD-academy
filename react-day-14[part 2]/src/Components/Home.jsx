import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Products />
      </section>
    </div>
  );
};

export default Home;
