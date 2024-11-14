import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../Context/LoginProvider";

const Login = () => {
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(LoginContext);

  function handleSubmit(e) {
    e.preventDefault();

    setLoggedIn(true);
    navigate("/products");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
          <button onClick={() => navigate("/register")}>Sign Up</button>
        </div>

        <div>
          <a href="#">Forget Password</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
