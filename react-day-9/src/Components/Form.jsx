import React, { useRef } from "react";
import { useNavigate } from "react-router";
import Navbar from "./Navbar";

const Form = () => {
  let username = useRef(null);
  let password = useRef(null);

  let navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username.current.value === "" || password.current.value === "") {
      alert("Hey fill the form idiot ");
    } else {
      navigate("/admin/true");
    }
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={username} />
        </div>
        <div>
          <input type="password" ref={password} />
        </div>

        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
