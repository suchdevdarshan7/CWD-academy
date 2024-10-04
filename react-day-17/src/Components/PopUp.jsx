import React from "react";
import { createPortal } from "react-dom";

const PopUp = () => {
  return (
    <div>
      {createPortal("I am the pop up ", document.querySelector("#modal"))}
    </div>
  );
};

export default PopUp;
