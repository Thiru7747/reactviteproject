import { useState } from "react";
import TodoItem from "./TodoItem";
import "../css/style.css";
import TodoHeading from "./TodoHeading";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      <TodoHeading />
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </>
  );
}

export default Todo;
