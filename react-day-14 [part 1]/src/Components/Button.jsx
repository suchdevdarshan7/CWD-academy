import { useContext } from "react";
import { counterContext } from "../Context/counterContext";

const Button = () => {
  const { count, setCount } = useContext(counterContext);
  return (
    <div>
      <button onClick={() => setCount(count + 2)}>{count} counter +2</button>
    </div>
  );
};

export default Button;
