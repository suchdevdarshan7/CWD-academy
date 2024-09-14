import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);

  async function getApiData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
    console.log(data);
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <h1>
      {data?.map((el) => (
        <li>{el.name}</li>
      ))}

      <div>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </h1>
  );
}
export default App;
