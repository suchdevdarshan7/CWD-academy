import { useEffect, useRef } from "react";

const App = () => {
  const username = useRef(null);
  const password = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    console.log(username.current.value);
    console.log(password.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={username} />
        </div>
        <div>
          <input type="password" ref={password} />
        </div>
        <div>
          <input type="tel" className="test" />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default App;
