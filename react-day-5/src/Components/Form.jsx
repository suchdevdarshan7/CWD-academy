import React from "react";
import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const [error, setError] = useState({ status: false, message: "" });

  const [show, setShow] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(data);
    // sendToBackend(); //==> later

    if (data.username === "" || data.password === "") {
      setError({ status: true, message: "You must fill the form!" });
      return;
    } else {
      setError({ status: false, message: "" });
      alert("form succesfully submitted");
      setData({ username: "", password: "" });
    }
  }

  function handleClick(e) {
    show ? (e.target.textContent = "hide") : (e.target.textContent = "show");
    setShow(!show);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error.status && <p style={{ color: "red" }}>{error.message}</p>}

        <div>
          <input
            type="text"
            placeholder="Username"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div>
          <input
            type={show ? "text" : "password"}
            value={data.password}
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="password"
          />
          <a
            style={{
              backgroundColor: "red",
              padding: "5px 10px",
              borderRadius: "12px",
            }}
            onClick={handleClick}>
            show
          </a>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
