import React, { Suspense, useEffect, useState } from "react";
import { sort } from "fast-sort";

const App = () => {
  const [usersData, setUsersData] = useState([]);

  async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setUsersData((usersData) => data);
    console.log(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  function handleClick() {
    const sortedProducts = sort(usersData).asc((el) => el.name);

    setUsersData((usersData) => sortedProducts);
  }

  function handleClickForEmail() {
    const sortedProducts = sort(usersData).asc((el) => el.email);

    setUsersData((usersData) => sortedProducts);
  }

  return (
    <div>
      <div>
        <select>
          <option value="asc">Ascending </option>
          <option value="desc">Descding</option>
        </select>

        <select>
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {usersData.map((el) => {
            return (
              <tr key={el.name}>
                <td>{el.name}</td>
                <td>{el.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <button onClick={handleClick}>Sort By Name</button>
        <button onClick={handleClickForEmail}>Sort By Email</button>
      </div>
    </div>
  );
};

export default App;
