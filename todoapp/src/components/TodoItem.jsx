import styles from "./todoitem.module.css";
function TodoItem({ item, todos, setTodos }) {
  function deleteTodo(item) {
    setTodos(todos.filter((todo) => todo != item));
  }

  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const className = item.done ? styles.completed : "";
  return (
    <h3>
      <span
        className={className}
        style={{ cursor: "pointer" }}
        onClick={() => handleClick(item.name)}
      >
        {item.name}
      </span>
      <span>
        <button onClick={() => deleteTodo(item)}>x</button>
      </span>
    </h3>
  );
}

export default TodoItem;
