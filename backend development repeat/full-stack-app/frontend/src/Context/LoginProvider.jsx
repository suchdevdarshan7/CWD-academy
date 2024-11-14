import { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

function LoginProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
