import { useState } from "react";
import TodoItem from "./TodoItem";
import "../css/style.css";
import TodoHeading from "./TodoHeading";
import TodoList from "./TodoList";
import Form from "./Form";

function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoHeading />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default Todo;
