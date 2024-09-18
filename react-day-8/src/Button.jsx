const Button = ({ children, onclick }) => {
  console.log("The button is rerendered");
  return <button onClick={onclick}>{children}</button>;
};

export default Button;
