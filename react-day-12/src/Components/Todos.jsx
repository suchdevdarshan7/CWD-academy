import { useState } from "react";
import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: 0, work: "" });

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.work) {
      setTodo({ ...todo, work: "" });

      setTodos((todos) => [...todos, todo]);
      console.log(todos);
    } else {
      alert("It is empty");
      return;
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo.work}
            onChange={(e) => {
              console.log(todo);
              setTodo({ ...todo, work: e.target.value, id: todos.length + 1 });
            }}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>

      <div className="container2">
        {todos.map((element) => (
          <li key={el.id}>
            {el.work}
            <button
              onClick={(e) => {
                console.log(e.target.value);
                console.log(el.id);

                setTodos((todos) =>
                  todos.filter((items) => {
                    console.log(`the todos ${todo.id}`);
                    console.log(`The element is ${el.id}`);
                    return el.id !== todo.id;
                  })
                );
              }}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todos;
