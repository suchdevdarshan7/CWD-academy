import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({ id: todoList.length + 1, task: "" });

  const [checked, setChecked] = useState(false);

  function handleChange(e) {
    console.log(e.target.value);

    setTodo({ id: todoList.length + 1, task: e.target.value });
    console.log(todo);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task === "") {
      alert("Hey idiot fill the todo ");
      return;
    }

    setTodo({ ...todo, task: "" });
    setTodoList([...todoList, todo]);
    console.log(todoList);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo.task}
          placeholder="Enter the todo"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <div>
        {todoList.length > 0 &&
          todoList.map((todos) => {
            return (
              <li
                key={todos.id}
                className={checked ? "checked" : "not-checked"}>
                {todos.task}{" "}
                <button
                  onClick={(e) => {
                    setTodoList(todoList.filter((el) => el.id !== todos.id));
                  }}>
                  Delete
                </button>
                <input
                  type="checkbox"
                  onClick={() => setChecked(!checked)}
                  checked={checked ? true : false}
                />
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default TodoList;
